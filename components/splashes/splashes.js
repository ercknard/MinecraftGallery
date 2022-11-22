const splashesTemplate = document.createElement('template');

splashesTemplate.innerHTML = `
<link rel="stylesheet" href="../../styles/index.css">
<div>
<span class="hover01 main-images">
<div class="gallery-pics-1">
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/chinese.html"><div class="polys"><img class="image poly" src="images/splashs/webp/chinese.webp"></div>
<span class="tooltiptext">THE CHINESE EMPIRE</span>
<div class="text"> | CHINA | </div></a></figure>
<figure class="con"><a class="con-link" href="moments/aether.html"><div class="polys"><img class="image poly" src="images/splashs/webp/eather.webp"></div>
<span class="tooltiptext">THE AETHER GULF</span>
<div class="text">| AETHER |</div></a></figure>
</div>
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/end.html"><div class="polys"><img class="image poly" src="images/splashs/webp/end.webp"></div>
<span class="tooltiptext">THE END OF DAYS</span>
<div class="text">| END |</div></a></figure>
<figure class="con"><a class="con-link" href="moments/ice.html"><div class="polys"><img class="image poly" src="images/splashs/webp/ice.webp"></div>
<span class="tooltiptext">THE WINTERLANDS</span>
<div class="text">| ICE |</div></a></figure>
</div>
</div>
</span>
</div>
<div class="space"></div>
<div>
<span class="hover01 main-images">
<div class="gallery-pics-1">
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/japanese.html"><div class="polys"><img class="image poly" src="images/splashs/webp/japanese.webp"></div>
<span class="tooltiptext">THE JAPANESE REIGN</span>
<div class="text">| JAPAN |</div></a></figure>
<figure class="con"><a class="con-link" href="moments/sand.html"><div class="polys"><img class="image poly" src="images/splashs/webp/sand.webp"></div>
<span class="tooltiptext">THE DESERTEDLAND</span>
<div class="text">| SAND |</div></a></figure>
</div>
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/ocean.html"><div class="polys"><img class="image poly" src="images/splashs/webp/water.webp"></div>
<span class="tooltiptext">THE OCEAN MONUMENT</span>
<div class="text">| OCEAN |</div></a></figure>
<figure class="con"><a class="con-link" href="moments/nether.html"><div class="polys"><img class="image poly" src="images/splashs/webp/infernal.webp"></div>
<span class="tooltiptext">THE WORLD OF FIRE</span>
<div class="text">| NETHER |</div></a></figure>
</div>
</div>
</span>
</div>
<div class="space"></div>
<div>
<span class="hover01 main-images">
<div class="gallery-pics-1">
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/central.html"><div class="polys"><img class="image poly" src="images/splashs/webp/central.webp"></div>
<span class="tooltiptext">THE CENTRAL SPAWN</span>
<div class="text">| CENTRAL |</div></a></figure>
<figure class="con"><a class="con-link" href="moments/statue.html"><div class="polys"><img class="image poly" src="images/splashs/webp/statue1.webp"></div>
<span class="tooltiptext">THE MONUMENT</span>
<div class="text">| STATUE |</div></a></figure>
</div>
<div class="gallery-pics">
<figure class="con"><a class="con-link" href="moments/base.html"><div class="polys"><img class="image poly" src="images/splashs/webp/base.webp"></div>
<span class="tooltiptext">THE BASE</span>
<div class="text">| BASE |</div></a></figure>
<figure class="con"><a class="con-link" href="moments/spawn.html"><div class="polys"><img class="image poly" src="images/splashs/webp/spawn.webp"></div>
<span class="tooltiptext">THE WORLDSPAWN</span>
<div class="text">| SPAWN |</div></a></figure>
</div>           
</div>
</div>
`;

class splashes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(splashesTemplate.content);
  }
}

customElements.define('splashes-component', splashes);