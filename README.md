# 構成
### Core
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript, CSS

### Content & UI
- **Markdown Processing**:
    - react-markdown: Markdownのレンダリング
    - gray-matter: Frontmatter（メタデータ）の解析
    - rehype-unwrap-images: 画像レイアウトの最適化
- **Animation**: Framer Motion
- **Icons**: React Icons

### Build & Tooling
- **Compiler**: React Compiler (Babel plugin)
- **Linting**: ESLint


# 環境構築
以下のリンクからJavaScript実行環境であるNode.jsをインストールします。
- [Node.jsのインストール](https://nodejs.org/ja/download)

WindowsインストーラーをダウンロードしてNode.jsのインストールをしてください。
バージョンはv20.x以上であれば大丈夫です。

インストールが完了したら、HPのディレクトリをクローンします。
コマンドプロンプトで任意のディレクトリに移動後、以下のコマンドを実行してください。

```shell
git clone 
cd robohan-hp

# 依存関係のインストール
npm install

# 開発環境の起動
npm run dev
```

[http://localhost:3000](http://localhost:3000)と表示されていれば環境構築完了です。

# ディレクトリ構成
```tree
robohan-hp
├─ app
│  ├─ about
│  │  ├─ about.module.css           # Aboutページ本体のCSS
│  │  └─ page.tsx                   # Aboutページ本体
│  ├─ favicon.ico                   
│  ├─ global.css                    # 全ページに共通するCSS
│  ├─ home.module.css               # Homeページ本体のCSS
│  ├─ join
│  │  ├─ join.module.css            # Joinページ本体のCSS
│  │  └─ page.tsx                   # Joinページ本体 
│  ├─ layout.tsx                    # 全ページに共通するレイアウト
│  ├─ news
│  │  ├─ news.module.css            # Newsページの記事一覧ページのCSS
│  │  ├─ page.tsx                   # Newsページの記事一覧ページ本体
│  │  └─ [slug]
│  │     ├─ page.tsx                # Newsページの各記事本体
│  │     └─ post.module.css         # Newsページの各記事のCSS
│  ├─ page.tsx                      # Homeページ本体
│  └─ supporters
│     ├─ page.tsx                   # Supportersページ本体
│     └─ supporters.module.css      # SupportersページのCSS
├─ components                       
│  ├─ Footer.module.css             # フッターのCSS
│  ├─ Footer.tsx                    # フッター
│  ├─ Header.module.css             # ヘッダーのCSS
│  ├─ Header.tsx                    # ヘッダー
│  ├─ home                          # Homeページで使用するコンポーネント
│  ├─ hooks                         # ユーザーの操作を感知するコンポーネント
│  ├─ news                          # Newsページで使用するコンポーネント
│  ├─ ResponsiveImage.module.css    # レスポンシブ対応したImageコンポーネントのCSS
│  ├─ ResponsiveImage.tsx           # レスポンシブ対応したImageコンポーネント
│  └─ supporters                    # Supportersページで使用するコンポーネント
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ posts                            # News記事のmdファイルフォルダ
├─ public
│  ├─ favicons                      # 旧HPから引き継いだfavicon
│  └─ images              
│     ├─ about                      # Aboutページで使用する画像のフォルダ
│     ├─ home                       # Homeページで使用する画像のフォルダ
│     ├─ join                       # Joinページで使用する画像のフォルダ
│     ├─ logos                      # Robohanのロゴのフォルダ
│     ├─ news                       # Newsページで使用する画像のフォルダ
│     ├─ NoImage.png
│     └─ sponsors                   # Supportersページで使用するスポンサー画像のフォルダ
├─ README.md
└─ tsconfig.json
```

# News記事の追加
News記事の追加をしたい場合は、[こちらの記事](https://robohan.esa.io/posts/1306)を参考にしてください。

# スポンサーの追加・削除
Supportersページのスポンサーリストを変更したい場合は、[こちらの記事](https://robohan.esa.io/posts/1307)を参考にしてください。