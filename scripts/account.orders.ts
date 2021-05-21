import { istrav } from 'istrav'
import { scripts } from './all'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'account.orders')

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
  let es = await scripts.event.sources.doEventSource('getAll', 'account.orders')

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