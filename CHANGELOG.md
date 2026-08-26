# 変更履歴 (CHANGELOG)

ピコぬ市公式ホームページの変更・追加・修正の記録です。
新しい変更ほど上に追記していきます。

フォーマット:
```
## YYYY-MM-DD
### 追加 / 変更 / 修正
- ファイルパス: 内容

## 2026-08-26（2）
---
### 追加
- `game/011-negi.html`:現代病相談窓口記録ファイルのシナリオゲーム「ネギの話」を追加(計11本に)
- `facilities/pikonu-negi.html`:ピコぬ市の特産品「ピコぬネギ」の紹介ページを新規作成(観光課の子ページ)。産地・旬・特徴、市内で味わえる場所(市役所食堂・八百八)を掲載
- `images/facilities/negi-hatake.jpg`:ネギ畑の写真を追加
### 変更
- `about/gendaibyo-soudan-game.html`:症例一覧にNo.011を追加。「近日公開」の枠をNo.012へ更新
- `facilities/kanko-ka.html`:「自然を巡る」・「関連情報」に「ピコぬネギ」へのリンクを追加
- `about/sitemap.html`:「ピコぬネギ」を観光課の項目に追加
- `data/search-index.json`:「ピコぬネギ」を追加
---

## 2026-08-26（1）
---
### 追加
- `game/negi-game.html`:市役所食堂「ネギ盛り限界チャレンジ」ミニゲームを新規作成
- `images/game/katabutsu.png`:お邪魔キャラ「カタブツ職員」の画像を追加
### 変更
- `game/negi-game.html`:確率カーブを調整(失敗条件をカタブツ職員に見つかった場合のみに一本化。150g超から職員の出現間隔を短縮)。20g以下は見つかっても見逃す仕様に。スマホ表示・タップ操作の調整(viewportタグ追加、ボタン拡大、レスポンシブ対応)。ゲームオーバー時のセリフをネギの量に応じて3段階に調整
- `facilities/syokudo.html`:ネギに関する案内に、`negi-game.html`への控えめなリンクを追加
- `js/common.js`:共通フッターのバナー枠に「ネギ盛り限界チャレンジ」を追加
---

## 2026-08-25（2）
---
### 追加
- `game/007-renai.html`・`game/008-pikopiko.html`:現代病相談窓口記録ファイルのシナリオゲームを2本追加(計8本に)
### 変更
- `about/gendaibyo-soudan-game.html`:症例一覧にNo.007〜008を追加。「近日公開」の枠をNo.009へ更新
- `about/jusho-ichiran.html`:「市役所食堂」の所在地を追加
### 修正
- `about/sitemap.html`:「お知らせ」見出しと`<ul>`が重複していたHTML崩れを修正
- `game/008-pikopiko.html`:ゲーム本体のJavaScriptロジック(画面遷移・選択肢処理などの関数一式)が欠落し動作しない状態だったのを修正
---

## 2026-08-25（1）
---
### 追加
- `news/news-20260823-01.html`:組織一覧・連結技術推進課・Englishほかの公開についてのお知らせ記事を追加
- `news/news-20260824-01.html`:「何を探しに来たのかわからない方へ」ほかの公開についてのお知らせ記事を追加
### 変更
- `news/index.html`:上記2本のお知らせ記事を一覧に追加
- `about/sitemap.html`:「お知らせ」セクションに上記2本のリンクを追加
---

## 2026-08-24（3）
---
### 追加
- `facilities/syokudo.html`:「市役所食堂」ページを新規作成。メニュー・営業時間・食券・庁舎内配達についてご案内
- `game/003-bench.html`・`game/004-hachinosu.html`・`game/005-shindoihi.html`:現代病相談窓口記録ファイルのシナリオゲームを3本追加(計5本に)
### 変更
- `about/gendaibyo-soudan-game.html`:症例一覧にNo.003〜005を追加。「近日公開」の枠をNo.006へ更新
- `js/common.js`:共通フッターのバナー枠に「現代病相談窓口記録ファイル」を追加
---
---
## 2026-08-24（2）
---
### 追加
- `about/gendaibyo-soudan-game.html`:「現代病相談窓口記録ファイル」ページを新規作成し、`game/001-elevator.html`・`game/002-udon.html`(シナリオゲーム2本)への導線を設置
- `game/001-elevator.html`・`game/002-udon.html`:選択肢・決定ボタン押下時にWeb Audio APIで生成するピコッ音(SE)を追加。開始・終了画面に「現代病相談窓口記録ファイルに戻る」リンクを追加
### 変更
- `index.html`:「暮らしの場面から探す」と「お問い合わせ」の間に、`mayoigo.html`への案内カードを追加
- `about/sitemap.html`:`mayoigo.html`・`gendaibyo-soudan-game.html`を追加
- `data/search-index.json`:`gendaibyo-soudan-game.html`を追加。あわせて実在しない`about/gendaibyo-db.html`の古い参照を削除(現代病データベースは`facilities/`へ移設済みのため)
- `about/gendaibyo-uranai.html`・`about/gendaibyo-soudan-game.html`:カテゴリ分類を「市政情報」から「市の概要」に統一(他のミニゲームと同じ分類に揃えるため)
- `about/fuyoufukyu-uranai.html`:`mayoigo.html`のジェネレーター一覧にリンクを追加
---
## 2026-08-24（1）
---
### 追加
- `about/mayoigo.html`:「何を探しに来たのかわからない方へ」を新規作成。ゲーム・読み物・FMピコぬ・ジェネレーターなどをカテゴリ別・気分別に案内。`search-index.json`からランダムに1ページ選んで案内する「もう、なんでもいいですぬ」ボタンを実装
- `about/neko-seimu.html`:「本日の猫政務ジェネレーター」を新規作成。市内の猫の1日の行動をランダム生成する簡易ジェネレーター
### 変更
- `data/search-index.json`:「本日の猫政務ジェネレーター」を追加
- `js/common.js`:検索機能が参照する`news/index.html`・`search-index.json`の取得にキャッシュ回避用のクエリ(`?v=Date.now()`)を追加。ページ追加後に検索結果へ反映されない問題を解消
---

## 2026-08-23（6）
---
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:作品一覧の表示を「カテゴリ・日付・タイトル・読む」の折りたたみリスト形式に変更。クリックで本文の開閉が可能に
### 修正
- `news/news-20260520-01.html`ほか個別記事24本:本文と無関係な空の`<li data-category="...">`タグが混入していたため削除
---

## 2026-08-23（5）
---
### 追加
- `news/index.html`:サイドバー「カテゴリから探す」の絞り込み機能を実装(各記事に`data-category`属性を付与し、クリックで該当カテゴリの記事のみ表示するJSを追加。URLクエリでの絞り込み共有にも対応)
### 修正
- `news/index.html`:「ぬかピコ感染予防ワクチン接種のご案内」の`data-category`が表示タグ(健康・医療)と異なる値(助成金)になっていたのを修正。「目的のない事業に対する助成金について」に付与漏れていた`data-category`を追加
---

## 2026-08-23（4）
---
### 追加
- `data/gairai-archive.json`:外来シリーズ書庫に英訳版22本を追加
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:カテゴリフィルターに「English」を追加
- `facilities/kiroku-nuka-clinic-archive-admin.html`:投稿フォームのカテゴリ選択肢に「English」を追加
---

## 2026-08-23（3）
---
### 変更
- `facilities/chiiki-shigen-saiiyou.html`・`ikimono-kyosei-teien.html`・`neo-taihi-box.html`・`niwa-zukuri-josei.html`・`nuka.html`・`pio-card.html`・`ryokka-suishin.html`・`usui-junkan-taisaku.html`・`kurashi-junkan-ka.html`:サイドバーの「この課の制度・事業」ブロックを廃止し、「関連情報」に統合。あわせて各ページ下部の「前へ/次へ」「課トップへ戻る」ナビゲーションボタンを削除
- `facilities/kurashi-junkan-ka.html`:統合時に判明した抜け(雨水循環対策・緑化推進制度・ぬか資源係の3件)を関連情報に追加
- `facilities/niwa-zukuri-josei.html`:あわせて、サイドバー内で壊れていた`<ul>`の入れ子構造を修正
---

## 2026-08-23（2）
---
### 追加
- `news/news-20260814-01.html`:「ピコぬ市指定・非物品系特産品および無形文化財等一覧」公開のお知らせ記事を追加
- `news/news-20260819-01.html`:「図書館だより」8月号公開のお知らせ記事を追加
- `news/news-20260821-01.html`:ピコぬ市交通局「交通資料室」公開のお知らせ記事を追加
- `news/news-20260822-01.html`:「ピコぬ市中央公民館」公開のお知らせ記事を追加
### 変更
- `news/index.html`:上記4本のお知らせ記事を一覧に追加
- `about/sitemap.html`:「お知らせ」セクションに上記4本のリンクを追加
- `about/unei-rireki.html`:8月17日〜8月22日分の運営履歴を追記。あわせて、本文中に混入していた不要なタグ(`</parameter>`)を除去
---

## 2026-08-23（1）
---
### 追加
- `about/soshiki-ichiran.html`:「組織一覧」ページを新規作成。各部・各課へのリンクを設置
- `facilities/renketsu-suishin-ka.html`:「連結技術推進課」ページを新規作成(都市整備部所属)
- `privacy.html`:「個人情報保護方針」ページを新規作成
- `terms.html`:「サイトのご利用について」ページを新規作成
- `english.html`:「About Piconu City」英語サマリーページを新規作成
### 変更
- `js/common.js`:ヘッダー共通リンクの「組織一覧」のリンク先を`about/gaiyou.html`から`about/soshiki-ichiran.html`へ修正(内容と一致していなかったため)。フッターの「個人情報保護方針」「サイトのご利用について」のリンク先を仮リンク(トップページ)から新規ページへ変更。「English」のリンク先を`index.html`から`english.html`へ変更
- `facilities/shiyakusho.html`:「組織一覧」セクションを新ページへのリンクに置き換え。フロア案内(4階)に連結技術推進課を追加
- `facilities/shiyakusho-floor.html`:4階に連結技術推進課を追加
- `about/telephone.html`:連結技術推進課の電話番号を追加
- `about/sitemap.html`:「連結技術推進課」「組織一覧」を都市計画課の並びに追加。「トップページ」セクションにEnglish・個人情報保護方針・サイトのご利用についての3件を追加
- `data/search-index.json`:組織一覧・連結技術推進課・個人情報保護方針・サイトのご利用について・Englishの5件を追加
- `facilities/renketsu-suishin-ka.html`:電車の連結部分の写真を追加
- `facilities/kiroku-seisaku-ka.html`:市民の記録資料の写真を追加
- `facilities/keisatsu.html`:警察署の外観の写真を追加
- `terms.html`・`privacy.html`:ピコぬくんと書庫の写真を追加
---

## 2026-08-22（4）

---
### 追加
- `facilities/goods.html`:公式グッズ販売窓口の「お問い合わせ」欄を新規追加(市役所1階、電話:ぬぬ-ぬかピコ-0038(おーおみや))
### 変更
- `facilities/goods.html`:店内写真(`images/goods/shop-interior.jpg`)を本文冒頭に追加
- `facilities/shiyakusho-floor.html`・`facilities/shiyakusho.html`:1階の一覧に「公式グッズ販売窓口」を追加
- `facilities/shiyakusho.html`:「フロア案内」表に抜けていた4階(都市計画課・不要不急保存課)の行を追加(shiyakusho-floor.htmlとの不一致を解消)
- `about/telephone.html`:「公式グッズ販売窓口」の行を追加
- `JYUSYOROKU.md`:「公式グッズ販売窓口」の所在地を追加
- `facilities/kominkan.html`・`facilities/koutsukyoku.html`・`facilities/keisatsu.html`:電話番号の括弧表記を全角から半角に統一(`about/telephone.html`との表記ゆれを解消)
- `JYUSYOROKU.md`:住所録を整理(実質的な住所を持たない部署を除外、公式グッズ販売窓口・ピコぬ市交通局を追加)
---

## 2026-08-22（3）
---
### 変更
- `about/telephone.html`:「市関連施設」に中央公民館・ピコぬ市警察署・上下水道局の電話番号を追加
---

## 2026-08-22（2）
---
### 追加
- `images/facilities/kominkan-bosyu.jpg`:「令和8年度 市民講座・サークル活動 参加者募集」チラシ画像を追加(850px幅・JPEG化)
### 変更
- `facilities/kominkan.html`:「令和8年度 市民講座・サークル活動 参加者募集」セクションを新規追加(市民講座6件・サークル活動6件、チラシ画像を掲載)
---

## 2026-08-22（1）
---
### 追加
- `facilities/kominkan.html`:「ピコぬ市中央公民館」ページを新規作成(主な利用・施設案内・利用案内、定例行事「おじさん漫談」を掲載)。`facilities/index.html`のカード・`about/sitemap.html`から導線を設置
### 変更
- `facilities/shiyakusho.html`:「他の施設」に市立図書館・中央公民館・ピコぬ市商工会・ピコぬ市交通局・ピコぬ市警察署・公式グッズ・上下水道局へのリンクをまとめて追加
- `data/search-index.json`:中央公民館を追加。あわせて未登録だった37ページ(FMピコぬ関連・クリニック関連・交通局関連・歴史クラスタ・不要不急保存課系など)を追加。存在しない`services/shisetsu-annai.html`のエントリを削除
---

## 2026-08-21（3）
---
### 追加
- `facilities/toshokan-zosho.html`:市立図書館の「蔵書案内」ページを新規作成。郷土資料・地域資料・交通資料など、主な所蔵資料10点を掲載
### 変更
- `facilities/toshokan.html`:「蔵書構成」の前に「図書館からのお知らせ」を追加し、新刊図書・郷土資料展示を案内
- `facilities/toshokan.html`:「蔵書構成」の下に「蔵書案内」へのリンクを追加。「図書館からのお知らせ」内にあった重複リンクを削除
- `facilities/toshokan.html`:本文`<p>`内の途中改行を1行にまとめ、改行ルールに合わせて修正
---

## 2026-08-21（2）
---
### 追加
- `JYUSYOROKU.md`:各施設・店舗の「所在地」欄から住所を抜き出した住所録をリポジトリ直下に新規作成
### 変更
- `facilities/keisatsu.html`:施設情報に「電話(代表):ぬぬ-ぬかピコ-1050(じこぜろ)」を追加
- `facilities/suidoukyoku.html`:所在地欄の郵便番号(〒000-0000)を削除
---

## 2026-08-21（1）

---

### 追加

* `facilities/koutsukyoku-shiryoshitsu.html`:ピコぬ市交通局の「交通資料室」ページを新規作成(開業記録・旧時刻表・駅に関する資料・車両・連結技術資料を掲載)
* `facilities/koutsukyoku-opening.html`:交通局の「開業記録」ページを新規作成
* `facilities/koutsukyoku-timetable-1963.html`:交通局開業当時の「昭和38年時刻表」ページを新規作成
* `facilities/koutsukyoku-stations.html`:交通資料室の「駅に関する資料」ページを新規作成
* `facilities/koutsukyoku-stations.html`:昭和47年の「駅構内ご案内」資料を掲載

### 変更

* `facilities/koutsukyoku-shiryoshitsu.html`:「駅に関する資料」を新設ページへのリンクに変更。「昭和38年時刻表」「開業記録」へのリンクを追加
* `facilities/koutsukyoku.html`:関連情報に交通局関連ページへのリンクを追加
* `facilities/koutsukyoku-route.html`:関連情報を交通局関連ページ中心に整理
* `facilities/koutsukyoku-opening.html`:関連情報に交通局関連ページへのリンクを追加
* `facilities/koutsukyoku-timetable-1963.html`:関連情報を交通局関連ページ中心に整理
* `facilities/renketsu.html`:関連情報に交通局関連ページへのリンクを追加

---

## 2026-08-20（6）
---
### 変更
- `facilities/koutsukyoku-route.html`:関連情報にぬかピコ民芸博物館へのリンクを追加
---

## 2026-08-20（5）
---
### 追加
- `facilities/koutsukyoku-route.html`:ピコぬ市交通局の拡張として「路線案内」ページを新規作成(路線図・各駅のご案内・運行について・駅から徒歩で巡る、を掲載)
### 変更
- `facilities/koutsukyoku.html`:本文と関連情報に「路線案内」ページへのリンクを追加
- `about/faq.html`:「大小規律」「恒一」についてのQ&Aを2件追加
---

## 2026-08-20（4）
### 変更
- `facilities/hisho-kouhou-ka.html`:ケーブルテレビを秘書広報課の所管として整理。業務内容に「FMピコぬ・ケーブルテレビ」を追加し、それぞれへのリンクを設置
- `facilities/hisho-kouhou-ka.html`:「デジタルアーカイブ」の項目に「広報ぬかピコ・デジタルアーカイブ」へのリンクを追加
- `js/common.js`:グローバルナビに「ケーブルテレビ番組表」へのリンクを追加。追加時に発生したJavaScriptの構文エラー（`FMピコぬ`項目末尾のカンマ欠落）を修正

## 2026-08-20（3）
---
### 修正
- `facilities/`配下(`neo-hyakuyobako.html`・`jissen-cho.html`・`fukushika.html`・`chiiki-shigen-saiiyou.html`・`ikimono-kyosei-teien.html`・`neo-taihi-box.html`・`niwa-zukuri-josei.html`・`nuka.html`・`pio-card.html`・`ryokka-suishin.html`・`usui-junkan-taisaku.html`・`toshikeikaku.html`)、`about/`配下(`fuyoufukyu-4koma.html`・`fuyoufukyu-uranai.html`・`hibussitsu-tokusanhin.html`):パンくずリストに親ページ(環境課・不要不急保存課・生活共生課・暮らしと循環推進課・都市計画課)側で既に反映済みだった「市役所」の階層が抜けていたため、計15ファイルに追加
---

## 2026-08-20（2）
---
### 変更
- `facilities/kankyoka.html`:「環境課資料・運用情報」の見出しを追加し、「落ち葉発生時における環境課連絡基準(叩き台)」への導線を設置
- `facilities/kankyoka-ochiba-kijun.html`:「落ち葉発生時における環境課連絡基準(叩き台)」ページを新規追加(内部運用資料である旨を明記)
- `facilities/kankyoka-ochiba-kijun.html`:関連情報に暮らしと循環推進課(地域資源再利用事業)へのリンクを追加
---

## 2026-08-20（1）
---
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:フィルターのカテゴリに「その他」を追加
- `facilities/kiroku-nuka-clinic-archive-admin.html`:投稿フォームのカテゴリ選択肢に「その他」を追加
---

## 2026-08-19（2）
---
### 変更
- `facilities/toshokan.html`:8月号の「図書館だより」PDFリンクを追加
- `facilities/toshokan.html`:図書館だよりの掲載内容に合わせ、関連するレイアウト・表示を確認・調整
- サイト内の各ページ:その他のレイアウト崩れを確認・修正
- `facilities/nukapiko-museum.html`:旧寺院本堂を改修・転用した施設外観写真の生成用素材を作成
---
```
## 2026-08-19（1）
---
### 変更
- `news/news-20260615-01.html`:関連情報に記録政策課へのリンクを追加
- トップページ:「ピックアップ」の「現代病専門外来のご案内」を「現代病相談」ページへのリンクに変更し、説明文を修正
- 住所変更・各種届出ページ:市役所各フロアの案内ロボ「ピコぬくん」の案内文を修正し、「ピコぬくんとは」へのリンクを追加
- 電話番号案内ページ:市役所内の各部署に加え、市の施設・機関等の電話番号案内について整理・追加
- `about/tegami.html`:市長への手紙ページを新規追加。サイトマップ「市政情報」に追加
---

## 2026-08-18（3）
---
### 変更
- `about/`・`facilities/`配下:「関連情報」「他の施設」を実際のHTMLコードから再確認し、リンク構成を整理。市役所内の課・部署の整理、独立した施設・機関のリンク整理、市役所(`shiyakusho.html`)の扱いの整理、部署同士の関連の「関連情報」への整理、不要なリンクの削除、必要なリンクの追加、リンク名・リンク先の修正、本文中に既存の関連リンクの確認を実施。特に`facilities/`配下では議会・商工会・交通局・図書館・都市計画課・観光課・環境課・生活共生課などの関連リンクを再整理
- `about/faq.html`:既存のQ&A本文は変更せず、各質問・回答の内容に対応するページ(市営交通局・キリ番・広報ぬかピコ・議会・市長のごあいさつ・時間効率支援課・不要不急保存課・目的のない事業に対する助成金・キロクぬかクリニック・現代病相談・ごみについて・記録ごみについて・住民票)へのリンクを本文中に追加。「記録ごみについて」は`gomi.html`内の該当箇所へのリンクとした
- `about/`・`facilities/`配下:パンくずリストの構造・表示名と実際のリンク先・リンク切れ・階層の飛び・重複・不自然な親ページへのリンク・同種ページ間での構造不統一を確認し、必要な箇所を修正
- 上記の修正内容をGitHubへコミットし、GitHub Pagesへのデプロイ完了を確認
---

## 2026-08-18（2）
---
### 変更
- `news/news-20260615-01.html`:「関連情報」に記録政策課へのリンクを追加
- `facilities/jikan-koritsu-shien-ka.html`:「関連情報」に生活共生課（困りごと相談室）・不要不急保存課・記録政策課・キロクぬかクリニックへのリンクを追加
- `facilities/kiroku-seisaku-ka.html`:「関連情報」にごみ収集・ピコぬ市の歴史・行政記録 第一号・ピコぬ市年表・市史編纂事業について・未整理資料室・グラデーション保持条例・目的のない事業に対する助成条例(仮称)・生活共生課（困りごと相談室）・時間効率支援課・都市計画課・市の概要・ぬかピコ民芸博物館へのリンクを整理・追加
---

## 2026-08-18（1）
---
### 変更
- `about/faq.html`:本文中のFAQ項目に、市営交通局・キリ番・広報ぬかピコ・議会・市長のごあいさつ・時間効率支援課・不要不急保存課・目的のない事業に対する助成金・キロクぬかクリニック・現代病相談・ごみ・記録ごみ・住民票への関連リンクを追加
- `about/faq.html`:サイドバー「関連情報」は追加せず、本文中の関連リンクのみを追加
- `about/ikimono-zukan.html`:「市の花」「市の鳥」への関連情報リンクを追加
- `about/nukabana.html`:「ピコぬ市生き物図鑑」への関連情報リンクを追加
- `about/piconu-dori.html`:「ピコぬ市生き物図鑑」への関連情報リンクを追加
- `about/jorei-gradation.html`:関連情報に市長のごあいさつへのリンクを追加
- `about/saiyo.html`:関連情報から審議会・附属機関一覧へのリンクを削除
- `about/gaiyou.html`・`about/kanko.html`・その他about/配下:「関連情報」のリンク構成を再確認・整理
- `facilities/gikai.html`・`facilities/goods.html`・`facilities/hisho-kouhou-ka.html`・`facilities/kanko-ka.html`・`facilities/kankyoka.html`・`facilities/koutsukyoku.html`・`facilities/seikatsu-kyosei-ka.html`・`facilities/shiminka.html`・`facilities/shokokai.html`・`facilities/toshikan.html`・`facilities/renketsu.html`など:「関連情報」のリンク構成を再確認・整理
- `facilities/kaikeika.html`・`facilities/keisatsu.html`・`facilities/shiyakusho-floor.html`・`facilities/toshikeikaku.html`・`facilities/suidoukyoku.html`:「関連情報」の現状を確認
- `facilities/toshokan.html`:関連情報に市役所へのリンクを追加
- `facilities/goods.html`:関連情報からピコぬくん業務日誌を削除し、「ピコぬくんとは」へのリンクを追加
- `facilities/hisho-kouhou-ka.html`:関連情報を整理し、市役所案内を「市役所」に訂正
- `facilities/kanko-ka.html`:関連情報を整理し、ピコぬ市生き物図鑑をセクション下部へ移動。お問い合わせセクションを削除
- `facilities/kankyoka.html`:「暮らしと循環推進課『地域資源再利用事業』」の表記を修正
- `facilities/koutsukyoku.html`:関連情報を整理
- `facilities/seikatsu-kyosei-ka.html`:関連情報にフロア案内・ピコぬ市行政構造図を追加
- `facilities/shokokai.html`:関連情報を整理
- `facilities/toshokan.html`:関連情報を整理し、キロクぬかクリニック・ピコぬ市交通局を追加、市役所を追加
- `facilities/renketsu.html`:関連情報を整理し、ピコぬくんとは・ピコぬ市商工会を追加
- `facilities/shiminka.html`:関連情報を整理
- `facilities/suidoukyoku.html`:連絡先を修正
---
## 2026-08-17
---
### 変更
- `about/`配下:関連情報のリンク構成を全41ページについて確認・再精査
- `about/faq.html`:関連情報は追加せず、本文中のFAQから必要なページへの関連リンクを追加する方針に変更
- `about/gyousei-kouzou.html`:本文中の「組織図」を「市役所」に変更
- `about/saiyo.html`:関連情報から審議会・附属機関一覧へのリンクを削除
- `about/ikimono-zukan.html`:関連情報に市の花「ぬかばな」・市の鳥「ピコぬどり」を追加
- `about/nukabana.html`:関連情報にピコぬ市生き物図鑑を追加
- `about/piconu-dori.html`:関連情報にピコぬ市生き物図鑑を追加
- `about/jorei-gradation.html`:関連情報に市長のごあいさつを追加
- `about/`・`facilities/`配下:関連情報・他の施設の構成を再確認し、不要なリンクの削除・必要なリンクの追加・表記修正を実施
- `about/`・`facilities/`配下:パンくずリストの構造・リンク先・階層を確認
- `about/`・`facilities/`配下:関連リンクおよびパンくずについて、既存コードを確認したうえで修正対象を整理
---

## 2026-08-16（9）
---
### 変更
- `about/kanko.html`・`facilities/nukapiko-museum.html`・`facilities/koutsukyoku.html`・`about/ikimono-zukan.html`:観光課への戻りリンクを追加(相互リンク化)
- `facilities/shiyakusho.html`:簡易フロア表の3階に観光課・秘書広報課を追加
- `about/aisatsu.html`:関連情報に秘書広報課へのリンクを追加
- `services/gomi.html`・`facilities/fuyoufukyuhozonka.html`・`facilities/kiroku-seisaku-ka.html`:都市計画課への戻りリンクを追加(相互リンク化)
- `facilities/jissen-cho.html`・`about/fuyoufukyu-4koma.html`・`about/hibussitsu-tokusanhin.html`:不要不急保存課ファミリー内の相互リンクの抜け(実践帳↔4コマ漫画、4コマ漫画→過ごし方、特産品一覧→過ごし方)を解消
- `about/shisei-joho.html`・`about/gijiroku.html`・`about/shingikai.html`・`about/jorei.html`・`facilities/fuyoufukyuhozonka.html`:議場・議会事務局への戻りリンクを追加(相互リンク化)。`gijiroku.html`本文中の「議会事務局」もリンク化
- `about/shingikai.html`:リンク切れになっていた`gendaibyo-db.html`のパスを`../facilities/gendaibyo-db.html`に修正(facilities/移行時の一括置換漏れ)
---
## 2026-08-16（8）
---
### 変更
- `facilities/fukushika.html`:「他の施設」に不要不急保存課・記録政策課への戻りリンクを追加。「関連情報」に現代病相談へのリンクを追加
- `about/piconu-kun.html`:関連情報に困りごと相談室(相談支援用ピコぬくん)へのリンクを追加(相互リンク化)
- `facilities/kiroku-nuka-clinic.html`:関連情報に困りごと相談室へのリンクを追加
- `services/gendaibyo-sodan.html`:関連情報にキロクぬかクリニック・困りごと相談室へのリンクを追加
---
## 2026-08-16（7）
---
### 変更
- `facilities/neo-taihi-box.html`:「この課の制度・事業」に「ぬか資源係」「地域資源再利用事業」へのリンクを追加(未反映だった差分を再適用)
- `facilities/shinryo-kamoku.html`:サイドバーに医師紹介・研究資料・外来シリーズ書庫へのリンクを追加
- `about/cable-tv.html`・`facilities/hisho-kouhou-ka.html`:ラジオ番組3本(ピックアップ!ピコぬ市ラジオ・深掘りラジオ・どうでもいいラジオ)への個別リンクを追加
- `facilities/kiroku-seisaku-ka.html`:「ピコぬ市グラデーション保持条例」「目的のない事業に対する助成条例(仮称)」へのリンクを追加
- `facilities/nukapiko-museum.html`:「ピコぬ市記録文化保護条例」へのリンクを追加
- `facilities/kiroku-nuka-clinic.html`:「現代病対策条例」へのリンクを追加
- `about/jorei.html`:「各条例の所管部署」セクションを新設し、6条例それぞれの所管部署(記録政策課・不要不急保存課・現代病相談・時間効率支援課)への相互リンクを追加
- `about/jorei-kiroku-bunka.html`:「関連情報」に記録政策課へのリンクを追加
- `about/jorei-gendaibyo.html`:リンク切れになっていた`gendaibyo-db.html`のパスを`../facilities/gendaibyo-db.html`に修正(facilities/移行時の一括置換漏れ)

---
## 2026-08-16（6）
---
### 変更
- `facilities/kiroku-nuka-clinic-archive.html`:サイドバーの重複していた「診療科目一覧」を整理し、「問診表」へのリンクを追加
- `facilities/kiroku-nuka-clinic-director.html`:サイドバーの閉じ忘れていた`</ul>`タグを修正。「外来シリーズ 書庫」へのリンクを追加
- `facilities/kiroku-nuka-clinic-kenkyu.html`:サイドバーに「診療科目一覧」へのリンクを追加
- `facilities/gendaibyo-db.html`:サイドバーにクリニックファミリー内(医師紹介・研究資料・外来シリーズ書庫・診療科目一覧・問診表)へのリンクを追加
- `services/kiroku-nuka-monshinhyo.html`:サイドバーに医師紹介・研究資料・外来シリーズ書庫・現代病データベースへのリンクを追加
- クリニック関連主要6ページ(本体・医師紹介・研究資料・外来シリーズ書庫・現代病データベース・問診表)の相互リンクを完全化
## 2026-08-16（5）
---
### 変更
- `facilities/kiroku-seisaku-ka.html`:「関連情報」に行政記録第一号・年表・市史編纂事業について・未整理資料室へのリンクを追加(相互リンク化)
- `facilities/jikan-koritsu-shien-ka.html`:「他の施設」にキロクぬかクリニック・ぬかピコ民芸博物館以外の5部署(困りごと相談室・不要不急保存課・記録政策課・ピコぬ市交通局・市立図書館)へのリンクを追加。「関連情報」に非効率的時間保護条例・行政記録第一号へのリンクを追加
- `about/gyousei-kiroku-01.html`:「関連情報」に時間効率支援課へのリンクを追加(相互リンク化)
- `facilities/shiminka.html`・`services/juminhyo.html`・`services/koseki.html`:市民課まわりの片方向リンクを解消(住所変更・各種届出、住民票自動発行ジェネレーターを含め相互リンク化)
- `services/juminhyo-generator.html`:本文末尾に「お問い合わせ」欄(市民課)を追加
- `facilities/nukapiko-museum.html`・`facilities/jikan-koritsu-shien-ka.html`・`facilities/hisho-kouhou-ka.html`・`about/jorei-jikan.html`・`about/jorei-fuyofukyu.html`:「広報ぬかピコ最新号」への個別リンク(号が変わるたびに要更新)を、`about/koho-archive.html`(デジタルアーカイブ、更新不要)への案内に変更。一括置換時にパスが壊れていた4ファイルを修正
- `facilities/fuyoufukyuhozonka.html`・`about/jorei-fuyofukyu.html`:不要不急保存条例への相互リンクを追加

---
## 2026-08-16（4）
---
### 変更
- `README.md`:旧版を削除し、`READMEnew.md`を正式な`README.md`として確定。`services/`ページ数を実数(10ページ)に修正、共通ヘッダーの`nav`キー説明に`gaiyou`(市の概要)と`about`(市政情報)が別キーである旨を追記
- `about/shisei-joho.html`:サービスカードに「ピコぬ市 行政構造図」「部署別電話番号一覧」を追加(サイトマップとの不一致を解消、5→7項目)。メイン画像を新しいものに差し替え、alt文言を「条例集や部署別電話番号一覧などの行政資料が並ぶ机」に変更
- `images/icons/icon-gyousei-kouzou.svg`:「ピコぬ市 行政構造図」カード用に新規作成(六角形の連結モチーフ、既存アイコンと同系色の線画)
- `facilities/chiiki-shigen-saiiyou.html`・`facilities/nuka.html`・`facilities/neo-taihi-box.html`・`facilities/niwa-zukuri-josei.html`・`facilities/pio-card.html`・`facilities/ryokka-suishin.html`・`facilities/ikimono-kyosei-teien.html`・`facilities/usui-junkan-taisaku.html`:暮らしと循環推進課ファミリー内のサイドバー相互リンク漏れを解消。特に`nuka.html`・`chiiki-shigen-saiiyou.html`は「関連情報」1ブロックのみで情報量が薄かったため、他の兄弟ページと同じ「関連情報」+「この課の制度・事業」の2ブロック構成に統一
---
### 変更
- `README.md`:「『市の概要』と『市政情報』の区別」の節を新設。「新しいページを追加する手順」の置き場所判断にも参照を追記
- `css/style.css`:警告の出ていた空の`.notice-tag.important`ルールを削除(見た目への影響なし)

## 2026-08-16（2）
---
### 変更
- `about/shisei-joho.html`:説明文を「条例・パブリックコメント・議事録・審議会など、ピコぬ市の行政運営に関する情報をまとめています。」に変更。サービスカードから「現代病データベース」「ピコぬ市の歴史」「ピコぬ市生き物図鑑」を除去し、条例集・パブリックコメント・議事録会議録・審議会・職員採用情報の5項目に整理
- `about/gaiyou.html`:「ピコぬ市の記録」リストに「ピコぬ市生き物図鑑」を追加
- `about/rekishi.html`・`about/nenpyo.html`・`about/hensan-jigyo.html`・`about/miseiri-shiryo.html`・`about/gyousei-kiroku-01.html`・`about/ikimono-zukan.html`:分類を市政情報から市の概要に変更(nav・パンくず1階層目を「市政情報」→「市の概要」に更新)
- `about/sitemap.html`:「ピコぬ市の歴史」クラスタ・「ピコぬ市生き物図鑑」を市政情報セクションから市の概要セクションへ移動。「現代病データベース」を市政情報セクションから削除し、施設案内のキロクぬかクリニック配下に追加

## 2026-08-16
---
### 削除
- `services/shisetsu-annai.html`:内容が`facilities/index.html`と重複していた簡易版の施設案内を削除
### 変更
- `index.html`・`services/index.html`・`about/sitemap.html`:「施設案内」へのリンクを、削除した`services/shisetsu-annai.html`から`facilities/index.html`に変更
- `IDEAS.md`:実装済みの「🏥 キロクぬかクリニック専用ホームページ」の項目を削除

## 2026-08-15（4）
---
### 変更
- `README.md`:全面的に作り替え。ディレクトリ構成・画像/PDF/音声フォルダ運用ルールを現状に合わせて更新。「記録ファイルの役割分担」「簡易CMSパターン」「サイト内検索」「新しいページを追加する手順」の各節を新設。「今後の拡張候補」は内容の二重管理をやめ`IDEAS.md`参照に変更
- `IDEAS.md`:「📰 お知らせページのカテゴリ機能」(news/index.htmlのカテゴリ別一覧ページ未実装)を追加
## 2026-08-15（3）
---
### 変更
- `facilities/kiroku-nuka-clinic-director.html`・`facilities/kiroku-nuka-clinic-kenkyu.html`・`facilities/kiroku-nuka-clinic-archive.html`:相互リンクの抜けを解消(医師紹介・研究資料・診療科目一覧・外来シリーズ書庫の間で行き来できるように)
- `facilities/kiroku-nuka-clinic-director.html`・`facilities/kiroku-nuka-clinic-kenkyu.html`・`services/kiroku-nuka-monshinhyo.html`:Zen Old Minchoを読み込み、本文・見出しのフォントをクリニック本体(`kiroku-nuka-clinic.html`)と統一(それまではNoto Sans JPのままだった)
- `facilities/gendaibyo-db.html`・`facilities/kiroku-nuka-clinic-director.html`・`facilities/kiroku-nuka-clinic-kenkyu.html`・`facilities/shinryo-kamoku.html`・`facilities/kiroku-nuka-clinic.html`・`services/kiroku-nuka-monshinhyo.html`:サイドバー見出し(「関連情報」「他の施設」)の文字色をアクセントカラー`#3cffdc`に統一

## 2026-08-15（2）
---
### 変更
- `facilities/gendaibyo-db.html`:検索窓・テーブルのフォントをモノスペースからNoto Sans JPに統一。画像を新しいカルテモニター風ビジュアルに差し替え
- `about/gendaibyo-db.html`を削除:`facilities/gendaibyo-db.html`(リニューアル版)に一本化
- `about/gendaibyo-db-admin.html` → `facilities/gendaibyo-db-admin.html`へ移動(公開ページと管理画面を同じフォルダに揃える方針に統一)
- `about/sitemap.html`:「現代病データベース」の項目を市政情報リストからキロクぬかクリニック配下に移動
- `robots.txt`:管理画面の除外パスを`/facilities/gendaibyo-db-admin.html`に修正
- `js/common.js`・`facilities/goods.html`・`services/gendaibyo-sodan.html`・`services/kiroku-nuka-monshinhyo.html`:「現代病データベース」へのリンクを`facilities/gendaibyo-db.html`に修正(旧`about/`版へのリンク切れを解消)。あわせて`kiroku-nuka-monshinhyo.html`内の誤ったリンクテキスト(「現代人診療報酬点数表」→「現代病データベース」)も修正
- `about/kiroku-nuka-clinic.html` → `facilities/kiroku-nuka-clinic.html`へ移動。キロクぬかクリニックはサイトマップ上「施設案内」に分類されているため、今後のページ配置はサイトマップの分類を基準とする
- クリニック関連ページの配置・リンクを整理。Claude（兄さん）による最終チェックを実施し、追加4件を修正後、再チェックで問題なしを確認

## 2026-08-15（1）
---
### 追加
- `facilities/kiroku-nuka-clinic-kenkyu.html`:「研究資料」を新規作成。研究資料No.001(主語他者化硬化症)を掲載、「研究資料を読む」で症例・記録・処方・追跡記録が展開される折りたたみ形式
### 変更
- `facilities/kiroku-nuka-clinic-director.html`:院長の紹介画像を、SVGシルエットから透過処理済みの写真シルエット(`images/facilities/kiroku-nuka-clinic-director.png`)に変更。「所属学会・活動」セクションを追加。スマホ表示でバッジ・名前・画像が縦1文字ずつ折り返されていた不具合を`flex-wrap`指定で修正
- `facilities/kiroku-nuka-clinic.html`:誤って医師紹介ページの内容で上書きされていたのを復元。電話番号(ぬぬ-ぬかピコ-8881)、医師紹介・研究資料へのリンクを追加
- `facilities/shinryo-kamoku.html`:クリニックと同じダーク×Zen Old Minchoデザインに変更(38件の外来タグはそのまま)
- `about/sitemap.html`:キロクぬかクリニックの子ページとして「医師紹介」「研究資料」を追加

---
## 2026-08-14（2）
### 追加
- `about/fuyoufukyu-uranai.html`:「今日のあなたにおすすめの不要不急な時間の過ごし方」を新規作成。不要不急実践帳の全20種からランダムでカードを1枚表示するジェネレーター(既存のカード画像を流用、ダウンロードボタン付き)
- `news/news-20260806-01.html`〜`news-20260813-01.html`:8月2日以降の主な更新のうち5件(住民票自動発行ジェネレーター・FMピコぬ開局・混雑状況/不要不急実践帳・運営履歴・不要不急な4コマ漫画)について、お知らせ記事を新規作成
### 変更
- `about/sitemap.html`:施設案内・くらしの情報・市の概要・市政情報の各階層で漏れていたページ(行政記録第一号、検定、連結技術、地域資源再利用事業、「ネオ百葉箱」について、上下水道局、住所変更・各種届出など)を追加。お知らせ欄の見出し・リスト開始タグの欠落を修正し、新着記事7件(7/20〜8/1分)と今回追加の5件を反映
- `news/index.html`・`index.html`(トップページ):お知らせ欄に新規記事5件を反映(トップページは最新6件に更新)
- `about/rekishi.html`:サイドバーに重複していた「当ホームページの運営履歴」の行を削除
- `css/style.css`:`.notice-tag.important`の赤色指定を解除し、お知らせタグの色を全て既定の青に統一(`notice-box`の赤色注意喚起ボックスは維持)
- `facilities/jissen-cho.html`・`about/fuyoufukyu-4koma.html`:サイドバーに「非物品系特産品一覧」へのリンクを追加(相互リンク化)
- `facilities/jissen-cho.html`・`facilities/fuyoufukyuhozonka.html`・`about/sitemap.html`:「今日のあなたにおすすめの不要不急な時間の過ごし方」へのリンクを追加
## 2026-08-14
---
### 追加
- `about/hibussitsu-tokusanhin.html`:「ピコぬ市指定・非物品系特産品および無形文化財等一覧」を新規作成。不要不急保存課管轄。指定番号バッジ付きカード形式で7品目を掲載
### 変更
- `about/rekishi.html`:「関連資料」テーブルのHTML不整合(`<tr>`タグの重複・欠落)を修正。サイドバーに「未整理資料室」へのリンクを追加
- `about/sitemap.html`:市政情報の階層に「未整理資料室」を子ページとして追加。不要不急保存課の階層に「非物品系特産品一覧」を追加
- `about/miseiri-shiryo.html`:本文末尾に「お問い合わせ」欄(記録政策課)を追加
- `about/unei-rireki.html`:本文末尾に「お問い合わせ」欄(秘書広報課)を追加
- `facilities/fuyoufukyuhozonka.html`:「不要不急実践帳」の下に「非物品系特産品一覧」セクションとリンクを追加。サイドバー「関連情報」にも追加
## 2026-08-13（2）
---
### 追加
- `about/miseiri-shiryo.html`:「未整理資料室」を新規作成。境界図・行政文書・旧市役所写真・旧市域図・合併メモの5点を画像付きで掲載
- `images/rekishi/`:未整理資料5点の画像を新規保存
### 変更
- `about/rekishi.html`:「関連資料」テーブルに「未整理資料室」を追加
## 2026-08-13
### 追加
- `about/nenpyo.html`:「ピコぬ市年表」を新規作成。市の前史・成立に関する諸説・成立後の3セクション構成、項目ごとに年代バッジ付き
- `about/hensan-jigyo.html`:「市史編纂事業について」を新規作成。市史編纂室の役割、資料区分(確認された記録/説・伝承/年代・内容不明/確認できないもの)、お問い合わせ欄を掲載
### 変更
- `about/rekishi.html`:「関連資料」テーブルの「ピコぬ市年表」「市史編纂事業について」をリンク化(準備中表示を解除)。お問い合わせ欄(記録政策課)を追加。サイドバーに年表・市史編纂事業について・記録政策課へのリンクを追加
- `about/sitemap.html`:市政情報の階層に「ピコぬ市年表」「市史編纂事業について」を子ページとして追加
- `facilities/kiroku-seisaku-ka.html`:サイドバー「関連情報」に「ピコぬ市の歴史」「ピコぬ市年表」へのリンクを追加
---
### 追加
- `about/fuyoufukyu-4koma.html`:「不要不急な4コマ漫画」を新規作成。pdf.js(CDN経由)を使ったページめくり形式のPDFビューアを実装
- `pdfs/fuyoufukyu-4koma.pdf`:4コマ漫画 第1話〜第10話をまとめたPDF
### 変更
- `facilities/fuyoufukyuhozonka.html`:「不要不急実践帳」の下に「不要不急な4コマ漫画」セクションとリンクを追加。サイドバー「関連情報」にも追加
- `about/sitemap.html`:不要不急保存課の階層に「不要不急な4コマ漫画」を追加
## 2026-08-12
---
### 追加
- `about/gyousei-kiroku-01.html`:行政記録 第一号「診療情報提供兼意見書(時間効率支援課宛)」を実際の書式風デザインで新規作成

## 2026-08-12
---
### 追加
- `about/gyousei-kiroku-01.html`:行政記録 第一号「診療情報提供兼意見書(時間効率支援課宛)」を実際の書式風デザインで新規作成
- `pdfs/gomi-shushu-calendar.pdf`:ごみ収集カレンダー(全戸配布版)を新規作成。記録町・塩梅町・ぬかが丘一丁目・外来通三丁目・連結町の5地区別に収集日程をまとめた1枚もの
- `facilities/chiiki-shigen-saiiyou.html`:暮らしと循環推進課「地域資源再利用事業」を新規作成。市民間リユース・シェア、建築解体材のアップサイクル、公共施設の備品循環の3本柱で構成
- `about/unei-rireki.html`:「当ホームページの運営履歴」を新規作成。開設(2026年7月11日)から現在までの主な更新を時系列でご案内
### 変更
- `about/rekishi.html`:「行政記録　第一号」の表記を「閲覧準備中」から `gyousei-kiroku-01.html` へのリンク(「閲覧可能」)に変更。「関連資料」表に `unei-rireki.html` へのリンクを追加
- `services/gomi.html`:収集カレンダーの案内を「PDF版準備中」から `pdfs/gomi-shushu-calendar.pdf` へのリンクに変更。粗大ごみとカレンダーの間に「分別しても行き先が決まらないものについて(黒い塊)」セクションを新規追加(散文詩「くろいもの」を含む)。サイドバー「関連サービス」に `chiiki-shigen-saiiyou.html` へのリンクを追加
- `facilities/kurashi-junkan-ka.html`:制度一覧・サイドバーに「地域資源再利用事業」への導線を追加
- `facilities/kankyoka.html`:壊れていたHTML構造(サイドバーの閉じタグ抜け)を修正。「ピコぬ市環境方針」の一文に `chiiki-shigen-saiiyou.html` へのリンクを追加。本文の「関連ページ」セクション(サイドバー「関連情報」と重複)を削除し、サイドバー側に `chiiki-shigen-saiiyou.html` へのリンクを追加して一本化
- `about/sitemap.html`:市政情報リストに `unei-rireki.html` へのリンクを追加
### 修正
- `facilities/kankyoka.html`:HTML構造の崩れ(`<aside>`・`<div class="sidebar-block">`の閉じタグ抜け、サイドバー中身の欠落)を修正

## 2026-08-11
---
### 追加
- `about/dodemoii-radio.html`:FMピコぬ第3番組「どうでもいいラジオ」を新規作成(「深掘りラジオ」と同レイアウト)。P-800型ピコぬくんが淡々と「どうでもいい話」を届ける番組、不要不急保存課提供
- `audio/dodemoii-radio-ep01.mp3`・`images/cable-tv/dodemoii-radio-ep01.jpg`:第1回(2026年8月11日配信)の音声・サムネイル
### 変更
- `about/fm-piconu.html`:番組一覧に「どうでもいいラジオ」の番組カードを追加
- `about/fukabori-radio.html` / `about/piconu-city-radio.html` / `about/piconu-kun.html` / `facilities/fuyoufukyuhozonka.html`:サイドバー等の関連情報リンクに「どうでもいいラジオ」への導線を追加
- `about/fukabori-radio.html`:番組紹介文を一部修正(「ピコぬ市公式ホームページの内容」→「ピコぬ市にまつわる文化」、パーソナリティを「市外在住」と明記)


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