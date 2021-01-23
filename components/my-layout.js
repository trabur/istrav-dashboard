const template = document.createElement('template');

template.innerHTML = /*html*/`
<nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Logo</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
</nav>
<main>
  <slot>
    <div></div>
  </slot>
</main>
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