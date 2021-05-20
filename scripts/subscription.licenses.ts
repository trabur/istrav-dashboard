import { istrav } from 'istrav'
import { scripts } from './headless.ts'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'subscription.licenses')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.subscription.licenses.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'subscription.licenses')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      key: '2o473874g348gf348yg...',
      raw: ''
    }
  }

  // perform
  let eventSource = await istrav.subscription.licenses.save(es)

  // finish
  return eventSource
}

export async function getOne (key) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'subscription.licenses')

  // params
  es.arguements = {
    key: key || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.subscription.licenses.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, key, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'subscription.licenses')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    key: key || 'fpuh348f38f...',
    change: change || {
      key: 'r438gf348h34fu834gf8...',
    }
  }

  // perform
  let eventSource = await istrav.subscription.licenses.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, key) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'subscription.licenses')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    key: key || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.subscription.licenses.remove(es)

  // finish
  return eventSource
}