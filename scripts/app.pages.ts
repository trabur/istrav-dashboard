import { istrav } from 'istrav'
import { scripts } from './headless.ts'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'app.pages')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.app.pages.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'app.pages')

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
  let eventSource = await istrav.app.pages.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'app.pages')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.pages.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'app.pages')

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
  let eventSource = await istrav.app.pages.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'app.pages')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.pages.remove(es)

  // finish
  return eventSource
}

export async function getBlocks (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getBlocks', 'app.pages')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.app.pages.blocks(es)

  // finish
  return eventSource
}