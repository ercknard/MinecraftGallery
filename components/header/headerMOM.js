const headermomTemplate = document.createElement('template');

headermomTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation">
<div class="main-navigation">
<span>
    <img src="../images/extras/webp/Ercknard-Guren.webp">
</span>
<span>
    <ul class="navigation-list">
        <li><a class="nav-buttons" href="../../index.html">HOME</a></li>
        <li><a class="nav-buttons" href="../../gallery/">GALLERY</a></li>
        <li><a class="nav-buttons" href="../../about/">ABOUT</a></li>
        <li><a class="nav-buttons" href="../../contact/">CONTACT</a></li>
    </ul>
</span>
</div>
</header>
`;

class headermom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headermomTemplate.content);
  }
}

customElements.define('headermom-component', headermom);