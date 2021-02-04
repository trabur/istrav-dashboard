import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './dashboard.js'

export async function getRegister (id) {
  // object
  let es = await scripts.event.sources.doEventSource('getRegister', 'tenent.members')

  // params
  es.arguements = {
    email: 'travis.burandt@gmail.com',
    username: 'cool-user',
    password: 'my-password',
    firstName: 'john',
    lastName: 'doe',
  }

  // perform
  let eventSource = await istrav.tenant.members.register(es)

  // finish
  return eventSource
}


export async function getLogin (id) {
  // object
  let es = await scripts.event.sources.doEventSource('getLogin', 'tenent.members')

  // params
  es.arguements = {
    email: 'travis.burandt@gmail.com',
    password: 'my-password'
  }

  // perform
  let eventSource = await istrav.tenant.members.login(es)

  // finish
  return eventSource
}