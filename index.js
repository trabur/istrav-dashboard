import { istrav } from "./node_modules/istrav/api/index.js";

import { eventSourcesTemplate, eventSourcesInit } from './templates/event.sources.js'
import { eventBackupTemplate, eventBackupInit } from "./templates/event.backup.js";
import { eventLoggingTemplate, eventLoggingInit } from './templates/event.logging.js'
import { fleetVehiclesTemplate, fleetVehiclesInit } from './templates/fleet.vehicles.js'
import { accountUsersTemplate, accountUsersInit }  from './templates/account.users.js'

import { navigationTemplate } from './templates/navigation.js'
import { reportTemplate } from './templates/report.js'

/**
 * routing
 */
function noop() {}

let routes = {
  '/': {
    template: eventSourcesTemplate,
    method: eventSourcesInit,
  },
  '/index.html': {
    template: eventSourcesTemplate,
    method: eventSourcesInit,
  },
  '/event-sources': {
    template: eventSourcesTemplate,
    method: eventSourcesInit,
  },
  '/event-backup': {
    template: eventBackupTemplate,
    method: eventBackupInit,
  },
  '/event-logging': {
    template: eventLoggingTemplate,
    method: eventLoggingInit,
  },
  '/account-users': {
    template: accountUsersTemplate,
    method: accountUsersInit,
  },
  '/fleet-vehicles': {
    template: fleetVehiclesTemplate,
    method: fleetVehiclesInit,
  },
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname].template;
}

window.onNavItemClick = function onNavItemClick (pathName) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName].template;
  let init = routes[pathName].method; init();
}

/**
 * expose library
 */
window.id = () => Math.floor(Math.random() * 1000000000000)
window.istrav = istrav
istrav.event.sources.init({ host: 'https://api.istrav.com' })
istrav.event.backup.init({ host: 'https://api.istrav.com' })
istrav.event.logging.init({ host: 'https://api.istrav.com' })
istrav.account.users.init({ host: 'https://api.istrav.com' })

/**
 * event scripting
 */
import { doEventSource, getCheck, doPublish, getConsume } from './scripts/event.sources.js'
import { getHistory } from './scripts/event.backup.js'
import { getLog } from './scripts/event.logging.js'
import { getAll, getNew } from './scripts/account.users.js'

async function run (scriptId) {
  let script = window[`${scriptId}Code`].getValue()
  let call = new Function('return ' + script)()
  let called = await call()
  console.log(`SCRIPT ::: ${JSON.stringify(called, null, 2)}`)
}

window.scripts = {
  run,
  doEventSource, getCheck, doPublish, getConsume,
  getHistory,
  getLog,
  getAll, getNew
}

/**
 * init
 */
let navigationDiv = document.getElementById('navigation');
let contentDiv = document.getElementById('content');
let reportDiv = document.getElementById('report');

navigationDiv.innerHTML = navigationTemplate;
contentDiv.innerHTML = routes[window.location.pathname].template;
reportDiv.innerHTML = reportTemplate;

/**
 * logging
 */
let counter = 0
window.console = {
  log: function(str) {
    var pre = document.createElement("pre")
    var code = document.createElement("code")
    pre.setAttribute('id', `${++counter}`)
    pre.setAttribute('class', "language-json")
    code.appendChild(document.createTextNode(str))
    document.getElementById("log").prepend(pre)
    document.getElementById(`${counter}`).appendChild(code)
  }
}
console.log('welcome :)')
let load = routes[window.location.pathname].method; load();
