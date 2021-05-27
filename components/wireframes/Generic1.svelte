<script>
  import { onMount } from "svelte";

  // export let app
  // export let page
  export let showWiring

	// onMount(() => {
	// 	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	// 	window['particlesJS'].load('particles-js', './particles.json', function() {
	// 		console.log('callback - particles.js config loaded');
	// 	});
	// })

  import particlesConfig from '../particles.json'
  let ParticlesComponent;

  console.log('particlesConfig', particlesConfig)

  onMount(async () => {
    const module = await import("svelte-particles")

    ParticlesComponent = module.default
  })

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  }

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  }
</script>

<header class={showWiring ? 'wire' : ''}>
  <svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    on:particlesInit="{onParticlesInit}"
  />
  <div class="row wrapper middle">
    <div class="col wrapper s12 m6" style="flex-direction: column;">
      <div class={showWiring ? 'logo wire' : 'logo'}>
        {#if showWiring}
          <div class="name">logo</div>
        {/if}
        <slot name="logo"></slot>
      </div>
      <div class={showWiring ? 'slogan wire' : 'slogan'}>
        {#if showWiring}
          <div class="name">slogan</div>
        {/if}
        <slot name="slogan"></slot>
      </div>
    </div>
    <div class="col wrapper s12 m6">
      <div class={showWiring ? 'controls wire' : 'controls'}>
        {#if showWiring}
          <div class="name">controls</div>
        {/if}
        <slot name="controls"></slot>
      </div>
    </div>
  </div>
</header>
<div class={showWiring ? 'navigation wire' : 'navigation'}>
  {#if showWiring}
    <div class="name">navigation</div>
  {/if}
  <slot name="navigation"></slot>
</div>
<div class="row wrapper" style="min-height: 100vh;">
  <div class="col s12 m1"></div>
  <div class="col s12 m10">
    <br />
    <br />
    <br />
    <article class={showWiring ? 'wire' : ''}>
      {#if showWiring}
        <div class="name">article</div>
      {/if}
      <slot name="article"></slot>
    </article>
    <br />
    <br />
    <br />
  </div>
  <div class="col s12 m1"></div>
</div>
<main class={showWiring ? 'wire' : ''}>
  {#if showWiring}
    <div class="name">main</div>
  {/if}
  <slot name="main"></slot>
</main>
<footer class={showWiring ? 'wire' : ''}>
  {#if showWiring}
    <div class="name">footer</div>
  {/if}
  <slot name="footer"></slot>
</footer>

<style>
  :global(body) {
    overflow: hidden;
    padding: 0 !important;
  }
  
  .wire {
    border: 1px dashed #000;
    padding: 0.2em;
    margin: 0.2em;
    min-height: 5em;
    position: relative;
  }

  .wrapper {
    margin: 0;
    padding: 0;
    border-bottom: 0;
    align-items: inherit;
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    border: 1px dashed #000;
    border-left: 0;
    border-top: 0;
    padding: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .slogan {
    text-align: center;
  }

  header.wire,
  .controls.wire,
  .logo.wire,
  .slogan.wire,
  article.wire,
  main.wire,
  footer.wire,
  .navigation.wire {
    padding-top: 2.2em !important;
  }

  header {
    overflow: hidden;
    height: 10em;
    position: relative;
  }

  :global(#tsparticles) {
		background-color: #ee6e73;
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

  header.wire {
    min-height: 20em;
  }

  .middle {
    position: absolute;
    right: 0; 
    left: 0;
    width: 100%;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .logo,
  .slogan,
  .controls,
  article {
    width: 100%;
  }
</style>