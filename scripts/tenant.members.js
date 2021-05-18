import { istrav } from 'istrav'
import { scripts } from './headless.js'

export async function getAll () {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'tenant.members')

  // params
  es.arguements = {
    // token: token || '' // obtain from tenant.members.login
  }

  // perform
  let eventSource = await istrav.tenant.members.all(es)

  // finish
  return eventSource
}

export async function getRegister (email, username, password, firstName, lastName) {
  // object
  let es = await scripts.event.sources.doEventSource('getRegister', 'tenent.members')

  // params
  es.arguements = {
    email: email || 'travis.burandt@gmail.com',
    username: username || 'cool-user',
    password: password || 'my-password',
    firstName: firstName || 'john',
    lastName: lastName || 'doe',
  }

  // perform
  let eventSource = await istrav.tenant.members.register(es)

  // finish
  return eventSource
}


export async function getLogin (email, password) {
  // object
  let es = await scripts.event.sources.doEventSource('getLogin', 'tenent.members')

  // params
  es.arguements = {
    email: email || 'travis.burandt@gmail.com',
    password: password || 'my-password'
  }

  // perform
  let eventSource = await istrav.tenant.members.login(es)

  // finish
  return eventSource
}

export async function getOne (email) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'tenant.members')

  // params
  es.arguements = {
    email: email || 'travis.burandt@gmail.com',
  }

  // perform
  let eventSource = await istrav.tenant.members.get(es)

  // finish
  return eventSource
}

export async function getUpdate (token, email, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'tenant.members')

  // params
  es.arguements = {
    token: token || '',
    email: email || 'travis.burandt@gmail.com',
    change: change || {
      firstName: 'john',
      lastName: 'doe'
    }
  }

  // perform
  let eventSource = await istrav.tenant.members.update(es)

  // finish
  return eventSource
}

export async function getRemove (token, email) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'tenant.members')

  // params
  es.arguements = {
    token: token || '',
    email: email || 'travis.burandt@gmail.com'
  }

  // perform
  let eventSource = await istrav.tenant.members.remove(es)

  // finish
  return eventSource
}