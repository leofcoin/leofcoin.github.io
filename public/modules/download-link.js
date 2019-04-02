'use strict';
 class DownloadLink extends HTMLElement {

    set name(value) {
      let logo;
      if (value == 'github') logo = 'github-alt';
      else if (value == 'mac') logo = 'apple';
      else logo = value;
      this.logo.setAttribute('class', `fab fa-${logo}`);
      this.innerHTML = value;
    }

    get logo() {
      return this.shadowRoot.querySelector('i');
    }
    static get is() { return 'download-link'; }
    // attributes to observe
    static get observedAttributes() { return ['href']; }
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./../sources/fontawesome.min.css">
        <link rel="stylesheet" href="./../sources/fa-brands.min.css">
        <link rel="stylesheet" href="./../sources/fa-solid.min.css">
        <style>
          :host {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #EEE;
            padding: 10px;
            width: fit-content;
            border: 1px solid #eee;
            border-radius: 6px;
            height: 56px;
            box-sizing: border-box;
            cursor: pointer;
            min-width: 256px;
          }
          i {
            font-size: 36px;
          }
          h3 {
            margin: 0;
            font-size: 22px;
            text-transform: uppercase;
            padding-left: 8px;
          }
        </style>
        <i></i>
        <h3><slot></slot></h3>
      `;
      this.name = this.getAttribute('name') || 'github';
    }
    connectedCallback() {
      this.addEventListener('click', this._onClick);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) this[name] = newValue;
      return;
    }
   _onClick() {
    if (this.href) {
      const a = document.createElement('a');
      a.href = this.href;
      a.click();
    }
  }
}
customElements.define(DownloadLink.is, DownloadLink)
