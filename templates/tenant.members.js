// @ts-nocheck
let sourceId = 'tenant.members()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let tenantMembersTemplate = /*html*/`
  <h2>::: tenant.members()</h2>
  <h3>> with postgresql database as a backbone</h3>
  <p></p>

  <div id="getRegisterCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getRegister'); return false;">run</a>
  </div>

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
} from '../scripts/tenant.members.js'

export function tenantMembersInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getRegister', getRegister ],
    [ 'getLogin', getLogin ]
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}