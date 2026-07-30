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