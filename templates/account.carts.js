// @ts-nocheck
let sourceId = 'tenant.apps()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let accountCartsTemplate = /*html*/`
  <h2>::: account.carts()</h2>
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

  <div id="getStripeCheckoutSessionCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getStripeCheckoutSession'); return false;">run</a>
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
  getRemove,
  getStripeCheckoutSession
} from '../scripts/account.carts.js'

export function accountCartsInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'getSave', getSave ],
    [ 'getAll', getAll ],
    [ 'getUpdate', getUpdate ],
    [ 'getOne', getOne ],
    [ 'getRemove', getRemove ],
    [ 'getStripeCheckoutSession', getStripeCheckoutSession ]
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}