<script>
  import { onMount } from "svelte";

  // export let app
  // export let page
  export let showWiring

	onMount(() => {
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		window['particlesJS'].load('particles-js', './particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	})
</script>

<header class={showWiring ? 'wire' : ''}>
  <div id="particles-js">
    <div class="row wrapper middle">
      <div class="col wrapper s12 m6">
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
  </div>
</header>
<div class={showWiring ? 'navigation wire' : 'navigation'}>
  {#if showWiring}
    <div class="name">navigation</div>
  {/if}
  <slot name="navigation"></slot>
</div>
<br />
<br />
<br />
<div class="row wrapper" style="display: flex;">
  <div class="col wrapper s12 m1"></div>
  <div class="col wrapper s12 m3">
    <aside class={showWiring ? 'wire' : ''}>
      {#if showWiring}
        <div class="name">aside</div>
      {/if}
      <slot name="aside"></slot>
    </aside>
  </div>
  <div class="col wrapper s12 m7">
    <article class={showWiring ? 'wire' : ''}>
      {#if showWiring}
        <div class="name">article</div>
      {/if}
      <div class="card">
        <slot name="article"></slot>
      </div>
    </article>
  </div>
  <div class="col wrapper s12 m1"></div>
</div>
<br />
<br />
<br />
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

  header.wire,
  .controls.wire,
  .logo.wire,
  .slogan.wire,
  article.wire,
  aside.wire,
  main.wire,
  footer.wire,
  .navigation.wire {
    padding-top: 2.2em !important;
  }

  article .card {
    padding: 1em;
  }

  header {
    overflow: hidden;
    height: 10em;
    position: relative;
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
</style>