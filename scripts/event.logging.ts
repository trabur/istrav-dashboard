import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getLog (state, event) {
  event.payload = await state.account.users.register({
    email: 'travis.burandt@gmail.com',
    username: 'cool-user',
    password: 'my-password',
    firstName: 'john',
    lastName: 'doe',
    role: 'ADMIN'
  })
  return event
}