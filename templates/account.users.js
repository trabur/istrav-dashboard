// @ts-nocheck
let sourceId = 'account.users()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let accountUsersTemplate = /*html*/`
  <h2>::: account.users()</h2>
  <h3>> simple and secure.</h3>
  <p>hello fleet</p>
  <div id="getNewCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="eventScript(sourceId, 'getNew', logTo, backupTo); return false;">run</a>
  </div>

  <p>hello fleet</p>
  <div id="getAllCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="eventScript(sourceId, 'getAll', logTo, backupTo); return false;">run</a>
  </div>

  <br />
  <br />
  <br />
`

import { 
  getNew,
  getAll,
} from '../scripts/account.users.js'

export function accountUsersInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  window.getNewCode = CodeMirror(document.getElementById("getNewCode"), {
    value: getNew.toString(),
    mode:  "javascript",
    theme: "material"
  });

  window.getAllCode = CodeMirror(document.getElementById("getAllCode"), {
    value: getAll.toString(),
    mode:  "javascript",
    theme: "material"
  });
}