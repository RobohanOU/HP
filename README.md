# robohan HP

# しくみ
- HTML
  * 授業でも書くアレ。文書の本文や構成はほぼここに書かれる。

- CSS
  * 見た目を整えるために、HTMLの各部分に装飾を施す。
  * CSSを直接いじるのは面倒なので、もっと書きやすい[LESS](http://less-ja.studiomohawk.com/)をコンパイルしてつくる。（後述）

- JS (javascript)
  * ただの文書に動きを与えるプログラミング言語

- Webサーバー
  * 上の３つを置いておく場所。`www.robohan.net`にある。

[Bootstrap](http://getbootstrap.com/)というフレームワークを使って作っている。
Bootstrapを使うと、簡単にある程度見た目が良いサイトを作れる。
[Start Bootstrap](http://startbootstrap.com/)ってサイトの[Creative](http://startbootstrap.com/template-overviews/creative/)っていう無料のテンプレートを元にした。


# 編集の仕方
基本的にmasterブランチで変更を加え、releaseブランチは直接いじらない。
masterブランチにコミットしたら、releaseブランチにマージするようにする。

masterには開発するときだけ必要なものなどが含まれており、webサーバーに設置するreleaseブランチはそれらが除かれている。

基本的にはindex.htmlをいじることが多いと思う。

一番最初はcloneする
```
$ git clone ssh://git@git.robohan.net:2200/website/robohan_hp.git
```

編集前にmasterにいる事を確認して、最新版をとってくる。

```
$ cd robohan_hp/ # ここに移動する
$ git checkout master  # masterブランチに切り替える
$ git pull
```

例えばindex.html変更を加えたら、

```
$ git add index.html # 変更を加えたファイルをcommit対象に加える
$ git commit -m "コメント" # コメントを付けてコミット
$ git push -u origin master # masterブランチをpush
$ git checkout release # releaseブランチに切り替える
$ git merge master # masterブランチをreleaseにマージする
$ git push -u origin release # releaseブランチをpush
```

# サーバーでの更新の仕方(デプロイ)
webという名前のLXCコンテナでwebサーバーが動いている。

```
$ ssh web.lxc.sakura.robohan.net # webサーバーのあるLXCコンテナへアクセス
$ cd /var/www/www.robohan.net/
$ git pull
```

## LESSについて
[ここ](http://less-ja.studiomohawk.com/#guide)らへんを読んで、lessのコンパイラ`lessc`をインストールして下さい。

creative.cssは直接いじらないで、creative.lessから編集して下さい。
creative.lessを編集したら以下のコマンドでコンパイルしましょう。

```
$ lessc less/creative.less > css/creative.css
```

## フォントについて
本文は基本的に[フロップデザインフォント](https://www.flopdesign.com/freefont/flopdesignfont.html)を使っています。
その他、フォントアイコンを使うために[Font Awesome](http://fontawesome.io/), LINEアイコンは[Icomoon](https://icomoon.io/app/)を使っています。
