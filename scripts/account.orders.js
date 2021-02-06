import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'account.orders')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      userId: 'uhd408dhf082...',
      cartId: '843h84fbf8uf...',
      productId: 'u43h8bubv93fb...'
    }
  }

  // perform
  let eventSource = await istrav.account.orders.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'account.orders')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.account.orders.all(es)

  // finish
  return eventSource
}

export async function getOne (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'account.orders')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.orders.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, id, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'account.orders')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...',
    change: change || {
      price: 25.00
    }
  }

  // perform
  let eventSource = await istrav.account.orders.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'account.orders')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.account.orders.remove(es)

  // finish
  return eventSource
}