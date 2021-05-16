<script>
  import { onMount } from "svelte";

  export let app
  // export let page
  // export let block
	// export let data
</script>

{#if app.labelSloganLine1}
	<h1 class="slogan">{app.labelSloganLine1 || ''}<br />{app.labelSloganLine2 || ''}</h1>
{:else}
	<h1 class="slogan">Community messaging<br />and bulletin board.</h1>
{/if}

<style>
	.slogan {
		font-weight: 600;
		text-align: center;
		margin-top: -1em;
    font-size: 1em;
		color: #333;
	}
</style>