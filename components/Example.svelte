<script>
  import { onMount } from 'svelte';
  
  import { istrav } from 'istrav'
  import { scripts } from '../scripts/headless.ts'
  
  import FeaturedGuide from "./blocks/FeaturedGuide.svelte";
  import Logo from "./blocks/Logo.svelte";
  import MainFooter from "./blocks/MainFooter.svelte";
  import Markdown from "./blocks/Markdown.svelte";
  import OpenSource from "./blocks/OpenSource.svelte";
  import SideNavigation from "./blocks/SideNavigation.svelte";
  import Slogan from "./blocks/Slogan.svelte";
  import Solutions from "./blocks/Solutions.svelte";
	const views = {
    FeaturedGuide,
    Logo,
    MainFooter,
    Markdown,
    OpenSource,
    SideNavigation,
    Slogan,
    Solutions
  }

  export let domain
  export let state
  export let slug
  export let blockName
  export let blockArgs
  let app
  let page

	onMount(async () => {
    let backend
    if (window.location.host === 'localhost:6006') {
      backend = 'http://localhost:1337'
    } else {
      backend = 'https://api.hacktracks.org'
    }
    istrav.tenant.apps.init({ host: backend })
    istrav.app.pages.init({ host: backend })

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