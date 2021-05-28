<script>
  export let app

  let about = app.labelAbout
</script>

{#if about}
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <h3 class="title">ABOUT</h3>
      <p>{about}</p>
    </div>
  </div>
{/if}


<style>
  .title {
    font-size: 2rem;
    font-weight: 900;
  }
</style>