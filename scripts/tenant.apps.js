import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getAll (token) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'tenent.apps')

  // params
  es.arguements = {
    token: token || '' // obtain from tenant.members.login
  }

  // perform
  let eventSource = await istrav.tenant.apps.all(es)

  // finish
  return eventSource
}

export async function getSave (token, domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'tenent.apps')

  // params
  es.arguements = {
    token: token || '',
    domain: domain || 'istrav.com',
    state: domain || 'production',
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
    token: token || '',
    domain: domain || 'istrav.com',
    state: state || 'production',
  }

  // perform
  let eventSource = await istrav.tenant.apps.get(es)

  // finish
  return eventSource
}

export async function getUpdate (token, domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'tenent.apps')

  // params
  es.arguements = {
    token: token || '',
    domain: domain || 'istrav.com',
    state: state || 'production',
    change: {
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

export async function getDelete (token, domain, state) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'tenent.apps')

  // params
  es.arguements = {
    token: token || '',
    domain: domain || 'istrav.com',
    state: state || 'production'
  }

  // perform
  let eventSource = await istrav.tenant.apps.update(es)

  // finish
  return eventSource
}