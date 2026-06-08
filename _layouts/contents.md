---
# dummy
---

<!DOCTYPE html>
<html lang="ja">
<head>  
  <meta charset="UTF-8">

  <title>{{ page.title }} | Blue Sky and Oceans -- 1/144 or smaller scale vehicle models</title>

  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

  {% include googlefont.html %}
  {% include googletag.html %}
</head>
<body>
  
{% include header.html %} <!-- _includes/header.html を読み込む -->

  <main>
  <section>
  <h2>{{ page.title }}  {{ site.contents_subtitle_c }}</h2>  
  </section>

{{ content }}

  </main>

  {% include footer.html %} <!-- _includes/footer.html を読み込む -->

</body>
