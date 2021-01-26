// @ts-nocheck
let sourceId = 'event.backup()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventBackupTemplate = /*html*/`
  <h2>::: event.backup()</h2>
  <h3>> with mongodb database as a backbone</h3>
  <p></p>

  <br />
  <br />
  <br />
`

import { 
  getNew
} from '../scripts/event.backup.js'

export function eventBackupInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

}