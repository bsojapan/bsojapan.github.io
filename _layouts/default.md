---
---
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N3V61VNGL5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N3V61VNGL5');
</script>
  
<!-- 🟢 Jekyll 4推奨：relative_url フィルターを使う -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
<!-- にGoogle Fontsから読み込んでおく必要 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap" rel="stylesheet">

<title>{{ title }}</title> | Blue Sky and Oceans -- 1/144 or smaller scale vehicle models 
</head>
<body>
　{% include header.html %} <!-- _includes/header.html を読み込む -->

  <main>
{{ content }}
  </main>

  {% include footer.html %} <!-- _includes/footer.html を読み込む -->

</body>
