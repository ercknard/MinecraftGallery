const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<footer class="foot-works">
    <h3> Ercknard Guren I | WEB Minecraft Gallery. Oct. 2022 </h3>
    <h5> All materials used are owned by Minecraft and Cryptechcraft.</h5>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);