<script>
  import { onMount } from 'svelte';
  
  import { scripts } from '../scripts/headless.js'
  
  import Page from './Page.svelte'
  
  export let domain
  export let state
  export let slug
  let app

	onMount(async () => {
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