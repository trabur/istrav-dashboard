import { dashboardTemplate, dashboardInit } from './templates/dashboard.js'
import { eventSourcesTemplate, eventSourcesInit } from './templates/event.sources.js'
import { eventBackupTemplate, eventBackupInit } from "./templates/event.backup.js";
import { eventLoggingTemplate, eventLoggingInit } from './templates/event.logging.js'
import { tenantMembersTemplate, tenantMembersInit }  from './templates/tenant.members.js'
import { tenantAppsTemplate, tenantAppsInit }  from './templates/tenant.apps.js'
import { fleetVehiclesTemplate, fleetVehiclesInit } from './templates/fleet.vehicles.js'
import { accountUsersTemplate, accountUsersInit }  from './templates/account.users.js'
import { accountCartTemplate, accountCartInit }  from './templates/account.cart.js'
import { accountOrdersTemplate, accountOrdersInit }  from './templates/account.orders.js'
import { storeProductsTemplate, storeProductsInit }  from './templates/store.products.js'
import { storeCategoriesTemplate, storeCategoriesInit }  from './templates/store.categories.js'
import { storeFeaturedTemplate, storeFeaturedInit }  from './templates/store.featured.js'

import { navigationTemplate } from './templates/navigation.js'
import { reportTemplate, reportInit } from './templates/report.js'

/**
 * routing
 */
function noop() {}

let routes = {
  '/': {
    template: dashboardTemplate,
    method: dashboardInit,
  },
  '/index.html': {
    template: dashboardTemplate,
    method: dashboardInit,
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
  '/tenant-members': {
    template: tenantMembersTemplate,
    method: tenantMembersInit,
  },
  '/tenant-apps': {
    template: tenantAppsTemplate,
    method: tenantAppsInit,
  },
  '/store-featured': {
    template: storeFeaturedTemplate,
    method: storeFeaturedInit,
  },
  '/store-categories': {
    template: storeCategoriesTemplate,
    method: storeCategoriesInit,
  },
  '/store-products': {
    template: storeProductsTemplate,
    method: storeProductsInit,
  },
  '/account-users': {
    template: accountUsersTemplate,
    method: accountUsersInit,
  },
  '/account-cart': {
    template: accountCartTemplate,
    method: accountCartInit,
  },
  '/account-orders': {
    template: accountOrdersTemplate,
    method: accountOrdersInit,
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
 * primary key generator
 */
window.id = (length) => {
  var result  = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

/**
 * libraries
 */
import { istrav } from "./node_modules/istrav/api/index.js";

window.istrav = istrav
istrav.event.sources.init({ host: 'https://api.istrav.com' })
istrav.event.backup.init({ host: 'https://api.istrav.com' })
istrav.event.logging.init({ host: 'https://api.istrav.com' })
istrav.tenant.apps.init({ host: 'https://api.istrav.com' })
istrav.tenant.members.init({ host: 'https://api.istrav.com' })
istrav.account.users.init({ host: 'https://api.istrav.com' })

import { scripts } from './scripts/dashboard.js'

window.scripts = scripts
window.doRun = scripts.dashboard.doRun

/**
 * init
 */
let navigationDiv = document.getElementById('navigation');
let contentDiv = document.getElementById('content');
let reportDiv = document.getElementById('report');

navigationDiv.innerHTML = navigationTemplate;
contentDiv.innerHTML = routes[window.location.pathname].template;
reportDiv.innerHTML = reportTemplate;
reportInit()

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
