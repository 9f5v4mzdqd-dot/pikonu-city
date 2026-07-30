# 変更履歴 (CHANGELOG)

ピコぬ市公式ホームページの変更・追加・修正の記録です。
新しい変更ほど上に追記していきます。

フォーマット:
```
## YYYY-MM-DD
### 追加 / 変更 / 修正
- ファイルパス: 内容
```

---

## 2026-07-30

### 追加
- `about/rekishi.html` へのリンクを `about/shisei-joho.html`(市政情報トップのサービスカード)と `about/sitemap.html` に追加
- `images/icons/icon-rekishi.png` を新規作成(市政情報トップのカード用アイコン)

### 未対応(要相談)
- `about/sitemap.html` に未掲載のページが他にもあり: `telephone.html` / `gyousei-kouzou.html` / `gijiroku-rinji-2026-3.html` / `seikatsu-kyosei-ka.html` / `kurashi-junkan-ka.html`(および庭づくり助成・緑化推進・生き物共生・ネオ堆肥・雨水循環・ぬか資源係の各ページ)/ `kiroku-seisaku-ka.html` / `toshikeikaku.html` / `kankyoka.html` / `fuyoufukyuhozonka.html` / `kaikeika.html` / `shiminka.html` / `gikai.html`

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
