const template = document.createElement('template');

template.innerHTML = /*html*/`
<div>
    <!--Healine-->
    <p>Rating</p>
    <!--rating-stars-->
    <div class="rating-stars">
        <div class="rating-star star-1"></div>
        <div class="rating-star star-2"></div>
        <div class="rating-star star-3"></div>
        <div class="rating-star star-4"></div>
        <div class="rating-star star-5"></div>
    </div>
</div>
`

//rating.js
export class MyRating extends HTMLElement { 
  static get observedAttributes() {
      return [ 'rating', 'max-rating' ];
  }
  
  constructor() {
    super()
    // attach Shadow DOM to the parent element.
    // save the shadowRoot in a property because, if you create your shadow DOM in closed mode, 
    // you have no access from outside
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // clone template content nodes to the shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
  
  connectedCallback() {
      console.log('connected')
      if (!this.rating) {
          // Set default value to zero
          this.rating = 0;
      }
      if (!this.maxRating || this.maxRating <= 0) {
          // Set default value to five
          this.maxRating = 5;
      }
  }
  
  get maxRating() {
      // be careful: attributes always string, if you want a number, you must parse it on your own. 
      return +this.getAttribute('max-rating');
  }
  
  set maxRating(value) {
      // if you set the property maxRating in this class, you must sync them with the attribute
      this.setAttribute('max-rating', value);
  }
  
  get rating() {
      // be careful: attributes always string, if you want a number, you must parse it by your own.
      return +this.getAttribute('rating');
  }
  
  set rating(value) {
      // if you set the property maxRating in this class, you must sync them with the attribute
      this.setAttribute('rating', value);
  }
  
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      switch(name) {
          case 'name':
              this.rating = newVal;
              break;
          case 'max-rating':
              this.maxRating = newVal;
              break;
      }
    }
  }
}

window.customElements.define('my-rating', MyRating);