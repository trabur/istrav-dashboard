<script>
	import { onMount } from "svelte";

  // load all blocks here
  import Logo from './Logo.svelte'
  import MainFooter from './MainFooter.svelte'
  import Markdown from './Markdown.svelte'
  import Navigation from './Navigation.svelte'
  import OpenSource from './OpenSource.svelte'
  import SideNavigation from './SideNavigation.svelte'
  import FeaturedGuide from './FeaturedGuide.svelte'
  import Slogan from './Slogan.svelte'
  import Solutions from './Solutions.svelte'
	const views = {
    Logo,
    MainFooter,
    Markdown,
    Navigation,
    OpenSource,
    SideNavigation,
    FeaturedGuide,
    Slogan,
    Solutions
  }

	export let app
  export let page
  export let block
  let scripts = window['scripts']

	let data

	onMount(async () => {
    let esBlock = await scripts.app.blocks.getOne(app.id, block.slug)
		console.log('esBlock', esBlock)
    if (esBlock.payload.success === true) {
      data = esBlock.payload.data
      console.log('block', data)
      updateViewportComponent(data.component)
    } else {
      alert(esBlock.payload.reason)
    }
	})

  // load wireframe component
	let viewportComponent = null
	function updateViewportComponent(id) {
		viewportComponent = views[id]
	}

</script>


<svelte:head>
	{#if page && page.name}
		<title>{page.name}</title>
	{/if}
</svelte:head>

<!-- block component -->
<svelte:component this={viewportComponent} {app} {page} {block} {data}></svelte:component>
