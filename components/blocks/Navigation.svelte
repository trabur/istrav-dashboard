<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../api'
  
  export let app
  export let page
  export let selected
  export let menuId
  export let block
  export let data
  
  let items = []
  
	onMount(async () => {    
    console.log('block', block)
    if (data) {
      // we already have the menus
      menuId = data.menuId
      items = JSON.parse(data.menu.raw)
    } else if (menuId) {
      // get the menus from server
      let esNavigation = await scripts.app.menus.getOne(app.id, menuId)
      if (esNavigation.payload.success === true) {
        items = JSON.parse(esNavigation.payload.data.raw)
      } else {
        console.log(esNavigation.payload.reason)
      }
    } else {
      console.log('no menus to load')
    }

    console.log('menu', menuId, items)
  })
</script>

{#if items.length > 0}
	<div class="nav">
		{#each items as nav}
			{#if nav.id === `pages.${page.slug}` || nav.id === selected}
				<a href={nav.url} class={`btn-large waves-effect waves-light ${app.primaryBtnBackColor} ${app.primaryBtnTextColor}`}>
					{nav.name}
				</a>
			{:else}
				<a href={nav.url} class={`btn-large waves-effect waves-light ${app.secondaryBtnBackColor} ${app.secondaryBtnTextColor}`}>
					{nav.name}
				</a>
			{/if}
		{/each}
	</div>
{/if}

<style>
  .nav {
    padding: 1em;
    text-align: center;
    background-color: #111;
  }

  .nav a {
    margin: 0.5em;
  }
</style>

