const headerhamTemplate = document.createElement('template');

headerhamTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation-1">
<span class="checkbox-container">
            <input class="checkbox-trigger" type="checkbox"  />
            <span class="menu-content">
                <ul>
                    <img class="logo-pic-1" src="../../images/extras/webp/Ercknard-Guren.webp">
                    <li><a class="nav-buttons-1" href="../../index.html">HOME</a></li>
                    <li><a class="nav-buttons" href="../../gallery/">GALLERY</a></li>
                    <li><a class="nav-buttons" href="../../about/">ABOUT</a></li>
                    <li><a class="nav-buttons" href="../../contact/">CONTACT</a></li>
                </ul>
              <span class="hamburger-menu"></span>
            </span>
          </span>
        </header>
`;

class headerham extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerhamTemplate.content);
  }
}

customElements.define('headerham-component', headerham);