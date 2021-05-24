import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'test',
      slug: 'test'
    }
  }

  // perform
  let eventSource = await istrav.store.collections.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.store.collections.all(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await doEventSource('getUpdate', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      name: 'test'
    }
  }

  // perform
  let eventSource = await istrav.store.collections.update(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'this-slug'
  }

  // perform
  let eventSource = await istrav.store.collections.get(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.store.collections.remove(es)

  // finish
  return eventSource
}

export async function getProducts (appId, slug) {
  // object
  let es = await doEventSource('getProducts', 'store.collections', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.store.collections.products(es)

  // finish
  return eventSource
}