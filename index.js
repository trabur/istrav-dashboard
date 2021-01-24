import { istrav } from "./node_modules/istrav/api/index.js";

import { fleetVehiclesTemplate, fleetVehiclesInit } from './templates/fleet.vehicles.js'
import { accountUsersTemplate, accountUsersInit }  from './templates/account.users.js'

import { navigationTemplate } from './templates/navigation.js'
import { reportTemplate } from './templates/report.js'

let navigationDiv = document.getElementById('navigation');
let contentDiv = document.getElementById('content');
let reportDiv = document.getElementById('report');

function noop() {}

let routes = {
  '/': {
    template: accountUsersTemplate,
    method: accountUsersInit,
  },
  '/index.html': {
    template: accountUsersTemplate,
    method: accountUsersInit,
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

navigationDiv.innerHTML = navigationTemplate;
contentDiv.innerHTML = routes[window.location.pathname].template;
reportDiv.innerHTML = reportTemplate;
let load = routes[window.location.pathname].method; load();

/**
 * expose library
 */
window.istrav = istrav

/**
 * logging
 */
let counter = 0
window.console = {
  log: function(str) {
    var pre = document.createElement("pre")
    var code = document.createElement("code")
    pre.setAttribute('id', `${++counter}`)
    pre.setAttribute('class', "language-javascript")
    code.appendChild(document.createTextNode(str))
    document.getElementById("log").prepend(pre)
    document.getElementById(`${counter}`).appendChild(code)
  }
}
console.log('welcome :)')