<script>
  import { onMount } from 'svelte';

  export let app
  export let page
  // export let block
  // export let data
  let scripts = window['scripts']

  let items = []

	onMount(async () => {    
    // get the menus
    let esNavigation = await scripts.app.menus.getOne(app.id, 'main')
    if (esNavigation.payload.success === true) {
      items = JSON.parse(esNavigation.payload.data.raw)
    } else {
      console.log(esNavigation.payload.reason)
    }
    console.log('main menu', items)
  })
</script>

{#if items.length > 0}
	<div class="nav">
		{#each items as nav}
			{#if nav.id === `pages.${page.slug}`}
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

