<script>
  import { onMount } from 'svelte';

  // export let app
  export let page
  export let block
  export let data

  let items = []

	onMount(async () => {
    console.log('side navigation block', block)
    console.log('side navigation data', data)

    items = JSON.parse(data.menu.raw)
    console.log('side navigation menu', items)
  })
</script>

{#if items.length > 0}
  <h5>{data.menu.name}:</h5>
  <ul class="sidenav">
    {#each items as nav}
      <a href={nav.url}>
        <li class={`waves-effect ${nav.id === `pages.${page.slug}` ? 'active' : null}`} style="width: 100%;">
          {#if nav.icon}
            <i class="navicon material-icons">{nav.icon}</i>
          {/if}
          <span class="name">{nav.name}</span>
        </li>
      </a>
    {/each}
  </ul>
  <br />
  <br />
{/if}

<style>
  ul {
    border-top: 1px solid #aaa;
  }

  ul li {
    border-bottom: 1px solid #aaa;
    display: grid;
    grid-template-columns: 24px 1fr;
    padding: 0.5em;
  }

  ul li .active {
    background-color: #aaa;
  }
  
  .navicon {
    margin-top: 0.1em;
  }

  .name {
    margin-top: 0.1em;
    margin-left: 0.5em;
  }

  .sidenav {
    -webkit-transform: inherit !important;
    transform: inherit !important;
    background-color: transparent;
    position: inherit;
    padding: 0;
    overflow-y: visible;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 100%;
    height: fit-content;
  }
  .sidenav li {
    line-height: inherit;
  }
</style>

