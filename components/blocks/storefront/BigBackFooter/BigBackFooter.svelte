<script>
  import { onMount } from 'svelte'
  
  import { istrav, scripts } from '../../../../api'

  import SocialLinks from './SocialLinks.svelte'
  import NavigationLinks from './NavigationLinks.svelte'
  import jwt_decode from "jwt-decode"
  import TawkToChatWidget from './TawkToChatWidget.svelte'
  import GoogleAnalytics from './GoogleAnalytics.svelte'
	import Navigation from '../../Navigation.svelte'

  export let app
  // export let page
  // export let block
	// export let data
  // export let selected
  export let menuId

  let items = []
  let token
  let decoded = {}
  let propertyId = app.tawkToPropertyId // || '6051205af7ce18270930caec'
  let chatId = app.tawkToChatId // || '1f0ueco46'
  let measurementId = app.googleAnalyticsMeasurementId // || 'G-M6CKY68372'

	onMount(async () => {
		token = localStorage.getItem('token')
    if (token) {
      decoded = jwt_decode(token)
      console.log('token', decoded)
    }

    // get the menus
    let esMenus = await scripts.app.menus.getOne(app.id, menuId)
    if (esMenus.payload.success === true) {
      items = JSON.parse(esMenus.payload.data.raw)
    } else {
      alert(esMenus.payload.reason)
    }
    console.log('footer', items)
  })
</script>

<Navigation {app} selected='shop' />
<div class="dotted">
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <div class="row" style="margin: 0;">
    <div class="col s1 m4"></div>
    <div class="col s10 m4">
      {#if token}
        <div class="card">
          <div class="card-content">
            <h4 style="margin: 0 0 0.5em;">Hello {decoded.username},</h4>
            <p>You are subscribed to receive emails & hear about new arrivals, special promotions and exclusive offers.</p>
          </div>
          <div class="card-action">
            <a href="/account">My Account</a>
          </div>
        </div>
      {:else}
        <div class="card">
          <div class="card-content">
            <h4 style="margin: 0 0 0.5em;">Hello guest,</h4>
            <p>Subscribe to receive emails & hear about new arrivals, special promotions and exclusive offers.</p>
          </div>
          <div class="card-action">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      {/if}
    </div>
    <div class="col s1 m4"></div>
  </div>
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
</div>
<nav class="teal lighten-2" style="position: absolute;">
  <div class="row" style="margin: 0;">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <slot></slot>
      <SocialLinks share={app.share} />
    </div>
  </div>
</nav>
{#if items}
  <NavigationLinks items={items} app={app} />
{/if}

<div class="row top-bar">
  <div class="col s0 m1"></div>
  <div class="copyright col s12 m6">
    Copyright @{new Date().getFullYear()} <a href="/">{app.labelName || `ISTRAV`}</a>. All Rights Reserved. Powered by <a href="https://istrav.com" target="_blank">ISTRAV</a>.
  </div>
  <div class="we-accept col s12 m4">
    We Accept:
    <img src="/we-accept/accept1.png" alt="VISA" class="accept" />
    <img src="/we-accept/accept2.png" alt="MASTERCARD" class="accept" />
    <img src="/we-accept/accept3.png" alt="DISCOVER" class="accept" />
    <img src="/we-accept/accept4.png" alt="AMERICANEXPRESS" class="accept" />
  </div>
  <div class="col s0 m1"></div>
</div>

{#if propertyId && chatId}
  <TawkToChatWidget propertyId={propertyId} chatId={chatId} />
{/if}
{#if measurementId}
  <GoogleAnalytics measurementId={measurementId} />
{/if}

<style>
  .top-bar {
    color: #444;
    padding: 0.5em;
    background: #ccc;
    margin: 0;
  }

  .copyright,
  .we-accept {
    padding: 0;
  }

  .copyright a {
    color: #444;
    font-weight: 700;
  }

  .we-accept {
    text-align: right;
  }
  .accept {
    margin: -0.45em 0;
  }

  .dotted {
		background-image: radial-gradient(#ddd 20%, transparent 20%), radial-gradient(#ddd 20%, transparent 20%);
    background-color: #eee;
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px;
    min-height: 200px;
    width: 100%;
  }
</style>