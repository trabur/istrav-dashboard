// @ts-nocheck
export let fleetVehiclesTemplate = /*html*/`
<p>hello fleet</p>
<div id="all-code"></div>
<div class="script-actions">
  <a class="waves-effect waves-light btn" onclick="onRunScript('allCode'); return false;">run</a>
</div>
`

window.onRunScript = async function onRunScript (scriptId) {
  let script = window[scriptId].getValue()
  // console.log(script)
  let method = new Function('return ' + script)()
  let called = await method(istrav)
  console.log(JSON.stringify(called, null, 2))
}

async function allScript (istrav) {
  return await istrav.account.users.all()
}

export async function fleetVehiclesInit () {
  console.log('fleet.vehicles()')
  // @ts-ignore
  window.allCode = CodeMirror(document.getElementById("all-code"), {
    value: allScript.toString(),
    mode:  "javascript",
    theme: "material"
  });
}