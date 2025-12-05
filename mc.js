/**
* replace_content.js
* IDが "main" の要素の内容を置き換えるスクリプト
*/

// 1. ページのDOM（文書オブジェクトモデル）の構築が完了した後に実行されるように設定
// ※よりモダンなブラウザでは 'DOMContentLoaded' イベントを使用するのが一般的です。
document.addEventListener('DOMContentLoaded', function() {

// 2. IDが "main" の要素を取得
const mainDiv = document.getElementById('main');

// 3. 要素が存在するか確認し、存在すれば内容を置き換え
if (mainDiv) {
// innerHTMLを使って、HTMLコンテンツを新しい内容に置き換えます
mainDiv.innerHTML = '<table border=1 width=1324><tr><td>test</td></tr></table><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p><p>test<br></p>';

// （おまけ）スタイルも変更してみる
mainDiv.style.backgroundColor = '#f0fff0';
mainDiv.style.padding = '20px';
mainDiv.style.border = '1px solid #ccc';
} else {
// デバッグ用: 要素が見つからなかった場合のメッセージ
console.error('IDが "main" の要素が見つかりませんでした。');
}
});
