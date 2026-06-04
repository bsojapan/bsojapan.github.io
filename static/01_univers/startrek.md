---
layout: contents
title: "STAR TREK"
permalink: /static/01_univers/startrek.html
image_back: "/assets/images/p_wall_univers.jpg"
---
<section>
  <h2>images</h2>

  {% capture my_tiles %}
  - img: https://images.unsplash.com/photo-1507525428034-b723cf961d3e?160pt
    url: https://www.tumblr.com/webcateyes/817666664470626304/its-a-bit-rough-around-the-edges-though?source=share
  - img: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400
    url: https://example.com/mountain
  - img: https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400
    url: https://example.com/forest
  {% endcapture %}

  {% include multitail.html data=my_tiles %}
</section>

<section>
  <h2>Over View</h2>
  <p>overview</p>
</section>

<section>
  <h2>vehicle types</h2>
  <h3>type1</h3>
  <p>111</p>
  <h3>type2</h3>
  <p>222</p>
</section>
