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

  <div style="text-align: center;">
    <a href="/event-backup" class="waves-effect waves-light btn"><-- previous</a>
    <a href="/account-users" class="waves-effect waves-light btn">next --></a>
  </div>
  <br />
  <br />
  <br />
`

import { 
  getLog
} from '../scripts/event.logging.js'

export function eventLoggingInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

}