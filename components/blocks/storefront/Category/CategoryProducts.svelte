
<script>
  import { onMount } from 'svelte';

  import { istrav, scripts } from '../../../../api'

  export let app
  // export let page
  // export let block
	// export let data
  export let categoryId

  // objects
  let items = []
  let name

	onMount(async () => {
    // get category
    let esCategory = await scripts.store.categories.getOne(app.id, categoryId)
    if (esCategory.payload.success === true) {
      name = esCategory.payload.data.name
    } else {
      alert(esCategory.payload.reason)
    }

    // get the products
    let esProducts = await scripts.store.categories.getProducts(app.id, categoryId)
    if (esProducts.payload.success === true) {
      items = esProducts.payload.data
    } else {
      alert(esProducts.payload.reason)
    }
    console.log('category products', items)
  })
</script>

<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    {#if name}
      <h3 class="title">{name}</h3>
    {/if}
    <div class="masonry">
      {#each items as item (item.slug)}
        <div class="item">
          <a href={`/products/${item.slug}`}>
            <div class="image" style={`background-image: url(${app.uploads}/${item.image});`}>
            </div>
            <h6 style="color: #111; margin: 0.5em 0 0 0;">{item.name}</h6>
            {#if item.isNotForSale}
              <h6 style="color: #666; margin: 0.5em 0 0 0;"><strike>${item.price / 100}</strike> NOT FOR SALE</h6>
            {:else}
              <h6 style="color: #666; margin: 0.5em 0 0 0;">${item.price / 100}</h6>
            {/if}
          </a>
        </div>
      {/each}
    </div>
    {#if items.length === 0}
      <p>no products...</p>
    {/if}
  </div>
</div>
<!-- hello list products {JSON.stringify(products, null, 2)} -->

<style>
  .title {
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .image {
    width: 100%;
    height: 200px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .masonry {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
  }

  .item {
    padding: 0;
    margin: 0;
  }

  /* Masonry on medium-sized screens */
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .masonry {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* Masonry on small screens */
  @media only screen and (max-width: 767px) and (min-width: 0px) {
    .masonry {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>