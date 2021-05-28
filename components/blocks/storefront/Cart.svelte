
<script>
  import { onMount } from 'svelte';
  
  import { istrav, scripts } from '../../../api'

  export let app
  let cart
  let token
  let raw = {}
  let subtotal
  let total

  function calculateSubtotal (products, raw) {
    let amount = 0
    products.forEach((value, index) => {
      amount = amount + value.price * raw[value.slug]
    })
    return amount
  }

	onMount(async () => {
		token = localStorage.getItem('token')

    if (!token) {
      return // don't try to load cart
    }

    let esCarts = await scripts.account.carts.getAll(app.id, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      cart = esCarts.payload.data[0]
      if (cart) {
        let esCart = await scripts.account.carts.getOne(app.id, token, cart.id)
        console.log('esCart', esCart)
        if (esCart.payload.success === true) {
          cart = esCart.payload.data
          raw = esCart.payload.data.raw
          subtotal = calculateSubtotal(cart.products, raw)
          total = subtotal
        } else {
          alert(esCart.payload.reason)
        }
      }
    } else {
      alert(esCarts.payload.reason)
    }
  })
</script>

<h4 style="margin: 0.5em 0 0; padding: 0 0.5em;">
  <a href="/cart"class="my-cart-button">My Cart</a>
  {#if token}
    <a href="/cart" class="waves-effect btn btn-small red lighten-2 edit-button">edit</a>
  {:else}
    <a href="/login" class="waves-effect btn btn-small red lighten-2 edit-button">login</a>
  {/if}
</h4>

<!-- {JSON.stringify(cart, null, 2)} -->

{#if token}
  {#if cart && cart.products && cart.products.length > 0}
    <div class="items">
      {#each cart.products as item (item.slug)}
        <div class="item">
          <a href={`/products/${item.slug}`}><div class="image" style={`background-image: url(${app.uploads}/${item.image});`}></div> </a>
          <div class="details">
            <div style="float: right;">${item.price / 100}</div>
            <a href={`/products/${item.slug}`} style="color: #111; margin: 0;">{item.name}</a>
            <div style="color: #888;">qty: {raw[item.slug]}</div>
          </div>
        </div>
      {/each}
    </div>
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
  {/if}
  {#if cart && cart.products && cart.products.length === 0}
    <div class="items">
      <hr>
      <p>Your cart is empty...</p>
    </div>
  {/if}
{:else}
  <div class="auth">
    <a href="/register" class="waves-effect btn btn-large auth-button">Let's get started!</a>
    <p style="text-align: center;">(please login or register to get started)</p>
  </div>
{/if}



<style>
  .my-cart-button {
    color: #000;
  }

  .edit-button {
    float: right;
  }

  .auth {
    padding: 1em;
  }
  .calculate {
    padding: 0 1em;
  }
  .checkout {
    padding: 1em;
  }

  .auth-button,
  .checkout-button {
    width: 100%;
  }

  .items {
    padding: 1em 1em 0 1em;
  }

  .item {
    padding: 10px 0;
    margin: 0;
    min-height: 120px;
    border-top: 1px solid #eee;
  }

  .image {
    width: 100px;
    height: 100px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    float: left;
  }

  .details {
    margin-left: 110px;
  }
</style>