// @ts-nocheck
let sourceId = 'account.users()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let accountUsersTemplate = /*html*/`
  <h2>::: account.users()</h2>
  <h3>> simple and secure.</h3>
  <div id="getLoginCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getLogin'); return false;">run</a>
  </div>

  <div id="getRegisterCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getRegister'); return false;">run</a>
  </div>

  <div id="getAllCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getAll'); return false;">run</a>
  </div>

  <div id="getUpdateCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getUpdate'); return false;">run</a>
  </div>

  <div id="getOneCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getOne'); return false;">run</a>
  </div>

  <div id="getRemoveCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getRemove'); return false;">run</a>
  </div>

  <br />
  <br />
  <br />
`

import { 
  getLogin,
  getRegister,
  getAll,
  getUpdate,
  getOne,
  getRemove
} from '../scripts/account.users.js'

export function accountUsersInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getLogin', getLogin ],
    [ 'getRegister', getRegister ],
    [ 'getAll', getAll ],
    [ 'getUpdate', getUpdate ],
    [ 'getOne', getOne ],
    [ 'getRemove', getRemove ]
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}