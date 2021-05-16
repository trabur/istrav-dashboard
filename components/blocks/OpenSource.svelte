<script>
  import { onMount } from 'svelte';

  // export let appId

  // let plans = []

	onMount(async () => {    
    // get the menus
    // let esPlans = await scripts.subscription.plans.getAll(appId)
    // if (esPlans.payload.success === true) {
    //   plans = esPlans.payload.data.sort((a, b) => a.price-b.price)
    // } else {
    //   console.log(esPlans.payload.reason)
    // }
    // console.log('plans', plans)
  })
</script>

<div class="dotted">
  <div style="">
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
    <div class="row">
      <div class="col s0 m1"></div>
      <div class="col s12 m10">    
        <div class="card" style="background-color: #ccc; padding: 1em; color: #333;">
          <div class="row" style="margin: 0;">
            <div class="col s12 m6">
              <h4 style="font-weight: 600;"><i class="material-icons">lock</i> Open Source</h4>
              <div style="margin-left: 2.2em;">
                <h5 style="font-size: 1.2em;">ISTRAV is open source software that is free for anyone to download and install on their own server under the terms of the GNU General Public Licence (GPLv3).</h5>
                <a href="https://github.com/trabur" target="_blank" class="btn-small waves-effect waves-light red lighten-2">
                  Go to GitHub repo →
                </a>
                <br />
                <br />
              </div>
            </div>
            <div class="col s0 m6">
              <div>The code can be found in our GitHub repository/account named trabur. For installation instructions please refer to <a href="https://docs.istrav.com">docs.istrav.com</a>.</div>
              <br />
              <div>You will need a server such as a DigitalOcean droplet or AWS instances. Also, be ready to spin up these 3rd party requirements: PostgreSQL and Kubernetes.</div>
              <br />
              <div>If you know what you are doing, hosting our software is not so bad. However things can be challenging for new comers.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col s0 m1"></div>
    </div>
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
  </div>
</div>


<style>
	.dotted {
		background-image: radial-gradient(#ddd 20%, transparent 20%), radial-gradient(#ddd 20%, transparent 20%);
    background-color: #eee;
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px;
	}
</style>

