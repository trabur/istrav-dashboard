<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../../../api'

  export let app
  // export let page
  // export let block
	// export let data
  export let product
  let cart
  let raw = {}
  let token
  let itemCount = 1

	onMount(async () => {
    M.updateTextFields()
		token = localStorage.getItem('token')

    if (!token) {
      return // don't try to load cart
    }

    // add cart if missing
    let esCarts = await scripts.account.carts.getAll(app.id, token)
    // console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      cart = esCarts.payload.data[0]
      if (!cart) {
        let change = {
          products: [],
          raw: raw
        }
        let esSave = await scripts.account.carts.getSave(app.id, token, change)
        // console.log('esSave', esSave)
        if (esSave.payload.success === true) {
          cart = esSave.payload.data
        } else {
          alert(esSave.payload.reason)
        }
      } else {
        // fetch cart with products
        let esCart = await scripts.account.carts.getOne(app.id, token, cart.id)
        if (esCart.payload.success === true) {
          cart = esCart.payload.data
          raw = cart.raw || {}
          console.log('raw', raw)
        } else {
          alert(esCart.payload.reason)
        }
      }
    } else {
      alert(esCarts.payload.reason)
    }
  })

	async function addToCart() {
    if (product.isNotForSale) {
      return alert('This product is marked as: "NOT FOR SALE".')
    }

    if (itemCount === '') return alert('item count must be defined.')

    // how many are left in stock?
    if (product.inStockCount < itemCount) {
      return alert(`Item count for "${product.slug}" is too high! There is only ${product.inStockCount} product left in stock.`)
    }

    if (!token) {
      if (confirm('You must login to an account first before adding an item to your cart.')) {
        // ok was pressed
        window.location.href = `/login?redirect=/products/${product.slug}`
      } else {
        // cancel was pressed
      }
    }

    raw[product.slug] = itemCount

    let change = {
      products: cart.products || [],
      raw: raw
    }
    change.products.push(product)

    let esUpdate = await scripts.account.carts.getUpdate(app.id, token, cart.id, change)
    console.log('esUpdate', esUpdate)
    if (esUpdate.payload.success === true) {
      M.toast({html: `Successfuly added "${product.name}" to your cart.`})
    } else {
      alert(esUpdate.payload.reason)
    }
  }
</script>


<div class="row addToCart">
  <div class="col s4 m5">
    <div class="input-field col s12">
      <input id="itemCount" type="number" class="validate" bind:value={itemCount}>
      <label for="itemCount">Item Count:</label>
    </div>
  </div>
  <div class="col s8 m7">
    <button type='submit' class="waves-effect btn btn-large submit-button" on:click={() => addToCart()}>Add to cart</button>
  </div>
</div>


<style>
  .addToCart {
    background: #eee;
    padding: 1em 1em 0 0;
  }

  .submit-button {
    width: 100%;
    margin-top: 0.4em;
  }
</style>