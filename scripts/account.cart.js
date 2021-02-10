import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'account.cart')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      userId: 'uhd408dhf082...',
      isPaid: false
    }
  }

  // perform
  let eventSource = await istrav.account.cart.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'account.cart')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.account.cart.all(es)

  // finish
  return eventSource
}

export async function getOne (appId, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'account.cart')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.cart.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, id, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'account.cart')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...',
    change: change || {
      isPaid: true
    }
  }

  // perform
  let eventSource = await istrav.account.cart.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'account.cart')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.cart.remove(es)

  // finish
  return eventSource
}