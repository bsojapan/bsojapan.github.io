---
layout: default
title: "List of Blog Articles"
image_back: "https://bsojapan.github.io/assets/images/p_wall_sky.jpg"
---

# {{ page.title }}

## title2

<ul>
{% for post in site.posts %}
  <li>
    <span>{{ post.date | date: "%Y-%m-%d" }}</span> --
    article: <a href="{{ post.url }}">{{ post.title }}</a>
    (category: {{ post.category }})
  </li>
{% endfor %}
</ul>

This is index.html for bloglist
