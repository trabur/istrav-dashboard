// @ts-nocheck
let sourceId = 'event.logging()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventLoggingTemplate = /*html*/`
  <h2>::: event.logging()</h2>
  <h3>> with phoenix.js channels as a backbone</h3>
  <p>hello world</p>
  <p></p>

  <br />
  <br />
  <br />
`

import { 
  getNew
} from '../scripts/event.logging.js'

export function eventLoggingInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

}