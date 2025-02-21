## 全記事一覧

<a href="#" onclick="history.back(); return false;">戻る</a> 

全記事一覧です。

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

 [「なっくるすきるす」ホームに戻る]({{ site.url }}) 
