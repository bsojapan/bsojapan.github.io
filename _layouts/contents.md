---
---
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }} | Blue Sky and Oceans -- 1/144 or smaller scale vehicle models</title>
  {% include googlefont.html %}
  <link rel="stylesheet" href="{{ '/assets/css/style_contents.css' | relative_url }}">
  {% include googletag.html %}
</head>
<body>

{% include header.html %}

<main>
  <section>
    {{ page.title }} {{ site.contents_subtitle_c }}
  </section>

  {{ content }}
</main>

{% include footer.html %}
<script src="{{ '/assets/js/section-number.js' | relative_url }}"></script>
</body>
</html>
