<script>
	import { onMount } from "svelte";

  import { istrav, scripts } from '../../api'

  // load all blocks here
  import { views } from '../views'

	export let app
  export let page
  export let block

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
