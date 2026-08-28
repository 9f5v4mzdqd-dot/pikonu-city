/* ==========================================================================
   ピコぬ市公式ホームページ 共通スクリプト
   - ヘッダー / グローバルナビ / フッターの共通描画
   - 文字サイズ切替・高コントラスト切替(アクセシビリティ)
   - モバイル用ナビ開閉、ページトップボタン
   各ページは <script> 読み込み前に window.PAGE_META を定義してください。
   例:
   window.PAGE_META = {
     nav: "news",                       // グローバルナビの現在地キー
     breadcrumb: [{ label: "お知らせ" }] // トップ(ホーム)は自動付与
   };
   ========================================================================== */
(function () {
  "use strict";

  // 現在のスクリプトタグから /js/common.js までのベースパスを算出する。
  // これにより、ディレクトリの深さに関わらずページ側で相対パスを気にせず済む。
  var currentScript = document.currentScript || (function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();
  var scriptSrc = currentScript.getAttribute("src") || "";
  var BASE = scriptSrc.replace(/js\/common\.js.*$/, "");

  var meta = window.PAGE_META || {};
  var navCurrent = meta.nav || "";
  var breadcrumb = meta.breadcrumb || [];

  var EMBLEM_SVG =
    '<svg class="emblem" viewBox="0 0 64 64" role="img" aria-label="ピコぬ市章">' +
    '<circle cx="32" cy="32" r="30" fill="none" stroke="#1a4b8c" stroke-width="3"/>' +
    '<circle cx="32" cy="20" r="7" fill="#1a4b8c"/>' +
    '<circle cx="20" cy="42" r="7" fill="#2166ac"/>' +
    '<circle cx="44" cy="42" r="7" fill="#2166ac"/>' +
    '<path d="M32 20 L20 42 M32 20 L44 42 M20 42 L44 42" stroke="#1a4b8c" stroke-width="3" fill="none"/>' +
    "</svg>";

  var NAV_ITEMS = [
    { key: "home", label: "ホーム", href: "index.html" },
    { key: "news", label: "お知らせ", href: "news/index.html" },
    { key: "services", label: "くらしの情報", href: "services/index.html" },
    { key: "facilities", label: "施設案内", href: "facilities/index.html" },
    { key: "gaiyou", label: "市の概要", href: "about/gaiyou.html" },
    { key: "about", label: "市政情報", href: "about/shisei-joho.html" },
    { key: "piconu-chat", label: "ピコぬくんとチャット", href: "about/piconu-chat.html" },
    { key: "radio", label: "FMピコぬ", href: "about/fm-piconu.html" },
    { key: "cable-tv", label: "ケーブルテレビ番組表", href: "about/cable-tv.html" }
  ];

  function el(html) {
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    return wrap.firstElementChild;
  }

  function injectSearchStyles() {
    if (document.getElementById("site-search-style")) return;
    var style = document.createElement("style");
    style.id = "site-search-style";
    style.textContent =
      ".header-search{position:relative;}" +
      ".site-search-results{position:absolute; top:100%; left:0; right:0; margin-top:4px; background:#fff; border:1px solid var(--color-border,#d5dbe0); border-radius:3px; box-shadow:0 4px 10px rgba(0,0,0,.12); z-index:50; max-height:340px; overflow-y:auto;}" +
      ".site-search-results ul{list-style:none; margin:0; padding:0;}" +
      ".site-search-results li{border-bottom:1px solid var(--color-border,#eee);}" +
      ".site-search-results li:last-child{border-bottom:none;}" +
      ".site-search-results a{display:flex; justify-content:space-between; align-items:baseline; gap:.6em; padding:.55em .8em; color:var(--color-text,#2b2b2b); text-decoration:none; font-size:.88rem;}" +
      ".site-search-results a:hover, .site-search-results a:focus{background:#f2f6fa;}" +
      ".site-search-title{flex:1;}" +
      ".site-search-category{font-size:.75rem; color:var(--color-text-sub,#767676); white-space:nowrap;}" +
      ".site-search-empty{margin:0; padding:.7em .8em; font-size:.85rem; color:var(--color-text-sub,#767676);}" +
      ".nav-search-mobile{display:none;}" +
      ".nav-search-mobile-label{margin:0 0 6px; font-size:.78rem; color:#fff; opacity:.85;}" +
      ".nav-search-hint{display:none;}" +
      "@media (max-width:680px){" +
      ".nav-toggle-row{display:flex; align-items:center;}" +
      ".nav-search-mobile{display:block; padding:12px 14px; background:rgba(0,0,0,.12);}" +
      ".nav-search-mobile .header-search{display:flex;}" +
      ".nav-search-mobile input[type=search]{flex:1; min-width:0;}" +
      ".nav-search-hint{display:inline-block; margin-left:10px; font-size:.75rem; color:#fff; opacity:.8; vertical-align:middle;}" +
      "}";
    document.head.appendChild(style);
  }

  function renderHeader() {
    injectSearchStyles();
    var navHtml = NAV_ITEMS.map(function (item) {
      var current = item.key === navCurrent ? ' aria-current="page"' : "";
      return '<a href="' + BASE + item.href + '"' + current + ">" + item.label + "</a>";
    }).join("");

    var breadcrumbHtml = "";
    if (breadcrumb.length) {
      var items = ['<li><a href="' + BASE + 'index.html">ホーム</a></li>'];
      breadcrumb.forEach(function (b, i) {
        if (b.href && i < breadcrumb.length - 1) {
          items.push('<li><a href="' + b.href + '">' + b.label + "</a></li>");
        } else {
          items.push("<li>" + b.label + "</li>");
        }
      });
      breadcrumbHtml =
        '<nav class="breadcrumb" aria-label="現在位置"><ol>' + items.join("") + "</ol></nav>";
    }

    var headerHtml =
      '<a class="skip-link" href="#main">本文へスキップ</a>' +
      '<header>' +
      '<div class="site-header-utility"><div class="utility-inner">' +
      '<ul class="utility-links">' +
      '<li><a href="' + BASE + 'about/sitemap.html">サイトマップ</a></li>' +
      '<li><a href="' + BASE + 'about/faq.html">よくある質問</a></li>' +
      '<li><a href="' + BASE + 'english.html">English</a></li>' +
      '<li><a href="' + BASE + 'about/soshiki-ichiran.html">組織一覧</a></li>' +
      "</ul>" +
      '<div class="a11y-tools">' +
      '<div class="group" role="group" aria-label="文字の大きさ">' +
      '<span class="label">文字サイズ</span>' +
      '<button type="button" data-fontsize="normal" aria-pressed="true">小</button>' +
      '<button type="button" data-fontsize="large" aria-pressed="false">中</button>' +
      '<button type="button" data-fontsize="xlarge" aria-pressed="false">大</button>' +
      "</div>" +
      '<div class="group" role="group" aria-label="色の切り替え">' +
      '<button type="button" data-contrast-toggle aria-pressed="false">背景色・文字色の変更</button>' +
      "</div>" +
      "</div>" +
      "</div></div>" +
      '<div class="site-header-main"><div class="header-main-inner">' +
      '<a class="site-logo" href="' + BASE + 'index.html">' +
      EMBLEM_SVG +
      '<span class="title-block">' +
      '<span class="site-name-en">PICONU CITY OFFICIAL WEBSITE</span>' +
      '<span class="site-name-ja">ピコぬ市 公式ホームページ</span>' +
      "</span></a>" +
      '<form class="header-search" role="search" action="#" onsubmit="return false;">' +
      '<label class="visually-hidden" for="site-search">サイト内検索</label>' +
      '<input id="site-search" type="search" placeholder="サイト内検索" autocomplete="off">' +
      '<button type="submit">検索</button>' +
      '<div id="site-search-results" class="site-search-results" hidden></div>' +
      "</form>" +
      "</div></div>" +
      '<nav class="global-nav" aria-label="グローバルナビゲーション">' +
      '<div class="global-nav-inner" id="global-nav-inner">' +
      '<div class="nav-search-mobile">' +
      '<p class="nav-search-mobile-label">サイト内を検索</p>' +
      '<form class="header-search" role="search" action="#" onsubmit="return false;">' +
      '<label class="visually-hidden" for="site-search-mobile">サイト内検索</label>' +
      '<input id="site-search-mobile" type="search" placeholder="サイト内検索" autocomplete="off">' +
      '<button type="submit">検索</button>' +
      '<div id="site-search-results-mobile" class="site-search-results" hidden></div>' +
      "</form>" +
      "</div>" +
      navHtml + "</div>" +
      '<div class="nav-toggle-row">' +
      '<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="global-nav-inner">メニュー ☰</button>' +
      '<span class="nav-search-hint">メニューを押すと検索画面が出ます</span>' +
      "</div>" +
      "</nav>" +
      breadcrumbHtml +
      "</header>";

    document.body.insertAdjacentHTML("afterbegin", headerHtml);
  }

  function renderFooter() {
    var bannerHtml =
      '<div class="banner-strip"><div class="banner-strip-inner">' +
      '<a href="' + BASE + 'about/rekishi.html"><img src="' + BASE + 'images/banners/banner-rekishi.jpg" alt="市史編纂室 ピコぬ市の歴史成立に関する記録を公開しています"></a>' +
      '<a href="https://suzuri.jp/PIKONU-CITY" target="_blank" rel="noopener"><img src="' + BASE + 'images/banners/banner-suzuri.jpg" alt="ピコぬ市公式ショップ(SUZURI)"></a>' +
      '<a href="https://note.com/rich_whale740" target="_blank" rel="noopener"><img src="' + BASE + 'images/banners/banner-note.jpg" alt="ピコぬ市記録室(note)"></a>' +
      '<a href="' + BASE + 'about/piconu-kun-escapegame.html"><img src="' + BASE + 'images/banners/banner-game.jpg" alt="ピコぬくん脱出ゲーム"></a>' +
      '<a href="' + BASE + 'about/piconu-quiz.html"><img src="' + BASE + 'images/banners/banner-quiz.jpg" alt="ピコぬ市検定(初級)"></a>' +
      '<a href="' + BASE + 'about/piconu-diary.html"><img src="' + BASE + 'images/banners/banner-diary.jpg" alt="ピコぬくん業務日誌 ピコぬくんによる、日々の記録だぬ。"></a>' +
      '<a href="' + BASE + 'facilities/gendaibyo-db.html"><img src="' + BASE + 'images/banners/banner-gendaibyo-db.jpg" alt="現代病データベース キロクぬかクリニックにおける診断記録です。"></a>' +
      '<a href="' + BASE + 'about/gendaibyo-uranai.html"><img src="' + BASE + 'images/banners/banner-gendaibyo-uranai.jpg" alt="今日のラッキー現代病占い あなたに処方される現代病はどれだぬ?"></a>' +
      '<a href="' + BASE + 'game/negi-game.html"><img src="' + BASE + 'images/banners/banner-negi-game.jpg" alt="ネギ盛り限界チャレンジ！カタブツ職員に見つかる前にネギをたくさん盛ろう！"></a>' +
      '<a href="' + BASE + 'about/neko-game.html"><img src="' + BASE + 'images/banners/banner-neko-game.jpg" alt="ピコぬ市 Ifシミュレーション 宝くじと猫と、世界経済の終焉 遊んでみる"></a>' +
      '<a href="' + BASE + 'about/gendaibyo-soudan-game.html"><img src="' + BASE + 'images/banners/banner-gendaibyo-sodan-game.jpg" alt="現代病相談窓口記録ファイル ファイルを見る"></a>' +
      '<a href="' + BASE + 'about/fm-piconu.html"><img src="' + BASE + 'images/banners/banner-fm-piconu.jpg" alt="FMピコぬ「ピックアップ!ピコぬ市ラジオ」 P-800型ピコぬくんがお届けする市政広報ラジオ番組"></a>' +
      "</div></div>";

    var footerHtml =
      '<footer class="site-footer">' +
      '<div class="footer-nav">' +
      "<div><h2>くらしの情報</h2><ul>" +
      '<li><a href="' + BASE + 'services/juminhyo.html">住民票</a></li>' +
      '<li><a href="' + BASE + 'services/koseki.html">戸籍</a></li>' +
      '<li><a href="' + BASE + 'services/gomi.html">ごみ収集</a></li>' +
      '<li><a href="' + BASE + 'services/gendaibyo-sodan.html">現代病相談</a></li>' +
      "</ul></div>" +
      "<div><h2>施設案内</h2><ul>" +
      '<li><a href="' + BASE + 'facilities/kiroku-nuka-clinic.html">キロクぬかクリニック</a></li>' +
      '<li><a href="' + BASE + 'facilities/nukapiko-museum.html">ぬかピコ民芸博物館</a></li>' +
      '<li><a href="' + BASE + 'facilities/shiyakusho.html">市役所</a></li>' +
      '<li><a href="' + BASE + 'facilities/toshokan.html">市立図書館</a></li>' +
      '<li><a href="' + BASE + 'facilities/shokokai.html">ピコぬ市商工会</a></li>' +
      '<li><a href="' + BASE + 'facilities/koutsukyoku.html">ピコぬ市交通局</a></li>' +
      '<li><a href="' + BASE + 'facilities/suidoukyoku.html">上下水道局</a></li>' +
      '<li><a href="' + BASE + 'facilities/keisatsu.html">ピコぬ市警察署</a></li>' +
      '<li><a href="' + BASE + 'facilities/goods.html">公式グッズ</a></li>' +
      "</ul></div>" +
      "<div><h2>市の概要</h2><ul>" +
      '<li><a href="' + BASE + 'about/gaiyou.html">市の概要</a></li>' +
      '<li><a href="' + BASE + 'about/aisatsu.html">市長のごあいさつ</a></li>' +
      '<li><a href="' + BASE + 'about/nukabana.html">ぬかばな(市の花)</a></li>' +
      '<li><a href="' + BASE + 'about/piconu-dori.html">ピコぬどり(市の鳥)</a></li>' +
      '<li><a href="' + BASE + 'about/kanko.html">観光案内</a></li>' +
      '<li><a href="' + BASE + 'about/tokei.html">統計資料</a></li>' +
      '<li><a href="' + BASE + 'about/cable-tv.html">ケーブルテレビ番組表</a></li>' +
      '<li><a href="' + BASE + 'index.html">広報ぬかピコ</a></li>' +
      '<li><a href="' + BASE + 'about/kiriban.html">キリ番について</a></li>' +
      '<li><a href="' + BASE + 'about/piconu-kun.html">ピコぬくんとは</a></li>' +
      '<li><a href="' + BASE + 'about/piconu-diary.html">ピコぬくん業務日誌</a></li>' +
      "</ul></div>" +
      "<div><h2>市政情報</h2><ul>" +
      '<li><a href="' + BASE + 'about/shisei-joho.html">市政情報トップ</a></li>' +
      '<li><a href="' + BASE + 'about/jorei.html">条例集</a></li>' +
      '<li><a href="' + BASE + 'about/pubcomment.html">パブリックコメント</a></li>' +
      '<li><a href="' + BASE + 'about/gijiroku.html">議事録・会議録</a></li>' +
      '<li><a href="' + BASE + 'about/shingikai.html">審議会・附属機関一覧</a></li>' +
      '<li><a href="' + BASE + 'about/saiyo.html">職員採用情報</a></li>' +
      '<li><a href="' + BASE + 'facilities/gendaibyo-db.html">現代病データベース</a></li>' +
      '<li><a href="' + BASE + 'news/index.html">お知らせ一覧</a></li>' +
      "</ul></div>" +
      "<div><h2>お問い合わせ</h2>" +
      '<p class="footer-address">ピコぬ市役所<br>' +
      "〒ピコぬ-1000<br>ピコぬ市中央1丁目1番地<br>" +
      "電話:ぬぬ-ぬかピコ-1000（代表）<br>" +
      "開庁時間:平日 8:30〜17:15</p>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom" style="border-top:none; padding-top:0;">' +
'<span style="font-size:.78rem; color:#a9b8ca;">当サイトは、架空の自治体「ピコぬ市」を舞台にした創作サイトです。実在の自治体・団体・人物とは一切関係ありません。</span>' +
"</div>" +
      '<div class="footer-bottom">' +
      "<span>&copy; Piconu City. 無断複写・転載を禁じます。</span>" +
      '<span><a href="' + BASE + 'privacy.html" style="color:#cdd9e6;">個人情報保護方針</a> / ' +
      '<a href="' + BASE + 'terms.html" style="color:#cdd9e6;">サイトのご利用について</a></span>' +
      "</div>" +
       '<div class="footer-bottom" style="border-top:none; padding-top:0;">' +
      '<span style="font-size:.78rem; color:#a9b8ca;">音楽・効果音の一部はCanvaが提供する素材を利用しています。</span>' +
      "</div>" +
      "</footer>" +
      '<div class="brand-mark"><a href="' + BASE + 'index.html"><img src="' + BASE + 'images/sections/hero-tsunagu.jpg" alt="ピコぬ市 鉄道連結技術・記録文化・現代病医療"></a></div>' +
      '<a href="#top" class="pagetop" id="pagetop" aria-label="ページの先頭へ戻る">↑</a>';

    document.body.insertAdjacentHTML("beforeend", bannerHtml + footerHtml);
  }

  function bindA11yTools() {
    var fsButtons = document.querySelectorAll("[data-fontsize]");
    fsButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var size = btn.getAttribute("data-fontsize");
        document.documentElement.setAttribute("data-fontsize", size);
        fsButtons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        try { localStorage.setItem("piconu-fontsize", size); } catch (e) {}
      });
    });

    var contrastBtn = document.querySelector("[data-contrast-toggle]");
    if (contrastBtn) {
      contrastBtn.addEventListener("click", function () {
        var isHigh = document.documentElement.getAttribute("data-contrast") === "high";
        document.documentElement.setAttribute("data-contrast", isHigh ? "normal" : "high");
        contrastBtn.setAttribute("aria-pressed", isHigh ? "false" : "true");
        try { localStorage.setItem("piconu-contrast", isHigh ? "normal" : "high"); } catch (e) {}
      });
    }

    // 前回設定の復元
    try {
      var savedFs = localStorage.getItem("piconu-fontsize");
      if (savedFs && savedFs !== "normal") {
        document.documentElement.setAttribute("data-fontsize", savedFs);
        var target = document.querySelector('[data-fontsize="' + savedFs + '"]');
        if (target) {
          fsButtons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
          target.setAttribute("aria-pressed", "true");
        }
      }
      var savedContrast = localStorage.getItem("piconu-contrast");
      if (savedContrast === "high") {
        document.documentElement.setAttribute("data-contrast", "high");
        if (contrastBtn) contrastBtn.setAttribute("aria-pressed", "true");
      }
    } catch (e) {}
  }

  function bindNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var navInner = document.getElementById("global-nav-inner");
    if (!toggle || !navInner) return;
    toggle.addEventListener("click", function () {
      var open = navInner.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function bindPageTop() {
    var btn = document.getElementById("pagetop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("visible", window.scrollY > 400);
    });
  }

  function renderKiribanCounter() {
    var el = document.getElementById("kiriban-counter");
    if (!el) return;

    var digitsWrap = el.querySelector(".kiriban-digits");
    var DIGITS = 6;

    function paint(value) {
      var padded = String(value).padStart(DIGITS, "0").slice(-DIGITS);
      digitsWrap.innerHTML = padded
        .split("")
        .map(function (d) { return '<span class="kiriban-digit">' + d + "</span>"; })
        .join("");
    }

    paint(0);

    fetch("https://countapi.mileshilliard.com/api/v1/hit/piconu_city_kirokubunko_toppage")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var num = data && data.value !== undefined ? parseInt(data.value, 10) : NaN;
        if (!isNaN(num)) {
          paint(num);
        }
      })
      .catch(function () {
        el.setAttribute("data-status", "unavailable");
      });
  }

  var searchIndexCache = null;
  var searchIndexPromise = null;

  function loadNewsIndex() {
    return fetch(BASE + "news/index.html?v=" + Date.now())
      .then(function (res) { return res.text(); })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var items = [];
        var lis = doc.querySelectorAll(".notice-list li");
        lis.forEach(function (li) {
          var a = li.querySelector("a");
          if (!a) return;
          var href = a.getAttribute("href");
          if (!href || href === "#") return; // 実ページ未作成のダミーリンクは対象外
          var tag = li.querySelector(".notice-tag");
          items.push({
            title: a.textContent.trim(),
            url: "news/" + href,
            category: "お知らせ" + (tag ? "・" + tag.textContent.trim() : "")
          });
        });
        return items;
      })
      .catch(function () { return []; });
  }

  function loadSearchIndex() {
    if (searchIndexCache) return Promise.resolve(searchIndexCache);
    if (searchIndexPromise) return searchIndexPromise;
    searchIndexPromise = Promise.all([
      fetch(BASE + "data/search-index.json?v=" + Date.now())
        .then(function (res) { return res.json(); })
        .catch(function () { return []; }),
      loadNewsIndex()
    ]).then(function (results) {
      var combined = results[0].concat(results[1]);
      searchIndexCache = combined;
      return combined;
    });
    return searchIndexPromise;
  }

  function renderSearchResults(container, query, items) {
    if (!query) {
      container.hidden = true;
      container.innerHTML = "";
      return;
    }
    if (!items.length) {
      container.innerHTML = '<p class="site-search-empty">「' + query + '」に一致するページが見つかりませんでした。</p>';
      container.hidden = false;
      return;
    }
    var listHtml = items.slice(0, 8).map(function (item) {
      return (
        '<li><a href="' + BASE + item.url + '">' +
        '<span class="site-search-title">' + item.title + "</span>" +
        '<span class="site-search-category">' + item.category + "</span>" +
        "</a></li>"
      );
    }).join("");
    container.innerHTML = "<ul>" + listHtml + "</ul>";
    container.hidden = false;
  }

  function bindSiteSearchInstance(inputId, containerId) {
    var input = document.getElementById(inputId);
    var container = document.getElementById(containerId);
    var form = input ? input.closest("form") : null;
    if (!input || !container || !form) return;

    function runSearch() {
      var query = input.value.trim();
      if (!query) {
        renderSearchResults(container, "", []);
        return;
      }
      loadSearchIndex().then(function (items) {
        var q = query.toLowerCase();
        var matched = items.filter(function (item) {
          return item.title.toLowerCase().indexOf(q) !== -1;
        });
        renderSearchResults(container, query, matched);
      });
    }

    input.addEventListener("input", runSearch);
    input.addEventListener("focus", function () {
      if (input.value.trim()) runSearch();
    });

    form.addEventListener("submit", function () {
      var firstLink = container.querySelector("a");
      if (firstLink) {
        window.location.href = firstLink.getAttribute("href");
      }
    });

    document.addEventListener("click", function (e) {
      if (!form.contains(e.target)) {
        container.hidden = true;
      }
    });
  }

  function bindSiteSearch() {
    bindSiteSearchInstance("site-search", "site-search-results");
    bindSiteSearchInstance("site-search-mobile", "site-search-results-mobile");
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    bindA11yTools();
    bindNavToggle();
    bindPageTop();
    renderKiribanCounter();
    bindSiteSearch();
  });
})();