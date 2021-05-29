<script>
  import { onMount } from 'svelte';
  
  import { istrav, scripts } from '../api'
  
  import { views } from './views'
  import { configure } from './configure.js'

  export let domain
  export let state
  export let slug
  export let blockName
  export let blockArgs
  let app
  let page

	onMount(async () => {
    configure(istrav)

    let esApp = await scripts.tenant.apps.getOne(null, domain, state)
    console.log('esApp', esApp)
    if (esApp.payload.success === true) {
      app = esApp.payload.data
      let esPage = await scripts.app.pages.getOne(app.id, slug)
      console.log('esPage', esPage)
      if (esPage.payload.success === true) {
        page = esPage.payload.data
        updateViewportComponent(blockName)
      } else {
        alert(esPage.payload.reason)
      }
    } else {
      alert(esApp.payload.reason)
    }
  })

  // load example component
	let viewportComponent = null
	function updateViewportComponent(id) {
		viewportComponent = views[id]
	}
</script>

{#if app && page}
  <svelte:component this={viewportComponent} {app} {page} {...blockArgs}></svelte:component>
{/if}