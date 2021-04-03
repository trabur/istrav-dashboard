import { headlessTemplate, headlessInit } from './templates/headless.js'
import { eventSourcesTemplate, eventSourcesInit } from './templates/event.sources.js'
import { eventBackupTemplate, eventBackupInit } from "./templates/event.backup.js";
import { eventLoggingTemplate, eventLoggingInit } from './templates/event.logging.js'
import { tenantMembersTemplate, tenantMembersInit }  from './templates/tenant.members.js'
import { tenantAppsTemplate, tenantAppsInit }  from './templates/tenant.apps.js'
import { fleetVehiclesTemplate, fleetVehiclesInit } from './templates/fleet.vehicles.js'
import { accountUsersTemplate, accountUsersInit }  from './templates/account.users.js'
import { accountCartsTemplate, accountCartsInit }  from './templates/account.carts.js'
import { accountOrdersTemplate, accountOrdersInit }  from './templates/account.orders.js'
import { storeProductsTemplate, storeProductsInit }  from './templates/store.products.js'
import { storeCategoriesTemplate, storeCategoriesInit }  from './templates/store.categories.js'
import { storeCollectionsTemplate, storeCollectionsInit }  from './templates/store.collections.js'
import { appMenusTemplate, appMenusInit }  from './templates/app.menus.js'
import { appPagesTemplate, appPagesInit }  from './templates/app.pages.js'
import { subscriptionLicensesTemplate, subscriptionLicensesInit }  from './templates/subscription.licenses.js'
import { subscriptionPlansTemplate, subscriptionPlansInit }  from './templates/subscription.plans.js'
import { channelVideosTemplate, channelVideosInit }  from './templates/channel.videos.js'
import { channelGuidesTemplate, channelGuidesInit }  from './templates/channel.guides.js'

import { navigationTemplate } from './templates/navigation.js'
import { reportTemplate, reportInit } from './templates/report.js'

/**
 * routing
 */
function noop() {}

let routes = {
  '/': {
    template: headlessTemplate,
    method: headlessInit,
  },
  '/index.html': {
    template: headlessTemplate,
    method: headlessInit,
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
  '/app-menus': {
    template: appMenusTemplate,
    method: appMenusInit,
  },
  '/app-pages': {
    template: appPagesTemplate,
    method: appPagesInit,
  },
  '/store-collections': {
    template: storeCollectionsTemplate,
    method: storeCollectionsInit,
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
  '/account-carts': {
    template: accountCartsTemplate,
    method: accountCartsInit,
  },
  '/account-orders': {
    template: accountOrdersTemplate,
    method: accountOrdersInit,
  },
  '/subscription-licenses': {
    template: subscriptionLicensesTemplate,
    method: subscriptionLicensesInit,
  },
  '/subscription-plans': {
    template: subscriptionPlansTemplate,
    method: subscriptionPlansInit,
  },
  '/channel-videos': {
    template: channelVideosTemplate,
    method: channelVideosInit,
  },
  '/channel-guides': {
    template: channelGuidesTemplate,
    method: channelGuidesInit,
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
 * libraries
 */
import { istrav } from "./node_modules/istrav/api/index.js";

window.istrav = istrav
function init (response) {
  let API_URI = response.data.API_URI
  console.log(`API_URI ::: ${API_URI}`)
  istrav.event.sources.init({ host: API_URI })
  istrav.event.backup.init({ host: API_URI })
  istrav.event.logging.init({ host: API_URI })
  istrav.tenant.apps.init({ host: API_URI })
  istrav.app.menus.init({ host: API_URI })
  istrav.app.pages.init({ host: API_URI })
  istrav.tenant.members.init({ host: API_URI })
  istrav.account.users.init({ host: API_URI })
  istrav.account.carts.init({ host: API_URI })
  istrav.account.orders.init({ host: API_URI })
  istrav.store.collections.init({ host: API_URI })
  istrav.store.categories.init({ host: API_URI })
  istrav.store.products.init({ host: API_URI })
  istrav.subscriptions.licenses.init({ host: API_URI })
  istrav.subscriptions.plans.init({ host: API_URI })
  istrav.channel.videos.init({ host: API_URI })
  istrav.channel.guides.init({ host: API_URI })
}
async function environment () {
  return await axios
    .get('/environment')
    .then(init)
}
environment()

import { scripts } from './scripts/headless.js'

window.scripts = scripts
window.doRun = scripts.headless.doRun

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
