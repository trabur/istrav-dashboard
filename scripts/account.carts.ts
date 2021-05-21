import { istrav } from 'istrav'
import { scripts } from './all'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      products: []
    }
  }

  // perform
  let eventSource = await istrav.account.carts.save(es)

  // finish
  return eventSource
}

export async function getAll (appId, token) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || ''
  }

  // perform
  let eventSource = await istrav.account.carts.all(es)

  // finish
  return eventSource
}

export async function getOne (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.carts.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, id, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...',
    change: change || {
      products: ['uhd408dhf082...']
    }
  }

  // perform
  let eventSource = await istrav.account.carts.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.carts.remove(es)

  // finish
  return eventSource
}

export async function getStripeCheckoutSession (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getStripeCheckoutSession', 'account.carts')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.carts.stripeCheckoutSession(es)

  // finish
  return eventSource
}