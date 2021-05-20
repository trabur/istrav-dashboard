import { istrav } from 'istrav'
import { scripts } from './headless.ts'

export async function getAll (token) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null // obtain from tenant.members.login
  }

  // perform
  let eventSource = await istrav.tenant.apps.all(es)

  // finish
  return eventSource
}

export async function getSave (token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null,
    change: change || {
      domain: 'istrav.com',
      state: 'production'
    }
  }

  // perform
  let eventSource = await istrav.tenant.apps.save(es)

  // finish
  return eventSource
}

export async function getOne (token, domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null,
    domain: domain || 'istrav.com',
    state: state || 'production',
  }

  // perform
  let eventSource = await istrav.tenant.apps.get(es)

  // finish
  return eventSource
}

export async function getUpdate (token, domain, state, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null,
    domain: domain || 'istrav.com',
    state: state || 'production',
    change: change || {
      // domain: '',
      state: 'development',
      // ownerId: ''
    }
  }

  // perform
  let eventSource = await istrav.tenant.apps.update(es)

  // finish
  return eventSource
}

export async function getRemove (token, domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null,
    domain: domain || 'istrav.com',
    state: state || 'production'
  }

  // perform
  let eventSource = await istrav.tenant.apps.remove(es)

  // finish
  return eventSource
}

export async function getEndpoint (token, endpoint) {
  // object
  let es = await scripts.event.sources.doEventSource('getEndpoint', 'tenent.apps')

  // params
  es.arguements = {
    token: token || null,
    endpoint: endpoint || 'istrav'
  }

  // perform
  let eventSource = await istrav.tenant.apps.endpoint(es)

  // finish
  return eventSource
}

export async function getTotals (domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getTotals', 'tenent.apps')

  // params
  es.arguements = {
    domain: domain || 'istrav.com',
    state: state || 'production'
  }

  // perform
  let eventSource = await istrav.tenant.apps.totals(es)

  // finish
  return eventSource
}