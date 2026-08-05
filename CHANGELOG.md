# 変更履歴 (CHANGELOG)

ピコぬ市公式ホームページの変更・追加・修正の記録です。
新しい変更ほど上に追記していきます。

フォーマット:
```
## YYYY-MM-DD
### 追加 / 変更 / 修正
- ファイルパス: 内容


## 2026-08-06
---
### 追加

- サイト共通バナー(js/common.js)に「ピコぬくんとおはなし」(about/piconu-chat.html)を追加(images/banners/banner-piconu-chat.jpg、300x120)
---


## 2026-08-03
---
### 変更
- `about/gaiyou.html`・`about/piconu-kun.html`・`about/nukabana.html`・`about/piconu-dori.html`・`about/gendaibyo-db.html`・`about/aisatsu.html`・`about/piconu-diary.html`・`services/index.html`・`about/shisei-joho.html`・`about/piconu-chat.html`・`index.html`・`css/style.css`・`js/common.js`:images直下にあった単発画像13枚(hero-tsunagu・pr-bg・gaiyou・piconu-kun・piconu-diary・gendaibyo-db・mayor-photo・nukabana・piconu-dori・piconu-chat・piconu-icon・services-index・shisei-joho)を`images/sections/`にまとめ、参照パスを一括修正
- `pdfs/`フォルダを新設し、リポジトリ直下に散らばっていたPDF8本を整理:`pdfs/koho-nukapiko/`(広報ぬかピコ2本)・`pdfs/shotengai-dayori/`(商店街だより)・`pdfs/toshokan-dayori/`(図書館だより)にシリーズ別サブフォルダ、単発の2本(お散歩コースチラシ・現代人診療報酬点数表)は`pdfs/`直下に配置。参照している9ファイルのリンクパスも修正

## 2026-08-02(2)
---
### 追加
- `about/piconu-chat.html`:本文冒頭にヘッダー画像(images/piconu-chat.jpg)を追加
- `about/gaiyou.html`・`about/shisei-joho.html`・`services/index.html`:各ページ冒頭にヘッダー画像を追加(images/gaiyou.jpg・images/shisei-joho.jpg・images/services-index.jpg)
- `about/cable-tv.html`:新番組「がんばれ! ピコぬくん」(月〜金17:00〜17:25、アニメ形式のご当地ヒーロー番組)を週間番組表・番組紹介の両方に追加。画像はimages/cable-tv/ganbare-piconukun.jpg
- `about/cable-tv.html`:「がんばれ! ピコぬくん」テーマ曲「自動ドアの前で」を追加。audio/ganbare-piconukun-theme.mp3を`<audio>`タグで再生可能にし、歌詞は`<details>`要素で折りたたみ表示

### 変更
- `about/cable-tv.html`:コンプライアンス上の懸念から「シロタ株」の表記を「ピコタ株」に修正(2箇所)

## 2026-08-02

### 追加
- `about/piconu-chat.html`:「ピコぬくんとおはなし」ページを新規作成。選択肢分岐型のなんちゃってチャットボット(施設案内・現代病・交通局・ピコぬくん自身・検定・脱出ゲーム・グッズなどへの導線を用意)
- グローバルナビ(`js/common.js`)の一番右に「ピコぬくんとチャット」を追加(全ページ共通ヘッダーに反映)
- `images/piconu-icon.jpg`:チャット吹き出し用の専用アイコン画像を追加
- `images/piconu-chat.jpg`:チャットページのヘッダー画像を追加
- `images/gendaibyo-db.jpg`・`images/facilities/kiroku-nuka-clinic-archive.jpg`・`images/piconu-diary.jpg`:現代病データベース・外来シリーズ書庫・業務日誌の各ページにヘッダー画像を追加
- `images/banners/banner-diary.jpg`・`images/banners/banner-gendaibyo-db.jpg`:サイト共通バナー群にピコぬくん業務日誌・現代病データベースのバナーを追加

### 変更
- `index.html`:「PR動画」セクションを2カラムに変更(動画ボックスを半分幅にし、横に現代病データベース・外来シリーズ書庫・業務日誌へのピックアップリンク3件を配置)、背景画像を差し替え、スマホ幅でのbackground-position調整
- `about/sitemap.html`:「外来シリーズ書庫」へのリンクの記載漏れを追加


## 2026-08-01(2)

### 変更
- `about/gendaibyo-db.html`:静的HTML(43行の手打ちデータ)からGitHub API方式のCMSに変更。表を6列(No./日付/外来名/病名/症状概要/noteリンク)に拡張し、`data/gendaibyo-db.json`を読み込んで動的に描画・検索するよう全面書き換え

### 追加
- `about/gendaibyo-db-admin.html`:現代病データベースの投稿フォーム(管理者用)を新規作成。業務日誌・外来シリーズ書庫と同じGitHub API方式で投稿・編集・削除に対応
- `data/gendaibyo-db.json`:現代病データベースのデータファイルを新規作成
- 一括インポート機能:スプレッドシートから抽出した41件を一度に投稿できるボタンを管理画面に追加(重複タイトルは自動スキップ)


## 2026-08-01

### 追加
- `facilities/kiroku-nuka-clinic-archive.html`:外来シリーズ書庫の公開ページを新規作成(業務日誌と同じ方式でJSONを読み込み一覧表示)
- `facilities/kiroku-nuka-clinic-archive-admin.html`:外来シリーズ書庫の投稿フォーム(管理者用)を新規作成、GitHub API経由で投稿・編集・削除に対応
- `data/gairai-archive.json`:外来シリーズ書庫のデータファイルを新規作成
- 一括インポート機能:管理画面に、原稿「診断名、現代人。少しおかしくて、少しかなしい35の寓話集」から抽出した外来35本+「〜の話」エッセイ7本(計42本)を一度に投稿できるボタンを追加(重複タイトルは自動スキップ)
- カテゴリ機能:各記事に「外来シリーズ」「○○の話」のカテゴリを付与し、公開ページに絞り込みタブと各記事へのカテゴリラベル表示を追加、管理画面フォームにもカテゴリ選択欄を追加

### 変更
- `facilities/kiroku-nuka-clinic.html`:本文とサイドバー「関連情報」に「外来シリーズ 書庫」へのリンクを追加
- `facilities/kiroku-nuka-clinic-archive.html`・`about/piconu-diary.html`:サイドバーに「月別アーカイブ」を追加(基準日は登録(コミット)日、投稿・編集・一括インポート時に自動付与)
- `about/gendaibyo-db-admin.html`・`about/piconu-diary-admin.html`:一括インポート・登録日補完ボタンにカテゴリ・登録日(added_at)関連の処理を追加



## 2026-07-31

### 追加
- `news/news-20260801-01.html`:広報ぬかピコ令和八年八月号(特集号)の掲載お知らせページを新規作成
- `koho-nukapiko-202608.pdf`:広報ぬかピコ令和八年八月号PDF(ルート直下に配置)
- `facilities/hisho-kouhou-ka.html`:秘書広報課ページを新規作成(業務内容、コラム「記録を残すという仕事」、基本情報)
- `images/sections/kouhou-archive.jpg`:秘書広報課ページのヘッダー画像(アーカイブ室)
- `about/koho-archive.html`:広報ぬかピコ デジタルアーカイブページを新規作成(令和8年度、7月号・8月号の2件を一覧表示)

### 変更
- `index.html`:トップページのお知らせ欄に8月号掲載のお知らせを追加(最下段の古い項目を送り出し)
- `news/index.html`:お知らせ一覧の先頭に8月号掲載のお知らせを追加
- `about/telephone.html`:部署別電話番号一覧に秘書広報課を追加(ぬぬ-ぬかピコ-5555)
- `facilities/shiyakusho-floor.html`:3階フロア一覧に秘書広報課を追加
- `about/sitemap.html`:施設案内リストに秘書広報課、市の概要リストに広報ぬかピコ デジタルアーカイブを追加

---

### 追加
- `about/shisei-joho.html`:サービスカードに「ピコぬ市生き物図鑑」を追加
- `images/icons/icon-ikimono.png`:生き物図鑑カード用アイコンを新規作成
- `about/sitemap.html`:市政情報リストに「ピコぬ市生き物図鑑」、施設案内リストに「観光課」を追加
- `facilities/kanko-ka.html`:観光課ページを新規作成(お知らせカード、記録・技術・自然を巡る、半日お散歩コース案内、観光案内文、お問い合わせ)
- `images/facilities/kanko-ka.jpg`:観光課ページのヘッダー画像
- `images/kanko/piconu-kun-ekimae.jpg`:`about/kanko.html`「9:30 ピコぬ中央駅」用の画像

### 変更
- `facilities/shiyakusho-floor.html`:3階フロア一覧・主な手続き表に観光課を追加
- `about/telephone.html`:部署別電話番号一覧に観光課を追加(ぬぬ-ぬかピコ-5535)
- `about/gaiyou.html`:「市の文化・観光」リストに観光課へのリンクを追加
- `about/kanko.html`:「9:30 ピコぬ中央駅」の直後にピコぬくんの画像を追加

---

## 2026-07-30

### 追加
- `images/banners/banner-quiz.jpg`:ピコぬ市検定(初級)のバナー画像(既存バナーと同じ300×120px)
- `images/facilities/ikimono-kyosei-teien.jpg` `neo-taihi-box.jpg` `ryokka-suishin.jpg`:各ページ本文冒頭に写真を追加(`facility-photo`クラス、既存の写真付きページと同じ形式)
- `js/common.js`:全ページ共通のバナーストリップに検定バナーを追加(脱出ゲームの直後、`about/piconu-quiz.html`へリンク)

### 追加
- `about/piconu-quiz.html`:ピコぬ市検定(初級・全10問クイズ)のミニゲームを更新(黒板+角帽のピコぬくんイラスト、Web Audio APIによるレトロ8bit風の効果音を追加)
- `about/piconu-kun.html`:「ミニゲーム」欄を、脱出ゲーム・検定(初級)の2種類のバナー(インラインSVG)を横並びで表示する形に変更、サイドバーのリンクも2本に分割

### 変更
- `index.html`:「お問い合わせ」セクションを、ページ最下部(キリ番カウンター手前)から「暮らしの場面から探す」の直後へ移動(中身は変更なし)

### 追加
- `about/rekishi.html` へのリンクを `about/shisei-joho.html`(市政情報トップのサービスカード)と `about/sitemap.html` に追加
- `images/icons/icon-rekishi.png` を新規作成(市政情報トップのカード用アイコン)
- `about/sitemap.html`:未掲載だった以下を追加
  - 施設案内:市役所のフロア案内、市民課、会計課、記録政策課、環境課、暮らしと循環推進課(市民庭づくり助成制度・緑化推進制度・生き物共生型庭園認定制度・ネオ堆肥ボックス事業・雨水循環対策・Pioカード・ぬか資源係の7サブページ含む)、時間効率支援課、生活共生課(困りごと相談室含む)、都市計画課、不要不急保存課、議会事務局
  - 市政情報:2026年第3回臨時会 会議録、ピコぬ市 行政構造図、部署別電話番号一覧

## 2026-07-29 まで(まとめ記録)

### 追加
- `about/rekishi.html`:ピコぬ市の歴史ページ(他アカウントのClaudeが作成・コミット)
- `about/gyousei-kouzou.html`:ピコぬ市 行政構造図(六角形の連結図、インラインSVG)
- `about/telephone.html`:部署別電話番号一覧ページ
- `about/gijiroku-rinji-2026-3.html`:2026年第3回臨時会 会議録(蜂の巣の取扱いについて、継続審議)
- `facilities/seikatsu-kyosei-ka.html`:生活共生課(旧 高齢福祉課)ページ新規作成
- `facilities/kurashi-junkan-ka.html`:暮らしと循環推進課 課トップページ新規作成
- `facilities/niwa-zukuri-josei.html`:市民庭づくり助成制度
- `facilities/ryokka-suishin.html`:緑化推進制度
- `facilities/ikimono-kyosei-teien.html`:生き物共生型庭園認定制度
- `facilities/neo-taihi-box.html`:ネオ堆肥ボックス事業
- `facilities/usui-junkan-taisaku.html`:雨水循環対策
- `facilities/pio-card.html`:Pioカード
- `facilities/nuka.html`:ぬか資源係
- `images/icons/icon-denwa.png` `icon-faq.png` `icon-tegami.png`:お問い合わせセクション用アイコン
- `images/icons/icon-niwa-zukuri.png` ほか暮らしと循環推進課の制度アイコン一式
- `images/facilities/kurashi-junkan-ka.jpg` `usui-junkan-taisaku.jpg` `seikatsu-kyosei-ka.jpg` `pio-card.jpg`:各ページの写真

### 変更
- `index.html`:キリ番カウンター手前に「お問い合わせ」セクション(部署別電話番号・よくある質問・市長への手紙)を追加
- `facilities/fukushika.html`:「福祉課」単独ページから、生活共生課内の一室「困りごと相談室」へ再編(タイトル・パンくず・本文・サイドバー変更、URLは維持)
- `facilities/shiyakusho.html` / `facilities/shiyakusho-floor.html`:フロア案内・組織一覧を、上記の新設課・再編にあわせて更新
- `facilities/kankyoka.html` / `shiminka.html` / `kaikeika.html` / `gikai.html` / `services/gendaibyo-sodan.html` / `fukushika.html` / `toshikeikaku.html`:窓口の電話番号・受付時間を追加または統一書式(窓口/受付時間/電話)に修正
- `about/gijiroku.html`:議事録一覧に臨時会を追加

### 修正
- サイト内に残っていた「福祉課」表記を「困りごと相談室」または「生活共生課」に統一(`fuyoufukyuhozonka.html` `kiroku-seisaku-ka.html` `about/telephone.html` ほか)
- 各ページの前後ナビゲーションボタンを `btn-outline` から `btn`(濃い青地・白字)に統一