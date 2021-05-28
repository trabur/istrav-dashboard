<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../../../api'
  
  export let app
  export let cart
  export let updatePrices

  let products = cart.products
  let token

  async function changeQty(slug) {
    console.log('changeQty', slug, raw[slug])
    // how many are left in stock?
    cart.products.forEach(product => {
      if (product.inStockCount < raw[product.slug]) {
        alert(`Item count for "${product.slug}" is too high! There is only ${product.inStockCount} product left in stock.`)
        raw[product.slug] = product.inStockCount
      }
    })
    // continue
    let change = cart
    change.raw[slug] = raw[slug]
    let esUpdate = await scripts.account.carts.getUpdate(app.id, token, cart.id, change)
    console.log('esUpdate', esUpdate)
    if (esUpdate.payload.success === true) {
      raw = esUpdate.payload.data.raw
    } else {
      alert(esUpdate.payload.reason)
    }
    updatePrices()
  }

  async function remove(product) {
    console.log('delete', product)
    let change = cart
    change.products = change.products.filter((value, index) => {
      return value.id !== product.id
    })
    let esUpdate = await scripts.account.carts.getUpdate(app.id, token, cart.id, change)
    console.log('esUpdate', esUpdate)
    if (esUpdate.payload.success === true) {
      products = esUpdate.payload.data.products
    } else {
      alert(esUpdate.payload.reason)
    }

    updatePrices()
  }

	onMount(() => {
    token = localStorage.getItem('token')
  })
</script>

{#if products && products.length > 0}
  <div class="items">
    {#each products as item (item.slug)}
      <div class="item">
        <a href={`/products/${item.slug}`}><div class="image" style={`background-image: url(${app.uploads}/${item.image});`}></div> </a>
        <div class="details">
          <div style="float: right;">${item.price / 100}</div>
          <a href={`/products/${item.slug}`} style="color: #111; margin: 0;">{item.name}</a>
          <br />
          <button class="btn" style="float: right;" on:click={() => remove(item)}><i class="material-icons">delete</i></button>
          <div class="row edit">
            <div class="input-field col s6 m4">
              <div style="font-size: 0.75em; color: #aaa; margin: -0.5em 0;">Item Count:</div>
              <input id="itemCount" type="number" class="validate" bind:value={cart.raw[item.slug]} on:change={(e) => changeQty(item.slug)}>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .items {
    padding: 0;
  }

  .item {
    padding: 10px 0;
    margin: 0;
    min-height: 120px;
    border-bottom: 1px solid #eee;
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

  .edit,
  .input-field {
    margin-bottom: 0;
  }
</style>