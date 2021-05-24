import * as eventSources from './event.sources'
// import * as eventBackup from './event.backup'
// import * as eventLogging from './event.logging'
import * as accountUsers from './account.users'
import * as accountCarts from './account.carts'
import * as accountOrders from './account.orders'
import * as tenantApps from './tenant.apps'
import * as tenantMembers from './tenant.members'
import * as storeCategories from './store.categories'
import * as storeCollections from './store.collections'
import * as storeProducts from './store.products'
import * as appMenus from './app.menus'
import * as appBlocks from './app.blocks'
import * as appPages from './app.pages'
import * as appFAQ from './app.faq'
import * as subscriptionLicenses from './subscription.licenses'
import * as subscriptionPlans from './subscription.plans'
import * as channelVideos from './channel.videos'
import * as channelGuides from './channel.guides'
import * as channelPlaylists from './channel.playlists'

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
  console.log(`hello scripts: ${JSON.stringify(scripts, null, 2)}`)
}

async function doRun (scriptId) {
  scriptId = scriptId || 'doHelloWorld'
  let script = window[`${scriptId}Code`].getValue()
  let call = new Function('return ' + script)()
  let called = await call()
  console.log(`SCRIPT ::: ${JSON.stringify(called, null, 2)}`)
  
  // console.log('welcome to istrav')
}