const template = document.createElement('template');

template.innerHTML = /*html*/`
<style>
  .expand {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .masonry {
    width: 100%;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
  }

  .item {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: auto;
  }

	.sidebar {
		color: #333;
		max-width: 300px;
		margin: 0;
		background: #eee;
		height: 100%;
		padding: 0 1em;
		position: relative;
		overflow: auto;
	}

	main {
		color: #ccc;
		position: relative;
		width: 100%;
		margin: 0; 
		padding: 0; 
		background: #111;
	}

	.sidebar a {
		text-decoration: underline;
	}
</style>
<div class="masonry expand">
	<div class="item">
		<br />
		<br />
		<br />
		<div style="border-bottom: 5px dashed;">
			<h1 style="text-align: center; font-size: 2em;">ISTRAV</h1>
		</div>
		<br />
		<br />
    <h3 style="text-align: center; margin: 0 0 0.2em 0; font-size: 1.5em">DASHBOARD</h3>
		<ul style="font-size: 1.4em; font-family: monospace; list-style-type: none; text-align: center; margin: 0; padding: 0;">
      <li><a href="/account.users">account.users()</a></li>
      <li><a href="/account.cart">account.cart()</a></li>
      <li><a href="/account.orders">account.orders()</a></li>
      <li><a href="/fleet.vehicles">fleet.vehicles()</a></li>
      <li><a href="/fleet.employees">fleet.employees()</a></li>
			<li><a href="/fleet.customers">fleet.customers()</a></li>
			<li><a href="/fleet.locations">fleet.locations()</a></li>
			<li><a href="/store.featured">store.featured()</a></li>
			<li><a href="/store.categories">store.categories()</a></li>
			<li><a href="/store.collections">store.collections()</a></li>
			<li><a href="/store.products">store.products()</a></li>
			<li><a href="/meta.channels">meta.channels()</a></li>
			<li><a href="/meta.messages">meta.messages()</a></li>
			<li><a href="/meta.logs">meta.logs()</a></li>
		</ul>
		<br />
		<br />
		<div style="border-top: 5px dashed;">
			<h1 style="text-align: center; font-size: 2em;">ISTRAV</h1>
		</div>
		<br />
		<br />
		<br />
	</div>
	<main class="item">
		<slot><div></div></slot>
	</main>
</div>
`

//my-layout.js
export class MyLayout extends HTMLElement {
  constructor() {
    super()
    // attach Shadow DOM to the parent element.
    // save the shadowRoot in a property because, if you create your shadow DOM in closed mode, 
    // you have no access from outside
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // clone template content nodes to the shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true))
    // assign the div content to a class variable
    this.element = shadowRoot.querySelector('div');
    const slot = this.element.querySelector('slot');
    // assign the rating star to a class variable, that the render class can duplicate them
    this.slotNode = slot.querySelector('div');
  }
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define('my-layout', MyLayout);