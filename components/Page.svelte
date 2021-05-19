<script>
	import { onMount } from "svelte";
  
  import { scripts } from '../scripts/headless.js'

  import Block from './blocks/Block.svelte'
  import SplashPage1 from './wireframes/SplashPage1.svelte'
  import SplashPage2 from './wireframes/SplashPage2.svelte'
  import MasterDetail1 from './wireframes/MasterDetail1.svelte'
	const views = {
    SplashPage1,
    SplashPage2,
    MasterDetail1
  }

  import queryString from "query-string";

	export let app
  export let slug

	let page
  let parsed

	onMount(async () => {
    parsed = queryString.parse(window.location.search)
    console.log('parsed', parsed)

    let esPage = await scripts.app.pages.getOne(app.id, slug)
		console.log('esPage', esPage)
    if (esPage.payload.success === true) {
      page = esPage.payload.data
      updateViewportComponent(page.wireframe)
    } else {
      alert(esPage.payload.reason)
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

<!-- wireframes -->
{#if page && parsed}
  <svelte:component this={viewportComponent} {app} {page} showWiring={(parsed.showWiring == 'true')}>
    <section slot="logo" class="slot">
      {#each page.slots.logoSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="slogan" class="slot">
      {#each page.slots.sloganSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="controls" class="slot">
      {#each page.slots.controlsSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="navigation" class="slot">
      {#each page.slots.navigationSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="article" class="slot">
      {#each page.slots.articleSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="aside" class="slot">
      {#each page.slots.asideSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="main" class="slot">
      {#each page.slots.mainSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
    <section slot="footer" class="slot">
      {#each page.slots.footerSlot as block(block.id)}
        <Block {app} {page} {block} />
      {/each}
    </section>
  </svelte:component>
{/if}

<style>
  .slot {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>