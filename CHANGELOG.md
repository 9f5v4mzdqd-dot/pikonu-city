# 変更履歴 (CHANGELOG)

ピコぬ市公式ホームページの変更・追加・修正の記録です。
新しい変更ほど上に追記していきます。

フォーマット:
```
## YYYY-MM-DD
### 追加 / 変更 / 修正
- ファイルパス: 内容

------------

## 2026-09-12
---
### 追加
- `about/entertainment.html`:「お楽しみエリア」ページを新設
- `data/search-index.json`:お楽しみコンテンツおよび関連ページを検索インデックスに追加

### 変更
- `about/entertainment.html`:お楽しみコンテンツの掲載順、番号、セクション構成、カードレイアウトを整理
- `about/sitemap.html`:お楽しみコンテンツの掲載順と分類を整理
- `about/fm-piconu.html`:お楽しみエリア・音楽コンテンツへの導線と掲載レイアウトを調整
- `about/piconu-freegame.html`:ゲーム置き場のレイアウト、掲載内容、パンくず表示を調整
- `about/piconu-music.html`:ページ構成、音楽コンテンツの表示、パンくずを調整
- `about/artist-piconu-city-boys.html`・`about/artist-piconu-games.html`・`about/artist-johnny-nuka.html`:プロフィールページの分類・パンくず階層を整理
- `about/piconu-city-radio.html`・`about/fukabori-radio.html`・`about/dodemoii-radio.html`:FMピコぬ番組ページのパンくずを「トップ ➡ お楽しみエリア ➡ FMピコぬ ➡ 各番組」に統一
- `js/common.js`:グローバルナビゲーションおよび関連ページのナビゲーション設定を調整
- `images/banners/banner-pickup.jpg`・`images/banners/banner-dodemoii.jpg`:バナー画像のサイズを修正
- `README.md`・`NEXT_TASKS.md`:お楽しみコンテンツの分類・運用ルールを追記

### 修正
- `about/piconu-music.html`:パンくずの階層およびFMピコぬへのリンク先を修正
- `about/fm-piconu.html`:お楽しみエリア・音楽コンテンツへの導線を修正
- `data/search-index.json`:お楽しみコンテンツのカテゴリ・登録内容を修正
- `icon_generator.html`:不要になったファイルを削除
---

## 2026-09-11
---
### 追加
- `about/artist-piconu-city-boys.html`:The PICONU CITY BOY'Sのプロフィールページを追加
- `about/artist-piconu-games.html`:PICONU GAMESのプロフィールページを追加
- `about/artist-johnny-nuka.html`:JOHNNY NUKAのプロフィールページを追加
- `images/music/PICONU_GAMES.jpg`:PICONU GAMESのプロフィール用画像を追加

### 変更
- `about/piconu-music.html`:ABOUT ARTISTセクションを追加し、3つのプロフィールページへのリンクを掲載
- `about/piconu-music.html`:ゲーム「猫と宝くじと世界経済の終焉」のアルバム情報とED曲の表記を整理
- `about/piconu-music.html`:アルバム情報に「猫と宝くじと世界経済の終焉」のED曲を追加
- `about/piconu-music.html`:音楽プレイヤーにシャッフル・リピート機能を追加
- `about/artist-piconu-city-boys.html`・`about/artist-piconu-games.html`・`about/artist-johnny-nuka.html`:プロフィールページのレイアウト、表記、文章を調整
- `about/artist-piconu-games.html`:ピコぬくんゲーム置き場へのリンクを追加
- `data/search-index.json`:プロフィール3ページを検索インデックスに追加
---

## 2026-09-10（3）
---
### 変更

* `about/piconu-music.html`:J_NUKAの画像を差し替え

* `CHANGELOG.md`:8月分および9/8・9/10の変更履歴を整理・追記

---


## 2026-09-10（2）
---
### 変更
- `about/fm-piconu.html`:本文に「PICONU MUSIC」への紹介カードを追加(画像付きのプロモーションカードデザイン)
---

## 2026-09-10（1）
---
### 追加
- `about/piconu-music.html`:「PICONU MUSIC」ページを新設。アルバムジャケットをクリックすると、専用プレイヤーモーダルでそのアルバムの曲が聴ける仕組みを実装
- `audio/piconu-music/`:アルバム「1957，Piconu City」(全21曲)、「30円のブルース」(1曲)の音源を追加
### 変更
- `about/piconu-music.html`:MUSIC ARCHIVEの3アルバムを実名(「1957，Piconu City」「『猫と宝くじと経済の終焉』EDテーマ曲」「30円のブルース」)に更新し、ジャケット画像も差し替え
- `about/piconu-music.html`:複数アルバムに対応できる構造(`albums`オブジェクト)に整理
- `about/piconu-music.html`:パンくず(ホーム›FMピコぬ›音楽コンテンツ)を追加
- `about/sitemap.html`・`data/search-index.json`:「音楽コンテンツ」を追加
### 修正
- `about/piconu-music.html`:「The Enpty Chair」の誤字を「The Empty Chair」に修正
- `about/piconu-music.html`:FMピコぬへのリンク切れ(`fm-pikonu.html`→`fm-piconu.html`)を修正
---

## 2026-09-08（6）
---
### 修正
- `game/001-elevator.html`〜`game/013-spice.html`(13ファイル):画面サイズ固定・セリフ欄固定高さ・エンディング画面の見切れ不具合を、014・015と同様の方法でまとめて修正
- `game/001-elevator.html`・`game/008-pikopiko.html`:セリフ欄のCSSが新旧2重に定義されていた不具合を解消
---

## 2026-09-08（5）
---
### 修正
- `game/014-gyoza.html`・`game/015-shio-ramen.html`:画面サイズが固定(800×600px)で、画面の高さが低い端末(スマホなど)で上下が見切れる不具合を修正。`min()`を使い、画面に収まる可変サイズに変更
- `game/014-gyoza.html`・`game/015-shio-ramen.html`:セリフ表示欄が固定高さ(180px)で、文章が長いとはみ出して見切れる不具合を修正。可変の高さ+内部スクロール対応に変更
- `game/014-gyoza.html`・`game/015-shio-ramen.html`:タイトル画面・エンディング画面の枠も、長い文章だと見切れる同種の不具合があったため、縦スクロール対応に変更
---

## 2026-09-08（4）
---
### 追加
- `game/014-gyoza.html`:現代病相談窓口記録ファイルのシナリオゲーム「餃子の話」を追加
- `game/015-shio-ramen.html`:同「塩ラーメンの話」を追加(計15本に)
### 変更
- `about/gendaibyo-soudan-game.html`:症例一覧にNo.014・No.015を追加
---

## 2026-09-08（3）
---
### 修正
- `about/fm-piconu.html`:見出し階層がH1→H3と1段飛んでいたのを、H2「配信中の番組」を追加して修正
- `facilities/index.html`:同じくH1→H3と飛んでいたのを、視覚的に隠したH2「施設一覧」を追加して修正
- `Blue-Page.html`:`<html lang="ja">`および`<head><title>`が無かったため追加(表示・内容に変更なし)
- `about/fuyoufukyu-4koma.html`:マンガのページめくり用タップ領域がキーボード操作できなかったため、`role="button" tabindex="0"`とEnter/Spaceキー対応、フォーカス時の枠線を追加
---

## 2026-09-08（2）
---
### 変更
- `facilities/nousanbutsu.html`:パンくずリストを追加(このページのみ独自デザインのため手動設置)
- `services/jumin-todoke.html`・`services/suidou.html`:引っ越し手続きと水道手続きの間に案内文とリンクを追加(相互リンク化)
---

## 2026-09-08（1）
---
### 変更
- `about/sitemap.html`:抜けていた4ページ(`about/soshiki-ichiran.html`・`facilities/kankyoka-ochiba-kijun.html`・`facilities/toshokan-zosho.html`・`services/kiroku-nuka-monshinhyo.html`)を追加
- `data/search-index.json`:抜けていた`about/mayoigo.html`を追加
- `about/sitemap.html`:抜けていた`services/suidou.html`を「くらしの情報」に追加
---

## 2026-09-04（3）
---
### 修正
- `game/imoya.html`:背景画像の縦横比を固定してレターボックス表示にすることで、画面比率によって手前が見切れる不具合を修正(PC/タブレット向け)
- `game/imoya.html`:スマホ(幅759px以下)ではレターボックスだと余白が大きくなりすぎるため、画面いっぱいに表示しつつ手前を優先する位置指定に変更
---

## 2026-09-04（2）
---
### 追加
- `game/imoya.html`:タイトル画面を新設。背景にステージ1の画像を表示し、「はじめからあそぶ」「つづきからあそぶ」「あそびかた」「ゲームおきばへ」「BGMのオン/オフ」の5ボタンを配置
- `game/imoya.html`:「あそびかた」モーダルを追加(1ページ目に導入ストーリー、2ページ目に遊び方説明のページ送り形式)
- `game/imoya.html`:操作パネルに「タイトルにもどる」ボタンを追加
### 修正
- `game/imoya.html`:あそびかたモーダルがタイトル画面の背後に隠れてしまう不具合(z-index)を修正
---

## 2026-09-04（1）
---
### 変更
- `game/imoya.html`:売上発生時の表示を見やすく修正
- `game/imoya.html`:ゲーム再開時、離れていた間の焼き芋・コーヒーの売上を「おかえりなさいですぬ」として表示する機能を追加
- `game/imoya.html`:ステージ1〜5のBGMに曲名を表示

---

## 2026-09-03
---
### 追加
- `game/imoya.html`:「ピコぬノート」を追加
- `game/imoya.html`:ピコぬノートへのポップアップ表示を追加
- `game/imoya.html`:事業をスクロール表示する機能を追加
- `game/imoya.html`:窯などのレベルアップ要素を追加
- `game/imoya.html`:ステージ3〜5を追加
- `game/imoya.html`:ステージごとの背景・BGMを追加
- `game/imoya.html`:音量スライダーを追加
- `game/imoya.html`:タイトル画面を追加
- `game/imoya.html`:タイトル画面から戻るボタンを追加
- `game/imoya.html`:遊び方を追加
### 変更
- `game/imoya.html`:スマートフォン向けのサイズ・レイアウトを調整
- `game/imoya.html`:BGMを選択できるよう変更
- `game/imoya.html`:BGMの曲名を追加
- `game/imoya.html`:遊び方をタイトル画面より前面に表示するよう変更
### 修正
- `game/imoya.html`:画像・レイアウト・サイズを調整
- `game/imoya.html`:説明文の重なりやセリフを修正
- `game/imoya.html`:不要な改行を修正
- `game/imoya.html`:パソコンでのプレイを推奨する案内を追加
---

## 2026-09-02
---
### 追加
- `game/imoya.html`:ステージ2を追加
- `game/imoya.html`:ステージ3を追加
- `game/imoya.html`:グレードアップ要素を追加
- `game/imoya.html`:コーヒー販売に関する表示・ステージ条件を追加
### 変更
- `game/imoya.html`:タイトル画面・戻るボタンを追加
- `game/imoya.html`:メニューをたたむボタンを追加
- `game/imoya.html`:画像・レイアウト・サイズを調整
- `game/imoya.html`:BGM選択機能を追加
### 修正
- `game/imoya.html`:各種表示・レイアウトを修正
- `game/imoya.html`:パスを修正
---

## 2026-09-01（2）
---
### 追加
- `pdfs/koho-nukapiko/koho-nukapiko-202609.pdf`:広報ぬかピコ「令和8年9月号」を追加
### 変更
- `about/koho-archive.html`:一覧に令和8年9月号(特集:食欲の秋、ピコぬネギ ほか)を追加
### 修正
- `about/koho-archive.html`:9月号追加時に紛れ込んだ余分な`<tr>`タグを削除
---

## 2026-09-01（1）
---
### 追加
- `images/icons/icon-chiiki-junkan.png`:「地域資源再利用事業」のアイコン画像を追加
### 変更
- `index.html`:トップページの混雑状況セクションに「ピコぬくん」を追加(専用のステータス一覧からランダム表示)。セクション見出しを「リアルタイム・ピコぬ市 混雑・状況（体感値）」に変更
- `facilities/kurashi-junkan-ka.html`:「地域資源再利用事業」の項目にアイコンを追加(他のpickup項目と同じ形式)
---

## 2026-08-11〜08-31 まで(まとめ記録)

### 追加(主なもの)
- FMピコぬ第3番組「どうでもいいラジオ」(不要不急保存課提供)
- ピコぬ市交通局の拡張:交通資料室・開業記録・昭和38年時刻表・駅に関する資料・路線案内
- `facilities/kominkan.html`:ピコぬ市中央公民館(市民講座・サークル活動募集を含む)
- `facilities/toshokan-zosho.html`:市立図書館「蔵書案内」
- 歴史クラスタ:未整理資料室・ピコぬ市年表・市史編纂事業について・行政記録 第一号・当ホームページの運営履歴
- `about/fuyoufukyu-4koma.html`:不要不急な4コマ漫画(pdf.jsによるページめくりビューア)
- `about/hibussitsu-tokusanhin.html`:非物品系特産品および無形文化財等一覧
- `about/fuyoufukyu-uranai.html`:今日のあなたにおすすめの不要不急な時間の過ごし方ジェネレーター
- `facilities/chiiki-shigen-saiiyou.html`ほか:暮らしと循環推進課「地域資源再利用事業」
- `facilities/kankyoka-ochiba-kijun.html`:環境課「落ち葉発生時における連絡基準(叩き台)」
- キロクぬかクリニック:医師紹介・研究資料を新規作成、クリニック本体をfacilities配下へ移設・ダークデザイン(Zen Old Mincho)に統一
- `about/soshiki-ichiran.html`・`facilities/renketsu-suishin-ka.html`・`privacy.html`・`terms.html`・`english.html`を新規作成
- `about/mayoigo.html`:「何を探しに来たのかわからない方へ」(ランダム案内ボタン付き)
- `about/neko-seimu.html`:本日の猫政務ジェネレーター
- `facilities/syokudo.html`:市役所食堂ページ
- 現代病相談窓口記録ファイル:症例No.003〜013を追加(計13本に)。あわせて`about/gendaibyo-soudan-game.html`をハブページとして新設
- `facilities/pikonu-negi.html`:特産品「ピコぬネギ」紹介ページ
- `game/negi-game.html`:ミニゲーム「ネギ盛り限界チャレンジ」
- `about/piconu-freesozai.html`:ピコぬくん素材置き場
- `about/piconu-freegame.html`:ピコぬくんゲーム置き場(バナーリンク集)
- `game/piconu-match3-game.html`:新作ミニゲーム「ピコぬくんのマッチ3」
- `game/tsunekazu-game.html`:ミニゲーム「恒一をさがせ！」
- `about/piconu-quiz-chukyu.html`:ピコぬ市検定(中級)
- `Blue-Page.html`:私的ページ「青いページ」(リンクなし・NOTEアカウントへの外部リンクあり)
- `images/freesozai/bg-001〜003.jpg`:ゲーム置き場・素材置き場・ネギゲームの背景パターン画像
- お知らせ記事を多数追加(8/14〜8/28分、図書館だより・交通資料室・中央公民館・組織一覧・連結技術推進課・ネギ関連・ゲーム置き場等)

### 変更(主なもの)
- キロクぬかクリニック関連ページの相互リンク・フォント・アクセントカラーを統一
- 環境課・暮らしと循環推進課ファミリーのサイドバー構成を「関連情報」に一本化、前後ナビゲーションボタンを削除
- `about/faq.html`:本文中に関連ページへのリンクを多数追加
- `about/sitemap.html`・`data/search-index.json`:上記の新規ページ反映、抜けていたページの追加(数十件規模)を継続的に実施
- `about/`・`facilities/`配下:パンくずリストの階層抜け・リンク切れ・HTML崩れ(`<tr>`重複、閉じタグ抜け等)を随時点検・修正
- `piconu-kun-game.html` → `piconu-kun-escapegame.html` にファイル名変更(参照8ファイルを一括更新)
- `game/piconu-match3-game.html`:キャラクターをSVGデザイン化、配色を「ファンシー＆Y2Kポップ」に変更、スマホ対応の不具合修正
- `README.md`:全面的に作り替え(ディレクトリ構成・運用ルールの現状反映)
- `js/common.js`:グローバルナビ・共通フッターバナーの追加、検索キャッシュ回避対応

### 修正(主なもの)
- `game/008-pikopiko.html`:ゲーム本体のJS欠落を修正
- `news/`配下:個別記事24本に混入していた不要タグを削除
- `about/cable-tv.html`:「シロタ株」→「ピコタ株」表記修正(コンプライアンス対応)
- サイト内に残っていた表記ゆれ・リンク切れ・タイプミスを継続的に修正

## 2026-08-10 まで(まとめ記録)

### 追加(主なもの)
- `facilities/jissen-cho.html`:不要不急保存課「不要不急実践帳」(認定行為20種のカード表示)
- `about/fm-piconu.html`:FMピコぬのハブページ。「ピックアップ! ピコぬ市ラジオ」(第1〜6回)・「深掘りラジオ」(第1〜7回)の2番組を実装、音声・台本・サムネイル一式
- `about/gendaibyo-uranai.html`:「今日のラッキー現代病占い」(現代病データベース41件からランダム表示)
- `about/piconu-chat.html`:「ピコぬくんとおはなし」(選択肢分岐型チャットボット)
- `about/gendaibyo-db.html` / `about/gendaibyo-db-admin.html`:現代病データベースをGitHub API方式のCMSに全面書き換え、管理画面・一括インポート機能を新規追加
- `facilities/kiroku-nuka-clinic-archive.html` / `-admin.html`:外来シリーズ書庫の公開ページ・管理画面を新規作成(カテゴリ機能・月別アーカイブ・一括インポート42本含む)
- `facilities/hisho-kouhou-ka.html`:秘書広報課ページ、`about/koho-archive.html`:広報ぬかピコ デジタルアーカイブ
- `facilities/kanko-ka.html`:観光課ページ
- `about/piconu-quiz.html`:ピコぬ市検定(初級)ミニゲーム
- `about/rekishi.html`・`about/gyousei-kouzou.html`・`about/telephone.html`・`about/gijiroku-rinji-2026-3.html`:歴史・行政構造図・電話番号一覧・臨時会議事録の各ページ
- `facilities/seikatsu-kyosei-ka.html`・`facilities/kurashi-junkan-ka.html`とサブページ7つ(市民庭づくり助成・緑化推進・生き物共生型庭園・ネオ堆肥ボックス・雨水循環対策・Pioカード・ぬか資源係):生活共生課・暮らしと循環推進課ファミリーを新規作成

### 変更(主なもの)
- `index.html`:PR動画セクションのリニューアル、お問い合わせセクションの新設・移動、共通バナー群のスマホ表示改善
- `js/common.js`:グローバルナビに「FMピコぬ」「ピコぬくんとチャット」を追加、共通バナー群を随時追加
- `pdfs/`フォルダを新設しPDF類を整理、`images/sections/`に単発画像を整理
- `facilities/fukushika.html`:「福祉課」単独ページから生活共生課内「困りごと相談室」へ再編(URLは維持)
- 各課の窓口情報(電話番号・受付時間)の統一書式化、前後ナビゲーションボタンの`btn-outline`→`btn`統一

### 修正(主なもの)
- `about/aisatsu.html`:市長写真のリンク切れ修正
- `about/cable-tv.html`:コンプライアンス上の懸念から「シロタ株」表記を「ピコタ株」に修正
- サイト内に残っていた「福祉課」表記を「困りごと相談室」「生活共生課」に統一