<body>
<div class="wrapper">
  <header>
    <h1 class="header">なっくるすきるす</h1>
    <p class="header"></p>

    <ul>
      
      <li><a class="buttons github" href="https://github.com/mtmt2199/mtmt2199.github.io">View On GitHub</a></li>
    </ul>

    

    
      <ul>
        <li><a class="buttons github" href="https://github.com/mtmt2199">GitHub Profile</a></li>
      </ul>
    
  </header>

  <section>
    <h2 id="なっくるすきるす">なっくるすきるす</h2>

    <p>「なっくるすきるす(Knuckle Skills)」は、Github Pagesを使った静的HTMLの個人ホームページです。<br />
    SNSやブログのハブとして活用してきます。</p>

    <p><img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat" /></p>

    <h3 id="このスペースは">このスペースは…</h3>

    <p>Githubアカウントは2014年に作っていましたが、Github Pagesを活用し始めたのは、わりと最近です。<br />
    「なっくるすきるす」は同じ2014年に開設したホームページの名前です。それ以前はFC2ブログでした。ホスティングサービスの終了後しばらく消滅していましたが、Github Pagesに復活です。</p>

    <h3 id="さてどう使っていきましょうか">さて、どう使っていきましょうか。</h3>

    <p>歌ってみたやショート動画など、チャレンジしたい分野はいろいろありますが、今はそんなことより、自己破産をマジメに進めていかないと。</p>

    <h4 id="webに書ける範囲で今やんなきゃイケナイこと">(Webに書ける範囲で)今、やんなきゃイケナイこと</h4>

    <ol>
      <li>自己破産の手続き</li>
      <li>医療控除の手続き。エクセルに仮入力は終わったけど、コレに交通費をつけて、先の手続きに進まないとイケナイ。</li>
    </ol>

    <ul>
      {% for post in site.posts %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>

    <script>
      // ブラウザの表示幅によって表示内容を変える
      var width = window.innerWidth;

      if (width > 1220) {
        var contwidth = 200;
        var data = '<p><a href="table.html">PC専用コンテンツ（PCでごらんください)</a></p>';
        if (width > 1630) {
          var contwidth = 610;
          var data = '<iframe src="table.html" width="605" height="780" frameborder="0" allowfullscreen></iframe>';
        }
        document.write('<div style="border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-bottom: 16px; width: ' + contwidth + 'px;position: fixed;top: 0; right: 0;">');
        document.write(data);
        document.write('</div>');
      }
    </script>
  
  
  </section>



<footer>
  <p><small>Hosted on <a href="https://pages.github.com">GitHub Pages</a> using the Dinky theme</small></p>
</footer>
</div>
<!--[if !IE]><script>fixScale(document);</script><![endif]-->

</body></html>
