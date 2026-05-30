---
---
<head>
  <!-- 🟢 Jekyll 4推奨：relative_url フィルターを使う -->
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
<!-- 事前にGoogle FontsからGreat Vibesを読み込んでおく必要があります -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap" rel="stylesheet">
</head>

<body>
{% include header.html %} <!-- _includes/header.html を読み込む -->

  
  <main>
{{ content }}
  </main>

  {% include footer.html %} <!-- _includes/footer.html を読み込む -->

</body>
