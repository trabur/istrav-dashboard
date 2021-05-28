<script>
  import { onMount, onDestroy } from 'svelte'
  
  import { istrav, scripts } from '../../../api'

	let email = ''
  let password = ''
  let passwordRepeat = ''
  let username = ''
  let firstName = ''
  let lastName = ''
  let esApp

	async function auth() {
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')
    if (passwordRepeat === '') return alert('Password repeat must be defined.')
    if (password !== passwordRepeat) return alert('Password should be the same as password confirm.')
    if (username === '') return alert('Username must be defined.')
    if (firstName === '') return alert('First name must be defined.')
    if (lastName === '') return alert('Last name must be defined.')
  
    console.log('esApp', esApp)
    if (esApp.payload.success === true) {
      let esRegister = await scripts.account.users.getRegister(esApp.payload.data.id, email, username, password, firstName, lastName)
      console.log('esRegister', esRegister)
      if (esRegister.payload.success === true) {
        let esLogin = await scripts.account.users.getLogin(esApp.payload.data.id, email, password)
        console.log('esLogin', esLogin)
        if (esLogin.payload.success === true) {
          localStorage.setItem('token', esLogin.payload.data.token)
          window.location = '/account'
        } else {
          alert(esLogin.payload.reason)
        }
      } else {
        alert(esRegister.payload.reason)
      }
    } else {
      alert(esApp.payload.reason)
    }
  }

  onMount(async () => {
    // fetch
    let domainId = window.location.host
    let state = 'production'

    // pick an app to show for local development
    if (domainId.includes('localhost:7000')) {
      domainId = 'istrav.com'
    }
    // set appId from domain 
    if (domainId.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domainId.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        esApp = esEndpoint
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      domainId = domainId.split('.').slice(-2).join('.')
      let esOne = await scripts.tenant.apps.getOne(null, domainId, state)
      if (esOne.payload.success === true) {
        esApp = esOne
      } else {
        alert(esOne.payload.reason)
      }
    }
  })
</script>

<div class="row" style="min-height: 100vh;">
  <div class="col s12 m4"></div>
  <div class="col s12 m4">
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
    <h3 class="title">REGISTER</h3>
    <div class="card" style="padding: 1em; background: #eee;">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text" class="validate" bind:value={email}>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12">
          <input id="passwordRepeat" type="password" class="validate" bind:value={passwordRepeat}>
          <label for="passwordRepeat">Password Confirm</label>
        </div>
        <div class="input-field col s12">
          <input id="username" type="text" class="validate" bind:value={username}>
          <label for="username">Username</label>
        </div>
        <div class="input-field col s6">
          <input id="firstName" type="text" class="validate" bind:value={firstName}>
          <label for="firstName">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="lastName" type="text" class="validate" bind:value={lastName}>
          <label for="lastName">Last Name</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect btn" on:click={() => auth()}>Submit</button>
      </div>
    </div>
    <div style="text-align: right;">
      <a href="/login" class="waves-effect red lighten-2 btn">LOGIN</a>
    </div>
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
  </div>
  <div class="col s12 m4"></div>
</div>

<style>
  .title {
    margin: 0; 
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
  }
</style>