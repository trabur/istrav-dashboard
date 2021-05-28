<script>
  import { onMount } from 'svelte';

  onMount(() => {
    var elemAccountTabs = document.querySelector('#accountTabs')
    var instanceAccountTabs = M.Tabs.init(elemAccountTabs, {})
  })
</script>

<div class="row" style="min-height: 100vh;">
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br>
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <ul class="tabs tabs-fixed-width" id="accountTabs">
      <li class="tab col s3"><a href="#account">Account</a></li>
      <li class="tab col s3"><a href="#orderHistory">Order history</a></li>
      <li class="tab col s3"><a href="#addressBook">Address book</a></li>
    </ul>
    <div class="card" id="account">
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
        <hr>
        <a href="/logout" class="waves-effect waves-light red lighten-2 btn-large" style="margin-top: 0.5em;">LOGOUT</a>
      </div>
      <!-- <div class="card-action">
        <a href="#">This is a link</a>
      </div> -->
    </div>
    <div class="card" id="orderHistory">
    </div>
    <div class="card" id="addressBook">
    </div>
  </div>
</div>

<style>
  #accountTabs {
    background: transparent;
  }

  .card {
    /* background: #eee; */
    min-height: 400px;
  }
</style>