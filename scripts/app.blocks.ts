import { istrav } from 'istrav'
import * as scripts from './scripts.ts'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'app.blocks')

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
  let es = await scripts.event.sources.doEventSource('getSave', 'app.blocks')

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
  let es = await scripts.event.sources.doEventSource('getOne', 'app.blocks')

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
  let es = await scripts.event.sources.doEventSource('getUpdate', 'app.blocks')

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
  let es = await scripts.event.sources.doEventSource('getRemove', 'app.blocks')

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