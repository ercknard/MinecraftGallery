const fabTemplate = document.createElement('template');

fabTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<link rel="stylesheet" href="../../styles/fab.css">
<div class="floating-container">
<div class="floating-button"><img class="image-selection-fab" src="../../images/logos/webp/TheLogor.webp"></div>
<div class="element-container">           
  <a href="../../moments/aether.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/chisseled-quartz.webp"></a>
  </span>
  <a href="../../moments/chinese.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/shroomlight.webp"></a>
  </span>
  <a href="../../moments/end.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/purpur-block.webp"></a>
  </span>
  <a href="../../moments/ice.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/diamond-block.webp"></a>
  </span> 
  <a href="../../moments/japanese.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/pink-wool.webp"></a>
  </span>
  <a href="../../moments/nether.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/chiseled-blackstone.webp"></a>
  </span>
  <a href="../../moments/ocean.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/sea-lantern.webp"></a>
  </span>
  <a href="../../moments/sand.html"> <span class="float-element tooltip-left">
    <img class="image-selection-fab" src="../../images/logos/webp/chiseled-sandstone.webp"></a>
  </span>
</div>
</div>
`;

class fab extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(fabTemplate.content);
  }
}

customElements.define('fab-component', fab);