// @ts-nocheck
let sourceId = 'tenant.apps()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let tenantAppsTemplate = /*html*/`
  <h2>::: tenant.apps()</h2>
  <h3>> with postgresql database as a backbone</h3>
  <p></p>

  <p>therefore we have save...</p>
  <div id="getLoginCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getLogin'); return false;">run</a>
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
  getLogin,
  getRegister
} from '../scripts/tenant.apps.js'

export function tenantAppsInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getLogin', getLogin ],
    [ 'getRegister', getRegister ]
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}