## なっくるすきるす

「なっくるすきるす(Knuckle Skills)」は、Github Pagesを使った静的HTMLの個人ホームページです。  
SNSやブログのハブとして活用してきます。

<img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat" />

### このスペースは…

Githubアカウントは2014年に作っていましたが、Github Pagesを活用し始めたのは、わりと最近です。  
「なっくるすきるす」は同じ2014年に開設したホームページの名前です。それ以前はFC2ブログでした。ホスティングサービスの終了後しばらく消滅していましたが、Github Pagesに復活です。

### 最新記事

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<script>
  // ブラウザの表示幅によって表示内容を変える
  var width = window.innerWidth;
  if (width > 1340) {
    document.write('<div style="border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-bottom: 16px; width: 205px;position: fixed;top: 0; right: 0;">');
    document.write(<iframe src="table.html" width="200" height="400" frameborder="0" allowfullscreen></iframe>);
    document.write('</div>');
  }
</script>
