import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'istrav.com',
      slug: 'istrav.com',
      image: "IMG-0695.jpg"
    }
  }

  // perform
  let eventSource = await istrav.store.categories.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.store.categories.all(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await doEventSource('getUpdate', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      image: "hello.jpg"
    }
  }

  // perform
  let eventSource = await istrav.store.categories.update(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.categories.get(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.store.categories.remove(es)

  // finish
  return eventSource
}

export async function getProducts (appId, slug) {
  // object
  let es = await doEventSource('getProducts', 'store.categories', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.store.categories.products(es)

  // finish
  return eventSource
}