// @ts-nocheck
let sourceId = 'event.sources()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventSourcesTemplate = /*html*/`
  <h1>DASHBOARD</h1>
  <h3>> data sorcery for wizards!</h3>
  <p>this dashboard is a collection of tools and utilities put together for running a robust and reliable service business. the dashboard navigation sits on the left, the dashboard controls sits in the center, while the dashboard reports get streamed on the right.</p>
  <p>we've added event.sources() to the top because of it's importance. that's because we record a history of every command and every query that goes on around the frontend and backend. so let's get stared...</p>
  <h2>::: event.sources()</h2>
  <h3>> with rabbitmq messaging as a backbone</h3>
  <p>most applications today are built around create, read, update, and delete or CRUD. that's not good enough for accounting level reliabilty; because with delete and update information is lost. meaning, if we update a model more than once ... our history is not kept. where data loss is not acceptable this is not good. in order to combat that every action is saved as an event. we then play out these events over a view to get our state. with our history getting backed up we can replay all of the events over a new view for recovery, analytics, or w/e.</p>
  <p>so instead of CRUD like we are more CQRS with microservice/REST like. for instance, take an application where there is a bunch of traffic hitting one API method more than another ... such as: only 10 new employees per month vs 1k vehicles updating their position every second. with microservices and CQRS we can scale up/down specific blocks of code in our app. so to handle this our naming convention for all scripts starts with "get" or "do" in order to signify "query" or "command" respectively. back to the example: getRegister and doChangeLocation.</p>
  <p>here is what our that looks like:</p>
  <div id="doEventSourceCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.scripts.run('doEventSource'); return false;">run</a>
  </div>

  <p>however the above code snippet isn't vary useful as it is just an example. assume from here on out that all scripts will work in some way.</p>
  <p>we follow the same patturn as the javascript prototypal chain which is to have the bottom value of an object as undefined or null. so to publish an event all we need is to fill in that value and wrap it around an "eventSource" object.</p>
  <div id="window.scripts.runCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.scripts.run('window.scripts.run'); return false;">run</a>
  </div>

  <div id="doPublishCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.scripts.run('doPublish'); return false;">run</a>
  </div>
  
  <p>(pubSub)</p>
  <div id="getConsumeCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.scripts.run('getConsume'); return false;">run</a>
  </div>

  <p>(pubSub)</p>
  <div id="getCheckCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.scripts.run('getCheck'); return false;">run</a>
  </div>

  <br />
  <br />
  <br />
`

import { 
  doEventSource,
  doPublish,
  getConsume,
  getCheck
} from '../scripts/event.sources.js'

export function eventSourcesInit () {
  window.sourceId = sourceId
  window.scriptId = scriptId
  window.logTo = logTo
  window.backupTo = backupTo

  let scripts = [
    [ 'doEventSource', doEventSource ],
    [ 'doPublish', doPublish ],
    [ 'getConsume', getConsume ],
    [ 'getCheck', getCheck ]
  ].forEach(value => {
    // window.doPublishCode = CodeMirror(document.getElementById("doPublishCode"), {
    //   value: doPublish.toString(),
    //   mode:  "javascript",
    //   theme: "material"
    // });
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}