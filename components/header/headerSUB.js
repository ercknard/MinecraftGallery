const headergalleryTemplate = document.createElement('template');

headergalleryTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation">
<div class="main-navigation">
<span>
    <img src="../../images/extras/webp/Ercknard-Guren.webp">
</span>
<span>
    <ul class="navigation-list">
        <li><a class="nav-buttons" href="../../index.html">HOME</a></li>
        <li><a class="nav-buttons-1" href="../../gallery/">GALLERY</a></li>
        <li><a class="nav-buttons" href="../../about/">ABOUT</a></li>
        <li><a class="nav-buttons" href="../../contact/">CONTACT</a></li>
    </ul>
</span>
</div>
</header>
`;

class headergallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headergalleryTemplate.content);
  }
}

customElements.define('headergallery-component', headergallery);

const headeraboutTemplate = document.createElement('template');

headeraboutTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation">
<div class="main-navigation">
<span>
    <img src="../../images/extras/webp/Ercknard-Guren.webp">
</span>
<span>
    <ul class="navigation-list">
        <li><a class="nav-buttons" href="../../index.html">HOME</a></li>
        <li><a class="nav-buttons" href="../../gallery/">GALLERY</a></li>
        <li><a class="nav-buttons-1" href="../../about/">ABOUT</a></li>
        <li><a class="nav-buttons" href="../../contact/">CONTACT</a></li>
    </ul>
</span>
</div>
</header>
`;

class headerabout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headeraboutTemplate.content);
  }
}

customElements.define('headerabout-component', headerabout);

const headercontactTemplate = document.createElement('template');

headercontactTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<header class="navigation">
<div class="main-navigation">
<span>
    <img src="../../images/extras/webp/Ercknard-Guren.webp">
</span>
<span>
    <ul class="navigation-list">
        <li><a class="nav-buttons" href="../../index.html">HOME</a></li>
        <li><a class="nav-buttons" href="../../gallery/">GALLERY</a></li>
        <li><a class="nav-buttons" href="../../about/">ABOUT</a></li>
        <li><a class="nav-buttons-1" href="../../contact/">CONTACT</a></li>
    </ul>
</span>
</div>
</header>
`;

class headercontact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headercontactTemplate.content);
  }
}

customElements.define('headercontact-component', headercontact);