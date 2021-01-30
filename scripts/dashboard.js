import { istrav } from '../node_modules/istrav/api/index.js'

import * as eventSources from './event.sources.js'
import * as eventBackup from './event.backup.js'
import * as eventLogging from './event.logging.js'
import * as accountUsers from './account.users.js'

export let scripts = {
  dashboard: {
    doHelloWorld: doHelloWorld,
    doRun: doRun
  },
  event: {
    sources: eventSources,
    backup: eventBackup,
    logging: eventLogging
  },
  account: {
    users: accountUsers
  }
}

export async function doHelloWorld () {
  // get started:
  // npm install istrav

  // in the code:
  // import { istrav } from './node_modules/istrav/api/index.js'
  // import { scripts } from './scripts/dashboard.js'
  
  // then:
  // use any istrav api...
  console.log(`hello istrav: ${JSON.stringify(istrav, null, 2)}`)
  // or any script method...
  console.log(`hello scripts: ${JSON.stringify(scripts, null, 2)}`)

  return 'hello world!'
}

export async function doRun (scriptId) {
  scriptId = scriptId || 'doHelloWorld'
  let script = window[`${scriptId}Code`].getValue()
  let call = new Function('return ' + script)()
  let called = await call()
  console.log(`SCRIPT ::: ${JSON.stringify(called, null, 2)}`)
  
  // console.log('welcome to istrav')
}