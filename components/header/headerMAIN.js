const headermainTemplate = document.createElement('template');

headermainTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation-1">
<div class="main-navigation-index">
<span>
    <img class="logo-pic-1" src="../../images/extras/webp/Ercknard-Guren.webp">
</span>
<span>
    <ul class="navigation-list">
        <li><a class="nav-buttons-1" href="../../index.html">HOME</a></li>
        <li><a class="nav-buttons" href="../../gallery/">GALLERY</a></li>
        <li><a class="nav-buttons" href="../../about/">ABOUT</a></li>
        <li><a class="nav-buttons" href="../../contact/">CONTACT</a></li>
    </ul>
</span>
</div>
</header>
`;

class headermain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headermainTemplate.content);
  }
}

customElements.define('headermain-component', headermain);