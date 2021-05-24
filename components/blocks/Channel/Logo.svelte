<script>
  import { onMount } from "svelte";

  export let domain
  export let app

	let show = false

	onMount(() => {
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		particlesJS.load('particles-js', './particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	})

	function showMagic () {
		show = true
	}
	function hideMagic () {
		show = false
	}
</script>

<div class="masonry">
	<div id="particles-js">
		<div class="middle">
			{#if domain === 'istrav.com'}
				<div class="logo">
					<span style="font-style: italic; font-size: 3em; margin: 0 -0.1em;">IS</span>
					<span style="font-style: italic; vertical-align: top; font-size: 1.5em; line-height: 2.3em;">TRAV</span>
				</div>
			{:else if domain === 'burnfort.com'}
				<div class="aaghc" on:mouseenter={showMagic} on:mouseleave={hideMagic}>
					{#if show}
						AAGHC
					{:else}
						<div class="first-a">A</div><div class="second-a">A</div><div class="third-g">G</div><div class="rotate-letter">H</div><div class="space-letter">C</div>
					{/if}
				</div>
			{:else}
				{#if app.logo}
					<div style="text-align: center; margin: 0.5em 0 1em;">
						<img class="logo-image" src={`${app.uploads}/${app.logo}`} alt="logo" />
					</div>
				{:else}
					<div class="logo">
						<span style="font-size: 1.5em; line-height: 2em;">{app.labelName || 'SETUP'}</span>
					</div>
				{/if}
			{/if}
			{#if app}
				<h1 class="slogan">{app.labelSloganLine1 || 'admin control panel:'}<br />{app.labelSloganLine2 || 'http://metaheap.io'}</h1>
			{:else}
				<h1 class="slogan">Community messaging<br />and bulletin board.</h1>
			{/if}
		</div>
	</div>
</div>

<style>
	.masonry {
		min-height: 10em;
		position: relative;
	}

	.middle {
    width: 100%;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
	}

	.logo {
		margin: -1em 0 0 0;
		font-size: 1.5em;
		font-weight: 800;
		text-align: center;
		color: #333;
	}

	.logo-image {
		margin: 0;
    height: 5em;
	}

	.slogan {
		font-weight: 600;
		text-align: center;
		margin-top: -1em;
    font-size: 1em;
		color: #333;
	}

  #particles-js {
		background-color: #ee6e73;
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
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