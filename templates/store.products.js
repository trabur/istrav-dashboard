// @ts-nocheck
let sourceId = 'tenant.apps()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let storeProductsTemplate = /*html*/`
  <h2>::: store.products()</h2>
  <h3>> with postgresql database as a backbone</h3>
  <div id="getSaveCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getSave'); return false;">run</a>
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
  <div style="text-align: center;">
    <a href="/event-sources" class="waves-effect waves-light btn"><-- previous</a>
    <a href="/event-logging" class="waves-effect waves-light btn">next --></a>
  </div>
  <br />
  <br />
  <br />
`

import {
  getSave,
  getAll,
  getUpdate,
  getOne,
  getRemove
} from '../scripts/store.products.js'

export function storeProductsInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getSave', getSave ],
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