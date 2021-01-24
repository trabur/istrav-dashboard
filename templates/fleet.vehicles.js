export let fleetVehiclesTemplate = /*html*/`
<p>hello fleet</p>
<div id="demo-code"></div>
<div class="script-actions">
  <a id="demo-run" class="waves-effect waves-light btn" onclick="onRunScript('demoCode'); return false;">run</a>
</div>
`

window.onRunScript = async function onRunScript (scriptId) {
  let script = window[scriptId].getValue()
  // console.log(script)
  let method = new Function('return ' + script)()
  let called = await method()
  console.log(JSON.stringify(called, null, 2))
}

async function demoScript () {
  istrav.account.users.init({
    host: 'https://api.istrav.com'
  })

  return await istrav.account.users.all()
}

export async function fleetVehiclesInit () {
  // @ts-ignore
  window.demoCode = CodeMirror(document.getElementById("demo-code"), {
    value: demoScript.toString(),
    mode:  "javascript",
    theme: "material"
  });
}