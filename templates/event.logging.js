// @ts-nocheck
let sourceId = 'event.logging()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventLoggingTemplate = /*html*/`
  <h2>::: event.logging()</h2>
  <h3>> from message exchange to topic</h3>
  <div id="doPublishCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="eventScript(sourceId, 'doPublish', logTo, backupTo); return false;">run</a>
  </div>

  <p></p>

  <br />
  <br />
  <br />
`

import { 
  doPublish,
} from '../scripts/event.logging.js'

export function eventLoggingInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  window.doPublishCode = CodeMirror(document.getElementById("doPublishCode"), {
    value: doPublish.toString(),
    mode:  "javascript",
    theme: "material"
  });
}