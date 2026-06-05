---
---
<!DOCTYPE html>
<head>
　{% include googletag.html %} 
　{% include googlefont.html %} 

  
<!-- 🟢 Jekyll 4推奨：relative_url フィルターを使う -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">


<title>
  {{ page.title }} | Blue Sky and Oceans -- 1/144 or smaller scale vehicle models 
</title>
</head>
<body>
　{% include header.html %} <!-- _includes/header.html を読み込む -->

  <main>
{{ content }}
  </main>

  {% include footer.html %} <!-- _includes/footer.html を読み込む -->

</body>
