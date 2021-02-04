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

  <br />
  <br />
  <br />
`

import { 
  getAll,
  getLogin,
  getRegister
} from '../scripts/account.users.js'

export function accountUsersInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getAll', getAll ],
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