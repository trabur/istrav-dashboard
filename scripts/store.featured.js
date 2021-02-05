import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'store.featured')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      productId: 'iufh34ufhu8bf4...'
    }
  }

  // perform
  let eventSource = await istrav.store.featured.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'store.featured')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.store.featured.all(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, productId, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'store.featured')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    productId: productId || 'fpuh348f38f...',
    change: change || {
      productId: 'iufh34ufhu8bf4...'
    }
  }

  // perform
  let eventSource = await istrav.store.featured.update(es)

  // finish
  return eventSource
}

export async function getOne (appId, productId) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'store.featured')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    productId: productId || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.featured.get(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, productId) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'store.featured')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    productId: productId || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.featured.remove(es)

  // finish
  return eventSource
}