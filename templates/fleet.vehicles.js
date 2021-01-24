import { istrav } from "../node_modules/istrav/api/index.js";

export let fleetVehiclesTemplate = /*html*/`
<p>hello fleet</p>
<div id="code"></div>
`

async function myScript () {
  let users = istrav.account.users

  users.init({
    host: 'https://api.istrav.com'
  })

  let data = await users.all()
  console.log(JSON.stringify(data, null, 2))
}

export async function fleetVehicles () {
  // @ts-ignore
  var myCodeMirror = CodeMirror(document.getElementById("code"), {
    value: myScript.toString(),
    mode:  "javascript",
    theme: "material"
  });
}