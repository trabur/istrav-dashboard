export let dashboardTemplate = /*html*/`
  <h1>DASHBOARD</h1>
  <h3>> data sorcery for wizards!</h3>
  <p>this dashboard is a collection of tools and utilities put together for running a robust and reliable service business. the dashboard navigation sits on the left, the dashboard controls sits in the center, while the dashboard reports get streamed on the right.</p>
  <div style="text-align: center;">
    <a href="/scripts" class="waves-effect waves-light btn">scripts</a>
    <a href="/templates" class="waves-effect waves-light btn">templates</a>
  </div>
  <p>i've placed the two buttons above for any devlopers, such as myself, to browse and import code into other projects. these are our functions as a service API endpoints available for 3rd party or public use. for example, <a href="https://oldneckties.com" target="_blank">oldneckties.com</a> and <a href="https://printedbasics.com" target="_blank">printedbasics.com</a> are both storefronts with a cart and checkout which use these scripts & templates.</p>
  <p>example node.js project:</p>
  <div id="doHelloWorldCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doHelloWorld'); return false;">run</a>
  </div>

  <p>here is how scripts run in browser:</p>
  <div id="doRunCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doRun'); return false;">run</a>
  </div>
  <p>the entire project is open source. you can clone all of our code and run each project by yourself; that is: if you know what your doing. although, i'm updating the code daily which would make constantly deploying to production a hassle therefore it's built with multi tenant in mind. i also have 10 or so other websites that i want to integrate without having to redeploy all kinds of other code and _blank_ as a service 3rd party software.</p>
  <p>code involved:</p>
  <ul>
    <li>https://github.com/trabur/istrav-api</li>
    <li>https://github.com/trabur/istrav-channels</li>
    <li>https://github.com/trabur/istrav-dashboard</li>
    <li>https://github.com/trabur/istrav-library</li>
    <li>https://github.com/trabur/istrav-storefront</li>
  </ul>
  <p>speaking of 3rd party software here is a list of products that i use just to keep the lights on. note: all these services have free plans available however if i start getting use out of these endpoints i'll have to start paying and ultimatly having to charge subscribers.</p>
  <p>services involved:</p>
  <ul>
    <li>aws.amazon.com // route53 domain name</li>
    <li>cloudflare.com // dns</li>
    <li>cloudamqp.com // rabbitmq as a service</li>
    <li>cloud.mongodb.com // Database-as-a-Service for MongoDB</li>
    <li>gigalixir.com // Elixir’s Platform as a Service</li>
    <li>heroku.com // node.js frontend and backend</li>
    <li>elephantsql.com // PostgreSQL as a Service</li>
  </ul>
  <p>i've added event.sources() to the top because of it's importance. that's because we record every command and every query that goes on around the frontend and backend. so let's get stared...</p>
  <br />
  <div style="text-align: center;">
    <a href="/event-sources" class="waves-effect waves-light btn">continue</a>
  </div>

  <br />
  <br />
  <br />
`

import { 
  doHelloWorld,
  doRun
} from '../scripts/dashboard.js'

export function dashboardInit () {
  let scripts = [
    [ 'doHelloWorld', doHelloWorld ],
    [ 'doRun', doRun ],
  ].forEach(value => {
    window[`${value[0]}Code`] = CodeMirror(document.getElementById(`${value[0]}Code`), {
      value: value[1].toString(),
      mode:  "javascript",
      theme: "material"
    })
  })
}