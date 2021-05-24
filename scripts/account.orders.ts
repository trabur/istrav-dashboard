import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'account.orders', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      products: []
    }
  }

  // perform
  let eventSource = await istrav.account.orders.save(es)

  // finish
  return eventSource
}

export async function getAll (appId, token) {
  // object
  let es = await doEventSource('getAll', 'account.orders', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
  }

  // perform
  let eventSource = await istrav.account.orders.all(es)

  // finish
  return eventSource
}

export async function getOne (appId, token, id) {
  // object
  let es = await doEventSource('getOne', 'account.orders', null)

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
  let es = await doEventSource('getUpdate', 'account.orders', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fpuh348f38f...',
    change: change || {
      products: ['u43h8bubv93fb...']
    }
  }

  // perform
  let eventSource = await istrav.account.orders.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, id) {
  // object
  let es = await doEventSource('getRemove', 'account.orders', null)

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