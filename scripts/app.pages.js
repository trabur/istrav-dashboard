import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'store.products')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.store.products.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'store.products')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'my-article',
      slug: 'my-article',
      content: "### hello world" // markdown
    }
  }

  // perform
  let eventSource = await istrav.store.products.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'store.products')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.products.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'store.products')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      name: 'our-app'
    }
  }

  // perform
  let eventSource = await istrav.store.products.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'store.products')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.products.remove(es)

  // finish
  return eventSource
}