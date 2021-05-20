import { istrav } from 'istrav'
import { scripts } from './headless.cjs'

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