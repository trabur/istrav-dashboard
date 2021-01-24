import { fleetVehiclesTemplate, fleetVehicles } from './templates/fleet.vehicles.js'
import { accountUsersTemplate, accountUsers }  from './templates/account.users.js'

import { navigationTemplate } from './templates/navigation.js'
import { reportTemplate } from './templates/report.js'

let navigationDiv = document.getElementById('navigation');
let contentDiv = document.getElementById('content');
let reportDiv = document.getElementById('report');

function noop() {}

let routes = {
  '/': {
    template: accountUsersTemplate,
    method: accountUsers,
  },
  '/index.html': {
    template: accountUsersTemplate,
    method: accountUsers,
  },
  '/account-users': {
    template: accountUsersTemplate,
    method: accountUsers,
  },
  '/fleet-vehicles': {
    template: fleetVehiclesTemplate,
    method: fleetVehicles,
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
    document.getElementById("log").appendChild(pre)
    document.getElementById(`${counter}`).appendChild(code)
  }
}
console.log('hi')
console.log('there')