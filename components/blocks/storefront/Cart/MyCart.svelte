<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../../../api'
  
  import MyCartProducts from './MyCartProducts.svelte'

  export let app
  // export let page
  // export let block
	// export let data

  let cart
  let token
  let subtotal = 0
  let total = 0

  function calculateSubtotal (products, raw) {
    let amount = 0
    products.forEach((value, index) => {
      amount = amount + value.price * raw[value.slug]
    })
    return amount
  }

  function updatePrices () {
    subtotal = calculateSubtotal(cart.products, raw)
    total = subtotal
  }

	onMount(async () => {
    token = localStorage.getItem('token')

    if (!token) {
      return // don't try to load cart
    }

    let esCarts = await scripts.account.carts.getAll(app.id, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      let id = esCarts.payload.data[0].id
      let esCart = await scripts.account.carts.getOne(app.id, token, id)
      console.log('esCart', esCart)
      if (esCart.payload.success === true) {
        cart = esCart.payload.data
        subtotal = calculateSubtotal(cart.products, cart.raw)
        total = subtotal
      } else {
        alert(esCart.payload.reason)
      }
    } else {
      alert(esCarts.payload.reason)
    }
  })
</script>

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br>
<div class="row" style="min-height: 100vh;">
  <div class="col s12 m12 l1"></div>
  <div class="col s12 m12 l7">
    <h3 class="title">My Cart</h3>
    <h4 class="description">REVIEW YOUR ORDER</h4>
    <hr style="margin: 0.5em 0 0 0;">
    {#if cart}
      <MyCartProducts {app} {cart} updatePrices={updatePrices} />
    {/if}
  </div>
  <div class="col s12 m12 l3">
    <div class="card" style="padding: 1em;">
      <div class="calculate">
        <hr>
        <div style="float: right;">${subtotal / 100}</div>
        <div>Subtotal</div>
        <div style="float: right;">Calculated at checkout</div>
        <div>Taxes</div>
        <div style="float: right;"><strong>FREE</strong></div>
        <div>Estimated Shipping</div>
        <hr>
        <div style="font-weight: 900;">
          <div style="float: right;">${total / 100}</div>
          <div>Total</div>
        </div>
      </div>
      <div class="checkout">
        {#if total > 0}
          <a href="/checkout" class="waves-effect btn btn-large checkout-button">proceed to checkout</a>
        {:else}
          <a href="/checkout" class="waves-effect btn btn-large checkout-button" disabled>proceed to checkout</a>
        {/if}
      </div>
    </div>
    <div class="col s12 m12 l1"></div>
  </div>
</div>

<style>
  .title {
    margin: 0;
    font-size: 2em;
    font-weight: 900;
  }
  .description {
    margin: 0;
    font-size: 1.5em;
  }
  .checkout {
    padding: 1em 0 0 0;
  }
  .checkout-button {
    width: 100%;
  }
</style>