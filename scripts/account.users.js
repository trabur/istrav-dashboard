import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './headless.js'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'account.users')

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
  let es = await scripts.event.sources.doEventSource('getRegister', 'account.users')

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
  let es = await scripts.event.sources.doEventSource('getLogin', 'account.users')

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

export async function getOne (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'account.users')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fh3uhf0uhf084f83fyb38ybf434f...'
  }

  // perform
  let eventSource = await istrav.account.users.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, id, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'account.users')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fh3uhf0uhf084f83fyb38ybf434f...',
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

export async function getRemove (appId, token, id) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'account.users')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    id: id || 'fh3uhf0uhf084f83fyb38ybf434f...', 
  }

  // perform
  let eventSource = await istrav.account.users.remove(es)

  // finish
  return eventSource
}