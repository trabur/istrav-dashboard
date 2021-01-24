import { istrav } from "../node_modules/istrav/api/index.js";

export let fleetVehiclesTemplate = /*html*/`
<p>hello fleet</p>
`

export async function fleetVehicles () {
	console.log('fleet')
	let users = istrav.account.users

	users.init({
		host: 'https://api.istrav.com'
	})

	let data = await users.all()
	console.log(JSON.stringify(data, null, 2))
}