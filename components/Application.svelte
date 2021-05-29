<script>
  import { onMount } from 'svelte';
  
  import { istrav, scripts } from '../api'
  
  import Page from './Page.svelte'
  
  export let domain
  export let state
  export let slug
  let app

	onMount(async () => {
    let backend
    if (window.location.host === 'localhost:6006') {
      backend = 'http://localhost:1337'
    } else {
      backend = 'https://api.hacktracks.org'
    }

    // config backend for app
    istrav.tenant.apps.init({ host: backend })

    let esApp = await scripts.tenant.apps.getOne(null, domain, state)
    console.log('esApp', esApp)
    if (esApp.payload.success === true) {
      app = esApp.payload.data
    } else {
      alert(esApp.payload.reason)
    }
  })
</script>

{#if app}
  {#if slug}
    <Page {app} {slug} />
  {:else}
    {#if app.marketing}
      <Page {app} slug={app.marketing.slug} />
    {:else}
      <Page {app} slug={'homepage'} />
    {/if}
  {/if}
{/if}