import { istrav } from '../node_modules/istrav/api/index.js'

import * as eventSources from './event.sources.js'
import * as eventBackup from './event.backup.js'
import * as eventLogging from './event.logging.js'
import * as accountUsers from './account.users.js'
import * as accountCarts from './account.carts.js'
import * as accountOrders from './account.orders.js'
import * as tenantApps from './tenant.apps.js'
import * as tenantMembers from './tenant.members.js'
import * as storeCategories from './store.categories.js'
import * as storeCollections from './store.collections.js'
import * as storeProducts from './store.products.js'
import * as appMenus from './app.menus.js'
import * as appPages from './app.pages.js'

export let scripts = {
  dashboard: {
    doHelloWorld: doHelloWorld,
    doRun: doRun
  },
  event: {
    sources: eventSources,
    backup: eventBackup,
    logging: eventLogging
  },
  tenant: {
    members: tenantMembers,
    apps: tenantApps
  },
  app: {
    menus: appMenus,
    pages: appPages
  },
  account: {
    users: accountUsers,
    carts: accountCarts,
    orders: accountOrders
  },
  store: {
    collections: storeCollections,
    categories: storeCategories,
    products: storeProducts
  }
}

export async function doHelloWorld () {
  // get started:
  // npm install istrav

  // in the code:
  // import { istrav } from './node_modules/istrav/api/index.js'
  // import { scripts } from './scripts/dashboard.js'
  
  // then:
  // use any istrav api...
  console.log(`hello istrav: ${JSON.stringify(istrav, null, 2)}`)
  // or any script method...
  console.log(`hello scripts: ${JSON.stringify(scripts, null, 2)}`)

  return 'hello world!'
}

export async function doRun (scriptId) {
  scriptId = scriptId || 'doHelloWorld'
  let script = window[`${scriptId}Code`].getValue()
  let call = new Function('return ' + script)()
  let called = await call()
  console.log(`SCRIPT ::: ${JSON.stringify(called, null, 2)}`)
  
  // console.log('welcome to istrav')
}