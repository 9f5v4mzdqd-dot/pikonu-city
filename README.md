# ピコぬ市公式ホームページ

架空自治体「ピコぬ市」の公式サイトです。GitHub Pagesでの公開を想定した静的サイトです。
「行政が本気で運営している架空自治体サイト」という空気感を大切にしています。

公開URL: `https://9f5v4mzdqd-dot.github.io/pikonu-city/`

## ディレクトリ構成

```
pikonu-city/
├── index.html                トップページ(お知らせ・サービス・施設・PR動画・キリ番など)
├── 404.html                  存在しないURLにアクセスした際のページ(GitHub Pagesが自動表示)
├── favicon.svg / favicon.ico / apple-touch-icon.png   ファビコン(市章)
├── css/style.css             共通スタイルシート
├── js/common.js              共通ヘッダー/フッター/アクセシビリティ機能
├── data/
│   └── piconu-diary.json     ピコぬ君業務日誌のデータ(下記参照)
├── news/                     お知らせ
│   ├── index.html            お知らせ一覧
│   └── news-YYYYMMDD-NN.html お知らせ詳細(日付+連番で命名)
├── services/                 くらしの情報(住民票・戸籍・ごみ収集・現代病相談 等)
├── facilities/                施設案内(市役所・クリニック・博物館・図書館・商工会 等)
├── about/                     市政情報(条例集・審議会・FAQ・観光案内・業務日誌 等)
├── images/                    画像(facilities/ museum/ kanko/ cable-tv/ 等サブフォルダあり)
└── 各種PDF・動画(ルート直下)  広報誌・点数表・チラシ・PR動画など
```

## 共通ヘッダー/フッターの仕組み

ヘッダー・フッター・グローバルナビ・パンくずリストは `js/common.js` が
JavaScriptで動的に生成します。各ページのHTMLには本文(`<main id="main">`)のみを
記述し、`</body>` の直前で以下のように呼び出します。

```html
<script>
  window.PAGE_META = {
    nav: "news",                              // グローバルナビの現在地(home/news/services/facilities/about)
    breadcrumb: [{ label: "お知らせ", href: "index.html" }, { label: "ページタイトル" }]
  };
</script>
<script src="../js/common.js"></script>
```

`js/common.js` は自身の `<script src>` からサイトルートまでの相対パスを自動計算するため、
ディレクトリの深さに関わらずページ側で相対パスを調整する必要はありません。

新規ページの `<head>` には、ファビコン3点(`favicon.svg` `favicon.ico` `apple-touch-icon.png`)
へのリンクも忘れずに含めます(既存ページの `<head>` をコピーするのが確実です)。

## 新しいページを追加する手順

1. 該当ディレクトリ(`news/` `services/` `facilities/` `about/` など、必要なら新設)に
   HTMLファイルを作成する。
2. 既存ページ(例: `services/juminhyo.html`)をコピーし、`<title>` `<meta description>`
   `<h1>` 本文、`window.PAGE_META` を書き換える。
3. 一覧ページ(`news/index.html`、`facilities/index.html`、トップページの該当セクション、
   `js/common.js` のフッターリンク、`about/sitemap.html`)に必要に応じてリンクを追加する。
4. 内部リンクの整合性は、単純なスクリプトでチェックできます(各HTML内の
   `href`/`src` が実ファイルとして存在するかを再帰的に検証)。

## デザイントークン(css/style.css 冒頭の `:root`)

- 基調色: 白(`--color-bg`) + 青系(`--color-primary` 等)
- ヘッダー/フッターは濃紺(`--color-primary-dark`)
- アクセシビリティ: 文字サイズ切替(小/中/大)、高コントラストモードを標準搭載
- アニメーションは最小限(ページトップボタンのフェード、PR動画再生ボタンなど)

## 実装済みの主なコンテンツ

- **お知らせ**: ワクチン案内・助成金・広報誌・市議会・点数表・職員採用 等(`news/`)
- **くらしの情報**: 住民票・戸籍・ごみ収集・現代病相談・各種申請(`services/`)
- **施設案内**(`facilities/`、写真付き): 市役所・キロクぬかクリニック・ぬかピコ民芸博物館
  (デジタルアーカイブ/ミュージアムショップ含む)・時間効率支援課・市立図書館・ピコぬ市商工会
- **条例集**(`about/jorei*.html`): 制定済み5本+審議中1本、全文掲載
- **審議会・附属機関一覧**(`about/shingikai.html`): 各条例に対応する審議会・委員会
- **現代病データベース**(`about/gendaibyo-db.html`): 外来シリーズ由来の症例40件超、
  クライアントサイドJS検索付き
- **市長のごあいさつ / 市の概要 / ぬかばな・ピコぬどり紹介 / FAQ / 観光案内 /
  ケーブルテレビ番組表 / 職員採用情報 / サイトマップ**(`about/`)
- **キリ番カウンター**(トップページ): 外部の無料カウントAPI(countapi.mileshilliard.com)
  を利用したアクセス数表示。`about/kiriban.html` に申告制度の案内あり
- **ピコぬ君業務日誌**(`about/piconu-diary.html`): 下記「業務日誌システム」参照
- **PR動画**(トップページ): ボタン押下で `piconu-city-pr.mp4` を再生
- **各種PDF**(ルート直下): 広報ぬかピコ、現代人診療報酬点数表、図書館だより、
  半日お散歩コースのチラシ、商店街だより

## ピコぬ君業務日誌システム(`data/piconu-diary.json`)

サーバーを持たない静的サイトのため、GitHub REST API をブラウザから直接呼び出す方式で
簡易CMSを実現しています。

- **公開ページ**: `about/piconu-diary.html` — `data/piconu-diary.json` を `fetch` で読み込み、
  日付降順に一覧表示するだけの静的な読み取り専用ページ。
- **管理フォーム**: `about/piconu-diary-admin.html` — サイトのナビゲーションには
  リンクしていない(直接URLを知っている人のみアクセス可能)。GitHubの
  Personal Access Token(該当リポジトリの Contents: Read and write 権限のみを付与)を
  入力すると、ブラウザから直接 `data/piconu-diary.json` を書き換えて投稿・編集・削除できる。
  各記事には `id`(UUID)を持たせて識別している。
- データファイルの1件は `{ "id": "...", "date": "YYYY-MM-DD", "title": "...", "body": "..." }`。

新しい「業務日誌のようなCMS」を別コンテンツ用に増やす場合も、同じパターン
(データファイル + 読み取り専用の公開ページ + 非リンクの管理フォーム)を踏襲すると良い。

## GitHub上での編集ワークフロー(運用メモ)

このリポジトリは基本的に GitHub の Web UI(またはブラウザ内エディタ github.dev)から
直接編集して運用している。

- 既存ファイルの中身を書き換える: 対象ファイルを開いて鉛筆アイコン(Edit this file)
- 新規ファイルを追加する: 対象フォルダを開いた状態で「Add file」→「Create new file」
  (テキストファイル)または「Upload files」(画像・PDF・動画などのバイナリ)
- 新しいフォルダごと追加したい場合は、`Create new file` でファイル名に
  `フォルダ名/ファイル名` の形でパスを含めて入力すると、フォルダが自動生成される
- 複数ファイルをまたぐ変更は github.dev(リポジトリ画面で `.` キー)を使うと、
  検索・一括置換やSource Controlでのまとめてコミットがしやすい

## 今後の拡張候補

- 市議会の議事録・会議録一覧ページ
- パブリックコメント募集ページ(審議中の条例向け)
- 統計資料の独立ページ(人口推移、ぬかピコ連結シェア推移 等)
- 商工会 加盟8店舗の個別ページ
- ぬかピコどりの鳴き声(音声ファイル)