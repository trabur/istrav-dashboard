export let headlessTemplate = /*html*/`
  <h1>HEADLESS</h1>
  <h3>> data sorcery for wizards!</h3>
  <p>headless is a collection of tools and utilities put together for running a robust and reliable service business. the navigation sits on the left, the controls sits in the center, while reports get streamed on the right.</p>
  <div style="text-align: center;">
  <a href="/scripts" class="waves-effect waves-light btn">scripts</a>
  <a href="https://www.npmjs.com/package/istrav" target="_blank" class="waves-effect waves-light btn">library</a>
  </div>
  <p>i've placed the button above two buttons for any devlopers, such as myself, to browse and import code into other projects. these are our functions as a service API endpoints available for 3rd party or public use. for example, <a href="https://shop.oldneckties.com" target="_blank">shop.oldneckties.com</a> and <a href="https://shop.istrav.com" target="_blank">shop.istrav.com</a> are both storefronts with a cart and checkout which use these scripts.</p>
  <p>example script:</p>
  <div id="doHelloWorldCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doHelloWorld'); return false;">run</a>
  </div>

  <p>here is how scripts run in browser:</p>
  <div id="doRunCode"></div>
  <div class="script-actions">
    <a class="waves-effect waves-light btn" onclick="window.doRun('doRun'); return false;">run</a>
  </div>
  <h3>> console.log() outputs to the right!</h3>
  <p>notice: when we run each script our logging shows up on the right ... all we need todo is code "console.log('welcome to istrav')", click run, and then "welcome to istrav" will show up.</p>

  <p>production endpoints:</p>
  <ul>
    <li><a href="https://api.istrav.com" target="_blank">https://api.istrav.com</a> // backend</li>
    <li><a href="https://io.istrav.com" target="_blank">https://io.istrav.com</a> // sockets</li>
    <li><a href="https://headless.istrav.com" target="_blank">https://headless.istrav.com</a> // backend</li>
    <li><a href="https://admin.istrav.com" target="_blank">https://admin.istrav.com</a> // backend</li>
    <li><a href="https://www.istrav.com" target="_blank">https://www.istrav.com</a> // marketing</li>
    <li><a href="https://shop.istrav.com" target="_blank">https://shop.istrav.com</a> // storefront</li>
    <li><a href="https://channel.istrav.com" target="_blank">https://channel.istrav.com</a> // videos</li>
    <li><a href="https://forum.istrav.com" target="_blank">https://forum.istrav.com</a> // bulletin board</li>
    <li><a href="https://promo.istrav.com" target="_blank">https://promo.istrav.com</a> // promotional products</li>
  </ul>
  <h3>> scripts and documentation:</h3>
  <p>let's get stared...</p>
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
} from '../scripts/headless.js'

export function headlessInit () {
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