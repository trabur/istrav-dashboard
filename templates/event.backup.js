// @ts-nocheck
let sourceId = 'event.backup()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventBackupTemplate = /*html*/`
  <h2>::: event.backup()</h2>
  <h3>> with mongodb database as a backbone</h3>
  <p>in dealing with event sourcing when it comes to storage we are always going to be either creating or reading and never updating or deleting.</p>
  <ul>
    <li>create/read: yes</li>
    <li>update/delete: no</li>
  </ul>
  <p>therefore we have save...</p>
  <div id="doSaveEventsCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doSaveEvents'); return false;">run</a>
  </div>

  <p>and load...</p>
  <div id="getLoadEventsCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getLoadEvents'); return false;">run</a>
  </div>
  <p>let's go over the above scripts ... </p>

  <p>plus the ability to "play" events over a view's state:</p>
  <div id="doPlayEventsCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doPlayEvents'); return false;">run</a>
  </div>
  <br />
  <div style="text-align: center;">
    <a href="/event-sources" class="waves-effect waves-light btn"><-- previous</a>
    <a href="/event-logging" class="waves-effect waves-light btn">next --></a>
  </div>
  <br />
  <br />
  <br />
`

import { 
  doSaveEvents,
  getLoadEvents,
  doPlayEvents
} from '../scripts/event.backup.js'

export function eventBackupInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'doSaveEvents', doSaveEvents ],
    [ 'getLoadEvents', getLoadEvents ],
    [ 'doPlayEvents', doPlayEvents ],
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}