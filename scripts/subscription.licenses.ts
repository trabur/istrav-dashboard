import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'subscription.licenses', null)

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
  let es = await doEventSource('getSave', 'subscription.licenses', null)

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
  let es = await doEventSource('getOne', 'subscription.licenses', null)

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
  let es = await doEventSource('getUpdate', 'subscription.licenses', null)

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
  let es = await doEventSource('getRemove', 'subscription.licenses', null)

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