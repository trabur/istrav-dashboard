import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './headless.js'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'app.faq')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.app.faq.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'app.faq')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'how-do-you...', // question
      slug: 'how-do-you',
      content: "### hello world" // answer
    }
  }

  // perform
  let eventSource = await istrav.app.faq.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'app.faq')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.faq.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'app.faq')

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
  let eventSource = await istrav.app.faq.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'app.faq')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.app.faq.remove(es)

  // finish
  return eventSource
}