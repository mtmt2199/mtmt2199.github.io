## なっくるすきるす

「なっくるすきるす(Knuckle Skills)」は、Github Pagesを使った静的HTMLの個人ホームページです。  
SNSやブログのハブとして活用してきます。

<img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat" />

### このスペースは…

Githubアカウントは2014年に作っていましたが、Github Pagesを活用し始めたのは、わりと最近です。  
「なっくるすきるす」は同じ2014年に開設したホームページの名前です。それ以前はFC2ブログでした。ホスティングサービスの終了後しばらく消滅していましたが、Github Pagesに復活です。

### WordPressテーマつくりました
初のWordPressテーマ「<a href="https://github.com/mtmt2199/simple404" target=top>simple404</a>」をPHPで作成、GitHubで公開しています。

### 超個人的リンク集

<a href="https://soundbook.web.fc2.com/link.html">超個人的リンク集はこちらです</a>

### 最新記事

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

 [→全記事一覧]({{ site.url }}/allpage.html) 
 
<script>
  // ブラウザの表示幅によって表示内容を変える
  var width = window.innerWidth;
  if (width > 1340) {
    inwidth = width - 1024;
    document.write('<div style="border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-bottom: 16px; width: ' + inwidth + 'px;position: fixed;top: 0; right: 0;">');
      if (width < 1800) {
        document.write('<iframe src="table.html" width="320" height="540" frameborder="0" scrolling="yes"></iframe>');
      } else {
        document.write('<table border=1 width=' + inwidth + '>');
        document.write('<tr><td bgcolor="#FFFFFF">');
        document.write('<iframe src="table.html" width="320" height="540" frameborder="0" scrolling="yes" style="background-color:#ffffff;"></iframe>');
        document.write('</td></tr></table>');
      }
    document.write('</div>');
  }
</script>
