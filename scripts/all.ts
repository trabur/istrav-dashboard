import { istrav } from 'istrav'

import * as eventSources from './event.sources.ts'
// import * as eventBackup from './event.backup.ts'
// import * as eventLogging from './event.logging.ts'
import * as accountUsers from './account.users.ts'
import * as accountCarts from './account.carts.ts'
import * as accountOrders from './account.orders.ts'
import * as tenantApps from './tenant.apps.ts'
import * as tenantMembers from './tenant.members.ts'
import * as storeCategories from './store.categories.ts'
import * as storeCollections from './store.collections.ts'
import * as storeProducts from './store.products.ts'
import * as appMenus from './app.menus.ts'
import * as appBlocks from './app.blocks.ts'
import * as appPages from './app.pages.ts'
import * as appFAQ from './app.faq.ts'
import * as subscriptionLicenses from './subscription.licenses.ts'
import * as subscriptionPlans from './subscription.plans.ts'
import * as channelVideos from './channel.videos.ts'
import * as channelGuides from './channel.guides.ts'
import * as channelPlaylists from './channel.playlists.ts'

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

async function doHelloWorld () {
  // get started:
  // npm install istrav

  // in the code:
  // import { istrav } from './node_modules/istrav/api/index.ts'
  // import { scripts } from './scripts/all.ts'
  
  // then:
  // use any istrav api...
  console.log(`hello istrav: ${JSON.stringify(istrav, null, 2)}`)
  // or any script method...
  console.log(`hello scripts: ${JSON.stringify(scripts, null, 2)}`)

  return 'hello world!'
}

async function doRun (scriptId) {
  scriptId = scriptId || 'doHelloWorld'
  let script = window[`${scriptId}Code`].getValue()
  let call = new Function('return ' + script)()
  let called = await call()
  console.log(`SCRIPT ::: ${JSON.stringify(called, null, 2)}`)
  
  // console.log('welcome to istrav')
}