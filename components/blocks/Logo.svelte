<script>
  import { onMount } from "svelte";

  export let app
  // export let page
  // export let block
	// export let data

	let show = false

	function showMagic () {
		show = true
	}
	function hideMagic () {
		show = false
	}
</script>

{#if app.domain === 'istrav.com'}
	<div class="logo">
		<span style="font-style: italic; font-size: 3em; margin: 0 -0.1em;">IS</span>
		<span style="font-style: italic; vertical-align: top; font-size: 1.5em; line-height: 2.3em;">TRAV</span>
	</div>
{:else if app.domain === 'aaghc.com'}
	<div class="aaghc" on:mouseenter={showMagic} on:mouseleave={hideMagic}>
		{#if show}
			AAGHC
		{:else}
			<div class="first-a">A</div><div class="second-a">A</div><div class="third-g">G</div><div class="rotate-letter">H</div><div class="space-letter">C</div>
		{/if}
	</div>
{:else}
	{#if app.logo}
		<div class="logo">
			<img src={`${app.uploads}/${app.logo}`} style="height: 3em; margin: 0.5em;" alt={app.name} />
		</div>
	{:else}
		<div class="logo">
			<span style="font-size: 1.5em; line-height: 2em;">{app.labelName || ''}</span>
		</div>
	{/if}
{/if}

<style>
	.logo {
		margin: -1em 0 0 0;
		font-size: 1.5em;
		font-weight: 800;
		text-align: center;
		color: #333;
	}

	.aaghc {
		margin: 0 auto;
		font-size: 4em;
		font-weight: 800;
		text-align: center;
		font-family: sans-serif;
		color: #333;
		cursor: pointer;
		display: table;
	}

	.aaghc .first-a {
		float: left;
	}

	.aaghc .second-a {
		margin-left: -0.2em;
		float: left;
	}

	.aaghc .third-g {
		margin-right: 0.1em;
		float: left;
	}

	.aaghc .rotate-letter {
		transform: rotate(-90deg);
		float: left;
	}

	.aaghc .space-letter {
		float: left;
	}
</style>