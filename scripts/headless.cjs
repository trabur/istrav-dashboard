import { istrav } from 'istrav'

import * as eventSources from './event.sources.js'
// import * as eventBackup from './event.backup.js'
// import * as eventLogging from './event.logging.js'
import * as accountUsers from './account.users.js'
import * as accountCarts from './account.carts.js'
import * as accountOrders from './account.orders.js'
import * as tenantApps from './tenant.apps.js'
import * as tenantMembers from './tenant.members.js'
import * as storeCategories from './store.categories.js'
import * as storeCollections from './store.collections.js'
import * as storeProducts from './store.products.js'
import * as appMenus from './app.menus.js'
import * as appBlocks from './app.blocks.js'
import * as appPages from './app.pages.js'
import * as appFAQ from './app.faq.js'
import * as subscriptionLicenses from './subscription.licenses.js'
import * as subscriptionPlans from './subscription.plans.js'
import * as channelVideos from './channel.videos.js'
import * as channelGuides from './channel.guides.js'
import * as channelPlaylists from './channel.playlists.js'

export let scripts = {
  headless: {
    doHelloWorld: doHelloWorld,
    doRun: doRun
  },
  event: {
    sources: eventSources,
    // backup: eventBackup,
    // logging: eventLogging
  },
  tenant: {
    members: tenantMembers,
    apps: tenantApps
  },
  app: {
    menus: appMenus,
    blocks: appBlocks,
    pages: appPages,
    faq: appFAQ
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
  },
  subscription: {
    licenses: subscriptionLicenses,
    plans: subscriptionPlans
  },
  channel: {
    videos: channelVideos,
    guides: channelGuides,
    playlists: channelPlaylists
  }
}

export async function doHelloWorld () {
  // get started:
  // npm install istrav

  // in the code:
  // import { istrav } from './node_modules/istrav/api/index.js'
  // import { scripts } from './scripts/headless.cjs'
  
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