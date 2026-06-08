---
---
<!DOCTYPE html>
<head>  
  <!-- 🟢 Jekyll 4推奨：relative_url フィルターを使う -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

  {% include googletag.html %} <!-- _includes/footer.html を読み込む -->
  {% include googlefont.html %} <!-- _includes/footer.html を読み込む -->
  

<title>
  {{ page.title }} | Blue Sky and Oceans -- 1/144 or smaller scale vehicle models 
</title>
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
