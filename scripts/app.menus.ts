import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'app.menus', null)

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.app.menus.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'app.menus', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'istrav.com',
      slug: 'istrav.com',
      raw: { // json
        "name": "things",
        "url": "/categories/plain",
        "children": [
          { "name": "plain", "url": "/categories/plain" },
          { "name": "simple", "url": "/categories/simple" },
          { "name": "generic", "url": "/categories/generic" }
        ]
      }
    }
  }

  // perform
  let eventSource = await istrav.app.menus.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'app.menus', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.menus.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await doEventSource('getUpdate', 'app.menus', null)

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
  let eventSource = await istrav.app.menus.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'app.menus', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.menus.remove(es)

  // finish
  return eventSource
}