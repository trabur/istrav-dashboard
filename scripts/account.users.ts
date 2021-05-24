import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
  }

  // perform
  let eventSource = await istrav.account.users.all(es)

  // finish
  return eventSource
}

export async function getRegister (appId, email, username, password, firstName, lastName) {
  // object
  let es = await doEventSource('getRegister', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    email: email || 'travis.burandt@gmail.com',
    username: username || 'cool-user',
    password: password || 'my-password',
    firstName: firstName || 'john',
    lastName: lastName || 'doe',
  }

  // perform
  let eventSource = await istrav.account.users.register(es)

  // finish
  return eventSource
}

export async function getLogin (appId, email, password) {
  // object
  let es = await doEventSource('getLogin', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    email: email || 'travis.burandt@gmail.com',
    password: password || 'my-password'
  }

  // perform
  let eventSource = await istrav.account.users.login(es)

  // finish
  return eventSource
}

export async function getOne (appId, token, username) {
  // object
  let es = await doEventSource('getOne', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    username: username || 'istrav'
  }

  // perform
  let eventSource = await istrav.account.users.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, username, change) {
  // object
  let es = await doEventSource('getUpdate', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    username: username || 'istrav',
    change: change || {
      firstName: 'tim',
      lastName: 'smith'
    }
  }

  // perform
  let eventSource = await istrav.account.users.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, username) {
  // object
  let es = await doEventSource('getRemove', 'account.users', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    username: username || 'istrav', 
  }

  // perform
  let eventSource = await istrav.account.users.remove(es)

  // finish
  return eventSource
}