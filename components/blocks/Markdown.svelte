<script>
  import { onMount } from 'svelte';
  
	import SvelteMarkdown from 'svelte-markdown'

  // export let app
  export let page
  // export let block
  // export let data

  onMount(() => {
    console.log('markdown', page.content)
  })
</script>

{#if page && page.content}
  <SvelteMarkdown source={page.content} />
{/if}

<style>
  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0 0 0.5em 0;
    font-weight: 400;
    line-height: 1.2;
  }
</style>