# 変更履歴 (CHANGELOG)

ピコぬ市公式ホームページの変更・追加・修正の記録です。
新しい変更ほど上に追記していきます。

フォーマット:
```
## YYYY-MM-DD
### 追加 / 変更 / 修正
- ファイルパス: 内容

-----------

## 2026-09-25（2）
---
### 変更
- `facilities/kiroku-nuka-clinic.html`・`facilities/kiroku-nuka-clinic-director.html`・`facilities/kiroku-nuka-clinic-kenkyu.html`・`facilities/shinryo-kamoku.html`・`facilities/gendaibyo-db.html`・`services/kiroku-nuka-monshinhyo.html`:キロクぬかクリニック関連6ページを、共通ヘッダー・パンくず・共通フッター・共通サイドバー・2カラムレイアウトを使わない独立サイト仕様に変更。クリニック家族ページ間の専用ナビゲーションを新設。ダーク背景・ミントグリーン・M PLUS 1 Code等の独自デザインは維持
- `facilities/kiroku-nuka-clinic.html`:マップ(SVG)を追加。枠線・サイズ・中央寄せ・右端の線消え等を調整
- `data/gairai-archive.json`:外来シリーズ書庫に新規2作品(【創作ショートショート】「さねのこうじ 恒一」別バージョン・ブラックホールとカニカマ)を追加
- `images/facilities/kiroku-nuka-clinic.jpg`・`images/facilities/shiyakusho.jpg`:画像を差し替え
---

## 2026-09-25（1）
---
### 追加
- `facilities/shiyakusho-floor.html`:1階〜5階それぞれにSVGによるフロアマップ(フロアマップジェネレーターで作成)を追加。各課へのリンク付き
- `facilities/toshokan.html`:「図書館の建物について」のフロアマップ(SVG)にクリックで拡大表示する機能(ライトボックス)を追加
- `about/cable-tv.html`:「週間番組表」をSVGによる番組表に置き換え。番組名クリックで「番組紹介」内の該当する説明までスクロール・ハイライトする機能を追加

### 変更
- `facilities/shiyakusho-floor.html`:各階セクション(`floor-card`)の間に余白を追加
- `about/cable-tv.html`:従来のHTML表(`info-table`)による週間番組表を削除
---
## 2026-09-24（2）
---
### 追加
- `facilities/shiyakusho-parking.html`:市役所「駐車場・駐輪場のご案内」ページを新設。利用時間・収容台数・注意事項、敷地内配置図(SVGマップ)を掲載
- `facilities/koutsukyoku-bicycle.html`:交通局「放置自転車の撤去・返還手続きのご案内」ページを新設。撤去について、保管場所、返還手続きに必要なもの、よくあるご質問、保管所へのアクセス、問い合わせ先を掲載

### 変更
- `facilities/shiyakusho-floor.html`:敷地内配置図としてSVGマップを追加。議会事務局へのリンクを追加。セクション間の余白を調整。2〜5階の「入り口」表記を削除
- `facilities/shiyakusho.html`:所在地セクションに「アクセス」欄(駐車場・駐輪場のご案内へのリンク)を追加。関連情報・フロアマップのリード文を追加
- `facilities/gikai.html`:議事録へのリンクを追加。末尾の文章を削除
- `facilities/fukushika.html`:文章とボタン画像を変更
- `facilities/koutsukyoku.html`:「放置自転車の撤去・返還手続きのご案内」への導線を追加
- `facilities/shiyakusho-parking.html`:放置自転車ページへのリンクを追加
- `images/facilities/seikatsu-kyosei-ka.jpg`・`images/facilities/fukushika.jpg`・`images/facilities/fukushika-button.jpg`:画像を差し替え
- `about/sitemap.html`・`data/search-index.json`:「駐車場・駐輪場のご案内」「放置自転車の撤去・返還手続きのご案内」の2ページを追加
---

## 2026-09-24（1）
---
### 変更
- `facilities/fuyoufukyuhozonka.html`:「不要不急実践帳」「不要不急な4コマ漫画」「非物品系特産品一覧」「今日のあなたにおすすめの不要不急な時間の過ごし方」の4コンテンツを、個別の見出し+リンクから、暮らしと循環推進課と同じカード形式(`.pickup-list`)にまとめて整理。本文に出ていなかった「今日のあなたにおすすめの不要不急な時間の過ごし方」も追加
- `facilities/shiyakusho-floor.html`:各階の課名を、縦並びリンクからタイル状のカード(`.dept-grid`)に変更。階の表示順を5階→1階から1階→5階に変更
- `facilities/shiyakusho-floor.html`:「主な手続き」の一覧を1階→5階の順に並び替え、掲載されていなかった課(記録政策課・暮らしと循環推進課・秘書広報課・都市計画課・連結技術推進課・公式グッズ販売窓口・市役所食堂・議会事務局)の手続きを追加。「住民票・戸籍」「住所変更・各種届出」の2行を1行に統合
---

## 2026-09-23（4）
---
### 変更
- `facilities/hisho-kouhou-ka.html`:デジタルアーカイブの説明文を「過去の広報ぬかピコや市政資料を整理・保存し〜」から「過去に発行した広報ぬかピコを〜」に修正
- `facilities/kurashi-junkan-ka.html`:サイドバー「関連情報」のごみ収集リンクの表記を「ごみ収集（記録ごみ）」に変更、「施設案内トップ」の並び順を末尾に整理

### 削除
- `services/gomi.html`:「黒い塊」についての参考散文詩(掲載例)とその注記を削除
- `facilities/nukapiko-museum.html`:建物(旧寺院本堂を改修)についての説明文を削除
---
## 2026-09-23（3）
---
### 追加
- `facilities/jikan-shiyou-soudan.html`:時間効率支援課「時間の使い方相談」ページを新設(よくある相談10問)
- `facilities/kiroku-seisaku-ka-nokosumono.html`:記録政策課「記録政策課が残すもの」ハブページを新設。市史編纂室がまとめた5資料(ピコぬ市の歴史・年表・市史編纂事業について・行政記録第一号・未整理資料室)への案内リンクと一言説明を掲載

### 変更
- `facilities/jikan-koritsu-shien-ka.html`:「時間の使い方相談」への案内リンクを本文・関連情報に追加
- `facilities/kiroku-seisaku-ka.html`:「記録政策課が残すもの」への案内リンクを本文に追加。関連情報にも掲載し、「記録・資料」「関連情報」の2ブロックに整理
- `facilities/kiroku-seisaku-ka.html`:主な業務の「広報ぬかピコの編集・発行」を「広報ぬかピコの保管・記録」に修正(編集・発行は秘書広報課の管轄のため)
- `about/koho-archive.html`:バックナンバーの保管・閲覧窓口の案内文を「秘書広報課」から「記録政策課」に修正。関連情報に記録政策課へのリンクを追加
- `images/facilities/nukapiko-museum.jpg`:画像を差し替え
- `data/gairai-archive.json`:既存作品数点(蜂の巣の話・ラーメンの話・梅雨明けの話・七夕の話・ピコピコの話・コーヒーの話・ラーメンの話②)の内容を編集
- `about/sitemap.html`・`data/search-index.json`:「時間の使い方相談」「記録政策課が残すもの」の2ページを追加

### 修正
- `facilities/kominkan.html`:表デザイン変更の作業時に、誤って`kominkan-boshu.html`の内容で上書きされていたものを、正しい中央公民館ページの内容に復元
- `facilities/kominkan-boshu.html`:上記の誤操作により反映されていなかった、市民講座・サークル活動の表の改良(列分け・スマホ幅でのカード表示・横スクロール対応)を正しく反映
---

## 2026-09-23（2）
---
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:デザインを「キロクぬかクリニック」仕様から「市立図書館」(`toshokan.html`)仕様に統一。`js/common.js`・`css/style.css`を使わないスタンドアロン構成に変更し、配色・フォント・ボックス装飾をtoshokan.htmlに合わせた
- `facilities/kiroku-nuka-clinic-archive.html`:`<title>`・meta descriptionをクリニックの付属ページという表現から、市立図書館が収蔵する書庫という説明に変更
- `facilities/kiroku-nuka-clinic-archive.html`:パンくずを「施設案内 ➡ 市立図書館 ➡ 外来シリーズ 書庫」の4階層に変更
- `facilities/kiroku-nuka-clinic-archive.html`:サイドバー「関連情報」をクリニック系リンク多数(医師紹介・研究資料・問診表・おじさん漫談・グッズ等)から、市立図書館・蔵書案内・キロクぬかクリニックの3件に整理

※`gairai-archive.json`の読み込み、カテゴリー絞り込み、月別アーカイブ、作品の開閉表示、noteリンク等のJS機能・作品データに変更なし
---

## 2026-09-23（1）
---
### 追加
- `facilities/toshokan.html`:「外来シリーズ書庫について」セクションを新設。ページ内メニュー・サイドバー「このページの内容」にも項目を追加

### 変更
- `facilities/kominkan-boshu.html`:「市民講座」「サークル活動」の表を、項目を1セルに詰め込む形式から列で分けた表形式に変更。スマホ幅ではカード表示に切り替わるよう対応。表がはみ出さないよう横スクロール対応も追加
- `facilities/kiroku-nuka-clinic-archive.html`:掲載内容が外来シリーズに限らず随筆・短編等を含む文書全般であることから、分類をキロクぬかクリニック配下から市立図書館配下に変更(パンくず・サイドバー「関連情報」を更新)
- `facilities/toshokan.html`:サイドバー「関連情報」に外来シリーズ書庫へのリンクを追加
- `about/sitemap.html`:「外来シリーズ 書庫」の掲載階層を、キロクぬかクリニックの子から市立図書館の子に移動

### 修正
- `images/facilities/kominkan-bosyu.jpg`:公民館募集ページのチラシ画像のリンク切れを修正
---

---
## 2026-09-22（3）
---
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:`gairai-archive.json`の読み込みにキャッシュ回避用のタイムスタンプ付与(`?t=Date.now()`)を追加。関連情報リンクの重複(「診療科目一覧」が2件あったもの)を削除

### 修正
- `data/gendaibyo-db.json`:NOTE記事へのリンク誤りを15件修正
- `about/gendaibyo-uranai.html`:`gendaibyo-db.json`の読み込みにキャッシュ回避用のタイムスタンプ付与(`?t=Date.now()`)を追加
---

## 2026-09-22（2）
---
### 追加
- `facilities/seikatsu-kenkyu-report.html`:ピコぬ市生活研究所「2026年度研究報告」ページを新設。折りたたみ形式(`<details>`)で、追加していける構成に。「台風の日のやり過ごし方」「焼きそばをおいしく作るには」「靴下はなぜ片方だけなくなるのか」の3件を掲載
- `facilities/seikatsu-kenkyu-faq.html`:ピコぬ市生活研究所「よくある質問（FAQ）」ページを新設(11問)。ページ末尾にお問い合わせ先を掲載

### 変更
- `facilities/seikatsu-kenkyu.html`:「2026年度研究報告」「よくある質問（FAQ）」への案内リンクを本文・関連情報に追加
- `facilities/seikatsu-kenkyu-report.html`:「焼きそばをおいしく作るには」の報告に、キロクぬかクリニック外来シリーズ書庫・おじさん漫談との関連についての一文を追加
- `about/sitemap.html`・`data/search-index.json`:「2026年度研究報告」「よくある質問（FAQ）」の2ページを追加

### 修正
- `facilities/pp-postal-stamp.html`:サイドバー(このページの内容・関連情報)周辺のdivタグの数が合っておらずレイアウトが崩れていた不具合を修正
---

## 2026-09-22（1）
---
### 追加
- `facilities/kominkan-boshu.html`:「令和8年度 市民講座・サークル活動 参加者募集」ページを新設。チラシ画像のクリック拡大機能を追加
- `facilities/kominkan-mandan.html`:サークル活動「おじさん漫談」の詳細ページを新設。外来シリーズ書庫・現代病相談窓口記録ファイルに登場するおじさんとの関連について言及

### 変更
- `facilities/kominkan.html`:イントロ文を追加、不要な囲み・表を整理。「市民講座・サークル活動 参加者募集」「おじさん漫談」への関連情報リンクを追加
- `facilities/kiroku-nuka-clinic-archive.html`:「おじさん漫談」との関連について一言追加、関連情報にリンクを追加
- `about/gendaibyo-soudan-game.html`:「おじさん漫談」との関連について一言追加、関連情報にリンクを追加
- `about/sitemap.html`・`data/search-index.json`:「市民講座・サークル活動 参加者募集」「おじさん漫談」の2ページを追加
---

## 2026-09-21
---
### 追加
- `facilities/pp-postal-river-letter.html`:リバーレター「便」ページを新設(のちに名称・表示・関連情報を整理)
- `facilities/seikatsu-kenkyu.html`:生活研究所ページを新設
- `news/news-20260913-01.html`・`news-20260916-01.html`・`news-20260917-01.html`・`news-20260917-02.html`:9/13〜9/17分のお知らせを追加(9/18分は追加後に削除)
- `pdfs/toshokan-dayori/toshokan-dayori-202609.pdf`:図書館だより9月号を追加

### 変更
- `facilities/pp-postal-river-letter.html`:誤字修正、表示崩れ対策CSSの追加、不要なリンク・関連情報の削除、お客様の声の追加、文章の整理
- `facilities/pp-postal-group.html`:リバーレター便への案内・リンクを追加
- `facilities/pp-postal-faq.html`・`facilities/pp-postal-stamp.html`・`facilities/pp-postal-yubin-hagaki.html`・`facilities/shoten.html`:イントロ文を追加
- `facilities/shoten.html`:「このページの内容」を追加するレイアウト変更
- `facilities/toshokan.html`:イントロ文を追加、図書館だより9月号を反映
- `facilities/toshokan-zosho.html`:市ゆかりの著者刊行物を追加
- `facilities/seikatsu-kenkyu.html`:掲載画像を削除しページ内容を修正、本文を一部加筆

### 修正
- `facilities/toshokan.html`・`facilities/toshokan-zosho.html`・`facilities/pp-postal-yubin-hagaki.html`・`facilities/shoten.html`:レイアウト崩れを修正
---

## 2026-09-20
---
### 変更
- `facilities/goods.html`:公式グッズページに、SUZURI利用規約についての注記、グッズ紹介のグリッド表示(`.goods-grid`)を追加。関連情報に市役所へのリンクを追加、不要なコードを整理
- `facilities/kikakuten.html`・`facilities/museum-archive.html`・`facilities/museum-shop.html`・`facilities/nukapiko-museum.html`:ぬかピコ民芸博物館ファミリー4ページの配色を統一。`kikakuten.html`に「開館時間・料金」、`museum-archive.html`に「お問い合わせ」セクションを追加
- `images/facilities/kikakuten.jpg`・`images/facilities/museum-archive.jpg`・`images/banners/banner-suzuri.jpg`:各ページの画像を差し替え

### 修正
- `facilities/kikakuten.html`・`facilities/museum-archive.html`・`facilities/nukapiko-museum.html`:背景のドット柄を無地に変更
- `facilities/museum-archive.html`:リンク切れ・軽微な誤りを修正
---

## 2026-09-19（2）
---
### 変更
- `facilities/nukapiko-museum.html`:■セクション形式のデザインにリニューアル
- `facilities/koutsukyoku.html`・`facilities/koutsukyoku-route.html`・`facilities/koutsukyoku-shiryoshitsu.html`・`facilities/koutsukyoku-stations.html`・`facilities/koutsukyoku-timetable-1963.html`・`facilities/koutsukyoku-opening.html`・`facilities/renketsu.html`:トップ画像下に導入文を追加
- `facilities/pp-postal-stamp.html`・`facilities/pp-postal-yubin-hagaki.html`:共通の「■お客様相談室」セクションを追加
- `images/facilities/nukapiko-museum.jpg`:博物館トップ画像を差し替え
---
------------
## 2026-09-19（1）
---
### 変更
- `facilities/koutsukyoku.html`・`facilities/koutsukyoku-route.html`・`facilities/koutsukyoku-shiryoshitsu.html`・`facilities/koutsukyoku-timetable-1963.html`・`facilities/koutsukyoku-opening.html`・`facilities/koutsukyoku-stations.html`:ピコぬ市交通局とその関連ページ一式を、PP郵政グループと同じ■セクション形式のデザインにリニューアル。`koutsukyoku.html`に新規セクション「歩いて巡る街と、鉄道」、`koutsukyoku-route.html`に路線図画像を追加
- `facilities/toshokan.html`・`facilities/toshokan-zosho.html`:市立図書館本体・蔵書案内ページを同じく■セクション形式にリニューアル。`toshokan.html`に新規セクション「図書館の建物について」を追加、`toshokan-zosho.html`にはトップ画像と紹介文を追加
- `facilities/kominkan.html`:ピコぬ市中央公民館ページを■セクション形式にリニューアル。新規セクション「ピコぬ市中央公民館とは」を追加、ヘッダーロゴをピコぬ市章ロゴ(`piconu-city-logo001.jpg`)に変更
- `facilities/renketsu.html`:「連結技術について」ページを■セクション形式にリニューアル。冒頭に市のテーマを表すセクション「目立たない場所こそ、全体を支えている。」を追加
- `images/facilities/shop/ptb-logo001.jpg`・`images/facilities/koutsukyoku-route-rosenzu.jpg`・`images/facilities/shop/koutsukyoku-route001.jpg`・`images/facilities/logo/piconu-city-logo001.jpg`:上記リニューアルに伴う各種画像を追加

### 修正
- `facilities/koutsukyoku.html`・`facilities/koutsukyoku-route.html`・`facilities/koutsukyoku-shiryoshitsu.html`・`facilities/koutsukyoku-timetable-1963.html`・`facilities/renketsu.html`:リニューアルに伴う表記ゆれ・パンくず・ロゴ抜け・info-box内画像サイズなどを随時修正
---

## 2026-09-18（2）
---
### 変更
- `about/sitemap.html`・`data/search-index.json`:「PPピコぬ郵政グループ」子ページ3件(郵便・はがき・荷物/切手、はがきの通信販売/よくあるご質問)へのリンク・掲載を追加
- `about/telephone.html`:部署別電話番号一覧に「ピコぬ市商工会」「ピコぬ市郵政グループ(PP)代表」を追加
---

## 2026-09-18（1）
---
### 追加
- `facilities/pp-postal-yubin-hagaki.html`:「郵便・はがき・荷物」ページを新設(PPピコぬ郵政グループの子ページ)。お手紙・はがき・荷物の発送/切手・はがきの販売/郵便物についてのご相談の3セクションを掲載
- `facilities/pp-postal-faq.html`:「よくあるご質問(FAQ)」ページを新設(PPピコぬ郵政グループの子ページ)。発送・お届け/切手・はがき/窓口・その他のQ&Aと、共通の「■お客様相談室」を掲載
- `images/facilities/shop/pp-postal-yubin-hagaki001.jpg`・`pp-postal-faq.jpg`:上記2ページのメイン画像を追加

### 変更
- `facilities/pp-postal-stamp.html`:ページ名・見出し・サイドバーの文言を「切手、はがきの通信販売」に統一

### 修正
- `facilities/pp-postal-stamp.html`:トップ画像に横幅の指定(max-width)を追加。原寸表示で本文の幅いっぱいに広がっていた不具合を修正
---

## 2026-09-17（2）
---
### 追加
- `facilities/pp-postal-group.html`:「PPピコぬ郵政グループ」ページを新設。市内郵便局共通の案内ハブとして、について/お知らせ/手紙・はがき・荷物/切手・はがきの販売/ご利用案内/手紙を書きましょう/訪問サービス/店舗情報の8セクションを掲載
- `facilities/pp-postal-stamp.html`:「切手、はがきの通信販売」ページを新設。PP郵政グループ限定切手シート(全11種)の商品一覧、画像タップでの拡大表示(ライトボックス)機能を実装
- `images/facilities/shop/`:PPロゴ(`pp-logo001.jpg`)・メイン画像(`pp-postal-main.jpg`)・切手商品画像各種(`pp-stamp-*.jpg`、11種)を追加
- `pdfs/shotengai-dayori/shotengai-dayori-vol1.2.pdf`:商店街だより vol.1.2を追加

### 変更
- `facilities/shokokai.html`・`facilities/shoten.html`:「商店街だより」のリンク・お知らせ欄をvol.1.2版に更新
- `facilities/index.html`・`about/sitemap.html`・`data/search-index.json`:「PPピコぬ郵政グループ」ページへのリンク・掲載を追加。あわせて`about/sitemap.html`に掲載漏れだった加盟店10店舗分のリンクもまとめて追加
- `facilities/kirokumachi-post.html`:関連リンクに「PPピコぬ郵政グループ」を追加
- `facilities/kirokumachi-curry.html`・`facilities/kissa-yamato.html`・`facilities/yaohachi.html`:ヘッダーロゴを記録町商店街共通ロゴ(`shotengai-logo.jpg`)に統一(八百八はテキストの看板表示から画像ロゴ表示に変更)
---
---
## 2026-09-17（1）
---
### 追加
- `facilities/kodomonokuni.html`:「子どもの国 文房具店」の個別ページを新設、加盟店紹介にリンク付きで追加

### 変更
- `data/search-index.json`:八百八・記録町カリー食堂・記録町郵便局・子どもの国 文房具店・喫茶大和・おもちゃのハッピー・ピコぬベーカリー・ひより雑貨店・和菓子処 百年堂・音楽酒場とまり木を検索インデックスに追加
- `facilities/shoten.html`:「⑩和菓子処 百年堂」の見出しに「お店のホームページを見る➡」リンクを追加
- `facilities/hiyori-zakka.html`・`facilities/hyakunendo.html`・`facilities/piconu-bakery.html`・`facilities/kirokumachi-post.html`・`facilities/shoten.html`:八百八・子どもの国・喫茶大和・ピコぬベーカリー・ひより雑貨店・百年堂・記録町郵便局の電話番号を語呂合わせ入りの表記に変更
- `facilities/omocha-happy.html`・`facilities/shoten.html`:おもちゃのハッピーの電話番号を「ぬぬ-ぬかピコ-0106(レトロ)」に変更
---

## 2026-09-16
---
### 追加
- `facilities/tomarigi.html`:「音楽酒場とまり木」の個別ページを新設、加盟店紹介に追加
- `facilities/hyakunendo.html`:「和菓子処 百年堂」の個別ページを新設、加盟店紹介に追加
- `facilities/piconu-bakery.html`:「ピコぬベーカリー」の個別ページを新設、加盟店紹介に追加
- `facilities/kirokumachi-post.html`:「記録町郵便局」(旧名称:ピコぬ郵便局)の個別ページを新設、加盟店紹介にリンクを追加
- `facilities/omocha-happy.html`:「おもちゃのハッピー」の個別ページを新設、加盟店紹介に追加
- `images/facilities/shokokai-illust.jpg`:商工会事務局のイラスト画像を追加
- `images/facilities/shop/omocha-happy001.jpg`・`omocha-happy002.jpg`:おもちゃのハッピーの店舗画像を追加

### 変更
- `facilities/shoten.html`:「⑪音楽酒場とまり木」の「新着」タグとリンクの表示順を入れ替え
- `facilities/tomarigi.html`:背景をストライプから無地に変更
- `facilities/tomarigi.html`:関連情報にJONNY NUKAのプロフィールページへのリンクを追加
- `facilities/hiyori-zakka.html`:背景デザインを変更
- `facilities/shoten.html`:全体の背景をストライプから無地に変更
- `facilities/shoten.html`:「⑥商工会事務局」に紹介文・営業時間・定休日・イラスト画像・ホームページリンクを追加
- `facilities/shoten.html`:「⑥商工会事務局」の店頭写真をコメントアウトに変更(イラストのみ表示に)
- `facilities/shoten.html`:「⑨ピコぬベーカリー」にリンクを追加
- `facilities/shoten.html`:郵便局の名称を「ピコぬ郵便局」から「記録町郵便局」に変更

### 修正
- `facilities/shoten.html`:①〜⑪のカードの`<article>`入れ子崩れを修正(⑦おもちゃのハッピーが枠からはみ出ていた不具合)
- `facilities/hyakunendo.html`:店舗画像のパスを`images/facilities/shop/`配下に修正
- `facilities/tomarigi.html`:店舗画像のパスを修正
- `images/facilities/shop/omocha-happy002.jpg`:ファイル名のスペルミス(omotya→omocya→omocha)を段階的に修正
- `facilities/shoten.html`:百年堂の電話番号表記を修正
---

## 2026-09-15（3）
---
### 追加
- `facilities/hiyori-zakka.html`:「ひより雑貨店」の個別ページを新設、加盟店紹介にリンクを追加
- `data/search-index.json`:記録町カリー食堂・八百八・喫茶大和を検索インデックスに追加

### 変更
- `facilities/kissa-yamato.html`:メニュー表記を一部変更(「看板」→「一番人気」、「コロンビア」→「ブラジル」)
- `facilities/kissa-yamato.html`:見出し・パンくず・フッターから店舗番号(⑤)の表記を削除

### 修正
- `facilities/kirokumachi-curry.html`:イラスト画像のパス(`kirokucho-curry-illust.jpg`→`kirokumachi-curry-illust.jpg`)を修正
- `facilities/shoten.html`:「⑨ひより雑貨店」のリンクが空になっていた不具合を修正
- `images/facilities/shop/hiyori-zakka-001.jpg`:店舗画像を2回差し替え
---

## 2026-09-15（2）
---
### 追加
- `facilities/shoten.html`:加盟店紹介に「⑥商工会事務局」のカードを追加(所在地・電話のみ掲載、紹介文・営業時間・定休日は追って追加予定)

### 変更
- `facilities/shoten.html`:加盟店の掲載順を並べ替え、各カードの見出しに①〜⑪の番号を追加
- `facilities/shoten.html`:カード左のライン配色を「新着」判定ではなく、奇数=グリーン・偶数=オレンジの交互パターンに変更
---


## 2026-09-15（1）
---
### 変更
- `facilities/shoten.html`:加盟店マップ画像(`shotengai-map.jpg`)に、白背景+グリーン枠+ドロップシャドウのスタイルを追加

## 2026-09-14（2）
---
### 追加
- `images/banners/banner-shotengai.jpg`:「記録町商店街 加盟店紹介」へのバナーボタン画像を追加

### 変更
- `facilities/shokokai.html`:配色(carrot/tangerine/off white/pear green/brown)・見出し・表・お知らせ枠・サイドバー構成を試作コードに基づき刷新
- `facilities/shokokai.html`:フォントを「MS Pゴシック」「Osaka」に統一
- `facilities/shokokai.html`:「加盟店紹介(8店舗)はこちら」のテキストリンクを、バナー画像ボタン(`banner-shotengai.jpg`)に差し替え、店舗数表記を8→10に修正
- `facilities/shokokai.html`:`js/common.js`への依存をなくし、グローバルヘッダー/パンくず/フッターを自前実装の独立型ページに変更(配色はpear-green系を維持)
- `facilities/shokokai.html`:「お問い合わせ」セクションを追加
- `facilities/shokokai.html`:お問い合わせ文言の先頭に「※」を追加
- `facilities/shokokai.html`:「商店街だより」セクション内にあった加盟店紹介バナーを分離し、新セクション「記録町商店街 加盟店紹介」として独立
- `facilities/shokokai.html`:パンくずの下にページ内ジャンプボタン(商工会について・商店街だより・加盟店紹介・お問い合わせ)を追加
- `facilities/shokokai.html`:ジャンプボタンの配色を調整(背景`#A9BE8B`、ホバー時`#739F3D`、文字`#FCFDFE`、枠線`#EE693F`)

---

## 2026-09-14（1）
---
### 追加
- `facilities/shoten.html`:平成レトロ風デザインへ全面刷新(既存10店舗のデータは維持したまま新デザインに移行)
- `images/facilities/shoten.jpg`:お知らせ欄上部に掲載する写真を追加
- `images/facilities/shotengai-logo.jpg`:記録町商店街のロゴをヘッダーに追加
- `images/facilities/kissa-yamato-illust.jpg`・`yaohachi-illust.jpg`・`kodomonokuni-illust.jpg`・`hyakunendo-illust.jpg`・`hiyori-illust.jpg`・`piconu-bakery-illust.jpg`・`piconu-post-illust.jpg`・`happy-toys-illust.jpg`・`kirokucho-curry-illust.jpg`・`tomarigi-illust.jpg`:各店舗紹介欄のイラスト画像を追加

### 変更
- `facilities/shoten.html`:フォントを素材置き場と同じ「MS Pゴシック」「Osaka」に統一
- `facilities/shoten.html`:全体配色をオレンジ・グリーン系に変更
- `facilities/shoten.html`:右上の丸いスタンプ(「商工会」の印)を削除
- `facilities/shoten.html`:各店舗の情報表の幅を縮小し、隣にイラスト画像用スペース(縦横比3:2)を新設
- `facilities/shoten.html`:「お知らせ」を単一メッセージから日付付き箇条書き3件に変更し、他セクションと同じ見出し形式に統一
- `facilities/shoten.html`:「記録町商店街について」内の小さい写真を、枠上部の幅いっぱいの画像に変更
- `facilities/shoten.html`:ヘッダー右側に商店街ロゴを追加(のちに2割拡大)
- `facilities/shoten.html`:ひより雑貨店の所在地表記を変更
- `facilities/shoten.html`:音楽酒場とまり木の紹介文を変更
---

## 2026-09-13（2）
---
### 追加
- `facilities/kikakuten.html`:ぬかピコ民芸博物館の企画展「食べる前を、のこす。」ページを新設(展示品紹介・体験コーナー・ピコぬくんの体験レポートを掲載)

### 変更
- `facilities/nukapiko-museum.html`:「企画展」セクションの本文を簡潔な案内文に差し替え、`kikakuten.html`へのリンクを追加
- `about/sitemap.html`:「ぬかピコ民芸博物館」の子ページとして`kikakuten.html`を追加
- `data/search-index.json`:`kikakuten.html`を追加
- `facilities/nukapiko-museum.html`:サイドバー「関連情報」に`kikakuten.html`へのリンクを追加
- `facilities/kikakuten.html`:外観画像`images/facilities/kikakuten.jpg`を追加
- `facilities/kikakuten.html`:お問い合わせ電話番号を追加
---

## 2026-09-13（1）
---
### 追加
- `news/news-20260901-01.html`:お知らせ記事「広報ぬかピコ最新号を掲載しました」を追加
- `news/news-20260908-01.html`:お知らせ記事「現代病相談窓口記録ファイルに新しい記録を追加しました」を追加
- `news/news-20260910-01.html`:お知らせ記事「「PICONU MUSIC」ページを公開しました」を追加
- `news/news-20260911-01.html`:お知らせ記事「PICONU MUSICアーティストのプロフィールページを公開しました」を追加
- `news/news-20260912-01.html`:お知らせ記事「「お楽しみコンテンツ」ページを公開しました」を追加
- `news/category-koho.html`・`news/category-kenko-iryo.html`・`news/category-joseikin.html`・`news/category-shigikai.html`・`news/category-kurashi.html`・`news/category-bunka.html`:お知らせのカテゴリ別一覧ページ(静的複製方式)を新設
- `README.md`:「お知らせのカテゴリ分類ルール」を追記(文化・広報・くらし・市議会・健康医療・助成金の6カテゴリの分類基準)

### 変更
- `news/index.html`:上記お知らせ5件を一覧に追加。サイドバー「カテゴリから探す」のリンク先を、その場フィルタからカテゴリ別一覧ページへの遷移に変更
- `news/index.html`・`news/category-koho.html`・`news/category-bunka.html`:2026-07-21・08-23・08-24・08-26・08-28・08-29・08-30・09-08・09-10・09-11・09-12分の計11件のカテゴリを「広報」から「文化」に修正
- `news/news-20260908-01.html`・`news/news-20260910-01.html`・`news/news-20260911-01.html`・`news/news-20260912-01.html`:記事本文内のカテゴリ表記を「広報」から「文化」に修正

---

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