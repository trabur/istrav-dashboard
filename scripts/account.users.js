import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

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