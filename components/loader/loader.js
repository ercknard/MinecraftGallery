const loaderTemplate = document.createElement('template');

loaderTemplate.innerHTML = `
    <link rel="stylesheet" href="../../styles/index.css">
    <div class="wrapper">
    <div class="loader">
        <img src="../../images/extras/webp/TheLogo.webp">
        <hr class="hr-animated wrapper-width">
        <h3 class="wrapper-h3"> The site is being loaded. Please wait... </h3>
    </div>
    </div>
    <script src="../../scripts/loader.js"></script>`

class loader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(loaderTemplate.content);
  }
}

customElements.define('loader-component', loader);