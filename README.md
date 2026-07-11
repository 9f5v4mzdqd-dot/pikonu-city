# ピコぬ市公式ホームページ

架空自治体「ピコぬ市」の公式サイトです。GitHub Pagesでの公開を想定した静的サイトです。

## ディレクトリ構成

```
piconu-city/
├── index.html               トップページ
├── css/style.css            共通スタイルシート
├── js/common.js             共通ヘッダー/フッター/アクセシビリティ機能
├── news/                    お知らせ
│   ├── index.html           お知らせ一覧
│   └── news-YYYYMMDD-NN.html  お知らせ詳細(日付+連番で命名)
├── services/                くらしの情報(住民票・戸籍・ごみ収集 等)
├── facilities/               施設案内(クリニック・博物館 等)
├── about/                    市政情報(市の概要 等)
└── images/                   画像(未使用時は空でも可)
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

## 新しいページを追加する手順(100ページ以上への拡張)

1. 該当ディレクトリ(`news/` `services/` `facilities/` `about/` など、必要なら新設)に
   HTMLファイルを作成する。
2. 既存ページ(例: `services/juminhyo.html`)をコピーし、`<title>` `<meta description>`
   `<h1>` 本文、`window.PAGE_META` を書き換える。
3. 一覧ページ(`news/index.html` や トップページの該当セクションなど)にリンクを追加する。
4. 内部リンクの整合性は、単純なスクリプトでチェックできます(例: 各HTML内の
   `href`/`src` が実ファイルとして存在するかを再帰的に検証)。

## デザイントークン(css/style.css 冒頭の `:root`)

- 基調色: 白(`--color-bg`) + 青系(`--color-primary` 等)
- ヘッダー/フッターは濃紺(`--color-primary-dark`)
- アクセシビリティ: 文字サイズ切替(小/中/大)、高コントラストモードを標準搭載
- アニメーションは最小限(ページトップボタンのフェードのみ)

## 今後の拡張予定(仕様書より)

市役所組織図、条例集、市議会、広報ぬかピコのバックナンバー、統計資料、
PDFダウンロード、ケーブルテレビ、観光案内、現代病データベース、
博物館デジタルアーカイブ ―― いずれも `about/` `news/` `facilities/` 配下に
同様のパターンで追加していくことを想定しています。
