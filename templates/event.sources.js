// @ts-nocheck
let sourceId = 'event.sources()'
let scriptId = ''
let logTo = 'my-log'
let backupTo = 'my-backup'

export let eventSourcesTemplate = /*html*/`
  <h2>::: event.sources()</h2>
  <h3>> with rabbitmq messaging as a backbone</h3>
  <p>most applications today are built around create, read, update, and delete or CRUD. that's not good enough for accounting level reliabilty; because with delete and update information is lost. meaning, if we update a model more than once ... our history is not kept. where data loss is not acceptable this is not good. in order to combat that every action is saved as an event. we then play out these events over a view to get our state. with our history getting backed up we can replay all of the events over a new view for recovery, analytics, or w/e.</p>
  <p>so instead of CRUD like we are more CQRS with microservice/REST like. for instance, take an application where there is a bunch of traffic hitting one API method more than another ... such as: only 10 new employees per month vs 1k vehicles updating their position every second. with microservices and CQRS we can scale up/down specific blocks of code in our app. so to handle this our naming convention for all scripts starts with "get" or "do" in order to signify "query" or "command" respectively. back to the example: getRegister and doChangeLocation.</p>
  <p>here is our first block of code:</p>
  <div id="doEventSourceCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doEventSource'); return false;">run</a>
  </div>
  <p>we follow the same patturn as prototypal chains which is to set the bottom value as undefined or null; see "payload" above.</p>
  <p>> notice: when we run each script in the dashboard our logging shows up on the right ... all we need todo is code "console.log('welcome to istrav')", click run, and then "welcome to istrav" will show up.</p>
  <p>as shown below "scripts.doEventSource" is a way to access a script from another script.</p>
  <div id="doPublishCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doPublish'); return false;">run</a>
  </div>
  
  <p>> note: with rabbitmq there are two ways to grab messages off the queue. the first is use consume which is a push based model and the second is to use get which is a pull based model; the getConsume script uses the pull method.</p>
  <p>when the "eventSource.payload" is set we are returning something which makes this script a "get" rather than a "do" statement; see "payload" below.</p>
  <div id="getConsumeCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getConsume'); return false;">run</a>
  </div>
  <p>in the above script "eventSource.noAck" is a way to acknowledge a message by either keeping the message in the queue or removing the message from the queue once it is read.</p>

  <p>with both "doPublish" and "getConsume" we have the ability to push eventSources to a queue and then get them back one after another. the following script is a way to check the status of a queue; like the total number of messages.</p>
  <div id="getCheckCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('getCheck'); return false;">run</a>
  </div>

  <p>for the rest of the dashboard we are going to be less verbose about reoccuring patturns within the code. because once something is documented there is no need to go over it constantly after it has become second nature.</p>
  <p>moving forward, the other two important parts that we should talk about next is "logging" and "backup"; let's go over them now :)</p>
  
  <br />
  <div style="text-align: center;">
    <a href="/" class="waves-effect waves-light btn"><-- previous</a>
    <a href="/event-backup" class="waves-effect waves-light btn">next --></a>
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