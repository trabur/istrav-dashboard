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

<div class="dotted">
  <header class={showWiring ? 'wire' : ''}>
    {#if showWiring}
      <div class="name">header</div>
    {/if}
    <div class="row wrapper">
      <div class="contain col s12 m6">
        <div id="particles-js">
          <div style="position: absolute; overflow: auto; bottom: 0; top: 0; width: 100%;">
            <br />
            <br />
            <br />
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
            <article class={showWiring ? 'wire' : ''}>
              {#if showWiring}
                <div class="name">article</div>
              {/if}
              <div class="card" style="margin: 1em; padding: 1em;">
                <slot name="article"></slot>
              </div>
            </article>
            <footer class={showWiring ? 'wire' : ''}>
              {#if showWiring}
                <div class="name">footer</div>
              {/if}
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </div>
      <div class="contain col s12 m6">
        <div id="right">
          <br />
          <br />
          <br />
          <aside class={showWiring ? 'wire' : ''}>
            {#if showWiring}
              <div class="name">main</div>
            {/if}
            <slot name="main"></slot>
          </aside>
        </div>
      </div>
    </div>
  </header>
</div>


<style>
  :global(body) {
    overflow: hidden;
  }

  header {
    height: 100vh;
    overflow: hidden;
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

  #right {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .wrapper {
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    margin: 0;
  }

	.dotted {
		background-image: radial-gradient(#ddd 20%, transparent 20%), radial-gradient(#ddd 20%, transparent 20%);
    background-color: #eee;
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px;
	}

  .contain {
    position: relative;
    height: 100%;
  }

  .logo {
    text-align: center;
  }
  
  .wire {
    border: 1px dashed #000;
    padding: 0.2em;
    margin: 0.2em;
    min-height: 5em;
    position: relative;
  }

  /* .middle {
    right: 0;
    left: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  } */

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
  .logo.wire,
  .slogan.wire,
  article.wire,
  footer.wire,
  aside.wire {
    padding-top: 2.2em;
  }
</style>