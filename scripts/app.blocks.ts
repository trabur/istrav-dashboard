import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'app.blocks', null)

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.app.blocks.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'app.blocks', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'our block',
      slug: 'our-block'
    }
  }

  // perform
  let eventSource = await istrav.app.blocks.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'app.blocks', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.blocks.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await doEventSource('getUpdate', 'app.blocks', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      name: 'our-block'
    }
  }

  // perform
  let eventSource = await istrav.app.blocks.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'app.blocks', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.blocks.remove(es)

  // finish
  return eventSource
}