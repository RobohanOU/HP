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
基本的にdevelop/masterブランチで変更を加え、masterブランチは直接いじらない。

develop/masterブランチにcommit/mergeしたら、masterブランチにマージするようにする。

基本的にはindex.htmlをいじることが多いと思う。

一番最初はcloneする
```
$ git clone https://github.com/RobohanOU/HP.git
```

編集前にmasterにいる事を確認して、最新版をとってくる。

```
$ cd robohan_hp/ # ここに移動する
$ git checkout develop/master  # develop/masterブランチに切り替える
$ git pull
```

例えばindex.html変更を加えたら、

```
$ git add index.html # 変更を加えたファイルをcommit対象に加える
$ git commit -m "コメント" # コメントを付けてコミット
$ git push -u origin develop/master # masterブランチをpush
```

## 画像について
ポートフォリオの画像(タイル状に並んでるやつ)を変更することが多いでしょう。
最初に表示されるのは画質の悪いサムネイルで、クリックすると画質の良い元の画像が出るようになっています。

- `img/portfolio/1.jpg`が元画像。
- `img/portfolip/1_thumb.jpg`がサムネイルです。

1. 画像を選ぶ
   * Google Photoかどこかから画像をとってきましょう。

2. トリミング・拡大縮小
   * 縦横サイズは全ての画像であわせた方が見た目が揃っていいです。今は元画像が`1500x1125`で、サムネイルは3分の1の`500x375`で作っています。

3. 圧縮
   * webに載せる前に圧縮します。[TinyPNG](https://tinypng.com/)でPNGもJPEGも見た目変わらずかなり圧縮できるので圧縮しましょう。

4. index.htmlの修正
   * 以前の画像を置き換える場合は名前を以前のと同じのにすれば画像も変わるはずです。
   * 画像のキャプションが3つあるので、index.htmlを書き換えます。

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
