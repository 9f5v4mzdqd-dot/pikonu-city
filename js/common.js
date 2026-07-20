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
    { key: "about", label: "市政情報", href: "about/gaiyou.html" }
  ];

  function el(html) {
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    return wrap.firstElementChild;
  }

  function renderHeader() {
    var navHtml = NAV_ITEMS.map(function (item) {
      var current = item.key === navCurrent ? ' aria-current="page"' : "";
      return '<a href="' + BASE + item.href + '"' + current + ">" + item.label + "</a>";
    }).join("");

    var breadcrumbHtml = "";
    if (breadcrumb.length) {
      var items = ['<li><a href="' + BASE + 'index.html">ホーム</a></li>'];
      breadcrumb.forEach(function (b, i) {
        if (b.href && i < breadcrumb.length - 1) {
          items.push('<li><a href="' + BASE + b.href + '">' + b.label + "</a></li>");
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
      '<li><a href="' + BASE + 'index.html">English</a></li>' +
      '<li><a href="' + BASE + 'about/gaiyou.html">組織一覧</a></li>' +
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
      '<input id="site-search" type="search" placeholder="サイト内検索">' +
      '<button type="submit">検索</button>' +
      "</form>" +
      "</div></div>" +
      '<nav class="global-nav" aria-label="グローバルナビゲーション">' +
      '<div class="global-nav-inner" id="global-nav-inner">' + navHtml + "</div>" +
      '<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="global-nav-inner">メニュー ☰</button>' +
      "</nav>" +
      breadcrumbHtml +
      "</header>";

    document.body.insertAdjacentHTML("afterbegin", headerHtml);
  }

  function renderFooter() {
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
      '<li><a href="' + BASE + 'facilities/jikan-koritsu-shien-ka.html">時間効率支援課</a></li>' +
      '<li><a href="' + BASE + 'facilities/shiyakusho.html">市役所</a></li>' +
      '<li><a href="' + BASE + 'facilities/toshokan.html">市立図書館</a></li>' +
      '<li><a href="' + BASE + 'facilities/shokokai.html">ピコぬ市商工会</a></li>' +
      '<li><a href="' + BASE + 'facilities/goods.html">公式グッズ</a></li>' +
      "</ul></div>" +
      "<div><h2>市政情報</h2><ul>" +
      '<li><a href="' + BASE + 'about/gaiyou.html">市の概要</a></li>' +
      '<li><a href="' + BASE + 'about/aisatsu.html">市長のごあいさつ</a></li>' +
      '<li><a href="' + BASE + 'about/jorei.html">条例集</a></li>' +
      '<li><a href="' + BASE + 'about/pubcomment.html">パブリックコメント</a></li>' +
      '<li><a href="' + BASE + 'about/shingikai.html">審議会・附属機関一覧</a></li>' +
      '<li><a href="' + BASE + 'about/saiyo.html">職員採用情報</a></li>' +
      '<li><a href="' + BASE + 'about/kanko.html">観光案内</a></li>' +
      '<li><a href="' + BASE + 'about/cable-tv.html">ケーブルテレビ番組表</a></li>' +
      '<li><a href="' + BASE + 'about/gendaibyo-db.html">現代病データベース</a></li>' +
      '<li><a href="' + BASE + 'news/index.html">お知らせ一覧</a></li>' +
      '<li><a href="' + BASE + 'index.html">広報ぬかピコ</a></li>' +
      '<li><a href="' + BASE + 'about/kiriban.html">キリ番について</a></li>' +
      '<li><a href="' + BASE + 'about/piconu-diary.html">ピコぬ君業務日誌</a></li>' +
      "</ul></div>" +
      "<div><h2>お問い合わせ</h2>" +
      '<p class="footer-address">ピコぬ市役所 記録政策課<br>' +
      "〒000-0000<br>ピコぬ市中央一丁目1番地<br>" +
      "電話:00-0000-0000(代表)<br>" +
      "開庁時間:平日 8:30〜17:15</p>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<span>&copy; Piconu City. 無断複写・転載を禁じます。</span>" +
      '<span><a href="' + BASE + 'index.html" style="color:#cdd9e6;">個人情報保護方針</a> / ' +
      '<a href="' + BASE + 'index.html" style="color:#cdd9e6;">サイトのご利用について</a></span>' +
      "</div>" +
      "</footer>" +
      '<a href="#top" class="pagetop" id="pagetop" aria-label="ページの先頭へ戻る">↑</a>';

    document.body.insertAdjacentHTML("beforeend", footerHtml);
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

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    bindA11yTools();
    bindNavToggle();
    bindPageTop();
    renderKiribanCounter();
  });
})();