const loadersTemplate = document.createElement('template');

loadersTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">

    <img src="../../images/extras/webp/TheLogo.webp">
    <hr class="hr-animated wrapper-width">
    <h3 class="wrapper-h3"> The site is being loaded. Please wait... </h3>
`;

class loaders extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(loadersTemplate.content);
  }
}

customElements.define('loaders-component', loaders);