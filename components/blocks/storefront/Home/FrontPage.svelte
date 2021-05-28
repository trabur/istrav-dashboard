<script>
  import { onMount } from 'svelte';

  export let app
  
  let image = app.image
  let line1 = app.line1
  let line2 = app.line2
  let buttonName = app.buttonName
  let buttonUrl = app.buttonUrl
</script>

<div class="banner">
  {#if image}
    <div class="image" style={`background-image: url(${app.uploads}/${image});`}>
      <div class="announce">
        <div class="hide-on-med-and-down">
          <span class="first"><h1 class="text">{line1}</h1></span><br />
          <span class="second"><h1 class="text" style="font-size: 2rem;">{line2}</h1></span>
        </div>
        <div class="hide-on-large-only">
          <span class="first"><h1 class="text small">{line1}</h1></span><br />
          <span class="second"><h1 class="text small" style="font-size: 1rem;">{line2}</h1></span>
        </div>
        <a href={`${buttonUrl}`} class="waves-effect waves-light btn-large" style="margin-top: 0.5em;">{buttonName}</a>
      </div>
    </div>
  {/if}
</div>

<style>
  .image {
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 10px 10px -10px #000;
  }

  .banner {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }


  .announce {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .first,
  .second {
    background-color: #fff;
    display: inline-block;
    transform: skew(45deg);
    padding: 0.2em 4em;
    margin: 0.4em;
    text-transform: uppercase;
  }

  .text {
    transform: skew(-45deg);
    margin: 0;
    font-size: 4rem;
    font-weight: 900;
  }

  .small {
    font-size: 2rem;
    font-weight: 900;
  }
</style>