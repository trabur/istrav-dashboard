import * as istrav from "../node_modules/istrav-library/api/index.js";

export let fleetVehiclesTemplate = /*html*/`
<p>hello fleet</p>
`

export function fleetVehicles () {
	console.log('fleet')
	console.log('istrav', istrav)
}