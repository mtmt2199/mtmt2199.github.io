## なっくるすきるす

「なっくるすきるす(Knuckle Skills)」は、Github Pagesを使った静的HTMLの個人ホームページです。  
SNSやブログのハブとして活用してきます。

<img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat" />

### このスペースは…

Githubアカウントは2014年に作っていましたが、Github Pagesを活用し始めたのは、わりと最近です。  
「なっくるすきるす」は同じ2014年に開設したホームページの名前です。それ以前はFC2ブログでした。ホスティングサービスの終了後しばらく消滅していましたが、Github Pagesに復活です。

### さて、どう使っていきましょうか。

歌ってみたやショート動画など、チャレンジしたい分野はいろいろありますが、今はそんなことより、自己破産をマジメに進めていかないと。

#### (Webに書ける範囲で)今、やんなきゃイケナイこと

1. 自己破産の手続き。
1. 医療控除の手続き<br>
エクセルに仮入力は終わったけど、コレに交通費をつけて、先の手続きに進まないとイケナイ。

  1.  天神北→三宅本町　300円
  1.  天神北→清水町　260円
  1.  姪浜駅南口→天神北　450円
  1.  姪浜駅南口→那の津口　450円
  1.  内浜ウエストコート東→壱岐農協前　220円
  1.  壱岐農協前→薬院駅前　450円
  1.  壱岐農協前→桜坂　370円

<ul>
  {% assign reversed_posts = site.posts | reverse %}
  {% for post in reversed_posts %}
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
