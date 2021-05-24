import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll () {
  // object
  let es = await doEventSource('getAll', 'tenant.members', null)

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
  let es = await doEventSource('getRegister', 'tenent.members', null)

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
  let es = await doEventSource('getLogin', 'tenent.members', null)

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
  let es = await doEventSource('getOne', 'tenant.members', null)

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
  let es = await doEventSource('getUpdate', 'tenant.members', null)

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
  let es = await doEventSource('getRemove', 'tenant.members', null)

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