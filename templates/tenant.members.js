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

  <div id="getAllCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getAll'); return false;">run</a>
  </div>

  <div id="getOneCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getOne'); return false;">run</a>
  </div>

  <div id="getRemoveCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getRemove'); return false;">run</a>
  </div>

  <div id="getUpdateCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getUpdate'); return false;">run</a>
  </div>

  <br />
  <div style="text-align: center;">
    <a href="/event-logging" class="waves-effect waves-light btn"><-- previous</a>
    <a href="/tenant-apps" class="waves-effect waves-light btn">next --></a>
  </div>
  <br />
  <br />
  <br />
`

import {
  getLogin,
  getRegister,
  getAll,
  getOne,
  getRemove,
  getUpdate
} from '../scripts/tenant.members.js'

export function tenantMembersInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getRegister', getRegister ],
    [ 'getLogin', getLogin ],
    [ 'getAll', getAll ],
    [ 'getOne', getOne ],
    [ 'getRemove', getRemove ],
    [ 'getUpdate', getUpdate ]
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}