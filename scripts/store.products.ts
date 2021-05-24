import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'store.products', null)

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
  let es = await doEventSource('getSave', 'store.products', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'istrav.com',
      slug: 'istrav.com',
      categoryId: "plain",
      image: "IMG-0695.jpg",
      price: 23.00,
      details: "",
      description: ""
    }
  }

  // perform
  let eventSource = await istrav.store.products.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'store.products', null)

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
  let es = await doEventSource('getUpdate', 'store.products', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      price: 25.00
    }
  }

  // perform
  let eventSource = await istrav.store.products.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'store.products', null)

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