<script>
  import { onMount } from "svelte";

  export let showWiring
  export let app
  // export let page

	onMount(() => {
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		window['particlesJS'].load('particles-js', './particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	})
</script>

<header class={showWiring ? 'wire' : ''}>
  <div id="particles-js">
    {#if showWiring}
      <div class="name">header</div>
    {/if}
    <div class="middle" style="font-size: 2em;">
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
      <a href="/#jump-here" class={`btn-floating btn-large waves-effect waves-light ${app.secondaryBtnBackColor || 'teal lighten-2'} ${app.secondaryBtnTextColor || 'white-text'}`}>
        <i class="material-icons">expand_more</i>
      </a>
    </div>
  </div>
</header>
<div class={showWiring ? 'wire navigation' : 'navigation'}>
  {#if showWiring}
    <div class="name">navigation</div>
  {/if}
  <div id="jump-here"></div>
  <slot name="navigation"></slot>
</div>
<div class="row wrapper">
  <div class="col s12 m2"></div>
  <div class="col s12 m8">
    <br />
    <br />
    <br />
    <article class={showWiring ? 'wire' : ''}>
      {#if showWiring}
        <div class="name">article</div>
      {/if}
      <div class="card" style="padding: 1em;">
        <slot name="article"></slot>
      </div>
    </article>
    <br />
    <br />
    <br />
  </div>
  <div class="col s12 m2"></div>
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
  :global(#sapper) {
    overflow: auto;
  }

  header {
    min-height: 100vh !important;
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

  .wire {
    border: 1px dashed #000;
    padding: 0.2em;
    margin: 0.2em;
    min-height: 5em;
    position: relative;
  }

  .wrapper {
    margin: 0;
    min-height: 0;
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

  .middle {
    right: 0;
    left: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  }

  header.wire,
  .logo.wire,
  .slogan.wire,
  .navigation.wire,
  article.wire,
  footer.wire,
  main.wire {
    padding-top: 2.2em;
  }
</style>