import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

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