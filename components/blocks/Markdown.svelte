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