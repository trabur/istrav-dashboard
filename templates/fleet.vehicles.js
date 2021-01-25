// @ts-nocheck
let sourceId = 'fleet.vehicles()'
let scriptId = 'getAll'
let logTo = 'my-log'
let backupTo = 'my-backup'

export let fleetVehiclesTemplate = /*html*/`
<h2>::: fleet.vehicles()</h2>
<h3>> keep track of them.</h3>
<p>hello fleet</p>
<div id="getAllCode"></div>
<div class="script-actions">
  <a class="waves-effect waves-light btn" onclick="eventScript(sourceId, 'getAll', logTo, backupTo); return false;">run</a>
</div>
`

import { getAll } from '../scripts/account.users.js'

export async function fleetVehiclesInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  // @ts-ignore
  window.getAllCode = CodeMirror(document.getElementById("getAllCode"), {
    value: getAll.toString(),
    mode:  "javascript",
    theme: "material"
  });
}