(function () {
  'use strict';
  var main = document.getElementById('main');
  var articles = [];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function thumb(a) {
    return a.image ? '<img class="thumb" src="' + esc(a.image) + '" alt="' + esc(a.imageAlt || '') + '" onerror="this.style.display=\'none\'">' : '';
  }

  function sorted() {
    return articles.slice().sort(function (x, y) { return y.date < x.date ? -1 : y.date > x.date ? 1 : y.id - x.id; });
  }

  function renderList() {
    document.title = 'ピコぬ新聞社 - The News You (Maybe) Need';
    var html = '<div class="list-frame">';
    sorted().slice(0, 10).forEach(function (a) {
      html += '<div class="box">' +
        '<h2><span class="tag">[' + esc(a.category) + ']</span> <a href="#' + a.id + '">' + esc(a.titleEn) + '</a></h2>' +
        '<div>[' + esc(a.categoryJa) + '] ' + esc(a.title) + '</div>' +
        '<div class="meta">' + esc(a.date.replace(/-/g, '.')) + '</div>' +
        thumb(a) +
        '<div>' + esc(a.summary) + '</div>' +
        (a.adminComment ? '<div class="admin">' + esc(a.adminComment) + '</div>' : '') +
        '<div class="clear"></div></div>';
    });
    main.innerHTML = html + '</div><p><a href="#log">→ 過去ログ一覧へ</a></p>';
  }

  function renderDetail(id) {
    var list = sorted();
    var idx = -1, i;
    for (i = 0; i < list.length; i++) { if (list[i].id === id) { idx = i; break; } }
    if (idx < 0) { renderNotFound(); return; }
    var a = list[idx];
    document.title = a.title + ' - ピコぬ新聞社';
    var newer = list[idx - 1], older = list[idx + 1];
    var html = '<div class="box"><h2><span class="tag">[' + esc(a.category) + ']</span> ' + esc(a.titleEn) + '</h2>' +
      '<div><strong>[' + esc(a.categoryJa) + '] ' + esc(a.title) + '</strong></div>' +
      '<div class="meta">' + esc(a.date.replace(/-/g, '.')) + ' / No.' + a.id + '</div><hr>' +
      thumb(a) + '<div class="body">';
    (a.body || []).forEach(function (p) { html += '<p>' + esc(p) + '</p>'; });
    html += '</div><div class="clear"></div>';
    if (a.adminComment) html += '<div class="admin">' + esc(a.adminComment) + '</div>';
    html += '<div class="pager"><span>' + (newer ? '<a href="#' + newer.id + '">&lt;&lt; 新しい記事</a>' : '') + '</span>' +
      '<span>' + (older ? '<a href="#' + older.id + '">古い記事 &gt;&gt;</a>' : '') + '</span></div>' +
      '<p class="back"><a href="#">[トップへ戻る]</a> <a href="#log">[過去ログ]</a></p></div>';
    main.innerHTML = html;
  }

  function renderLog() {
    document.title = '過去ログ - ピコぬ新聞社';
    var html = '<div class="box"><h2>過去ログ</h2><ul class="log-list">';
    sorted().forEach(function (a) {
      html += '<li>' + esc(a.date.replace(/-/g, '.')) + ' <a href="#' + a.id + '">' + esc(a.title) + '</a></li>';
    });
    main.innerHTML = html + '</ul><p class="back"><a href="#">[トップへ戻る]</a></p></div>';
  }

  function renderAbout() {
    document.title = '当サイトについて - ピコぬ新聞社';
    main.innerHTML = '<div class="box"><h2>当サイトについて</h2>' +
      '<div class="body"><p>ピコぬ新聞社は、ピコぬ市内のささやかな出来事を1999年からお伝えしている個人ニュースサイトです。</p>' +
      '<p>リンクはご自由にどうぞ。ニュースのタレコミ、キリ番のご報告は掲示板(準備中)までお願いします。</p>' +
      '<p class="admin">更新は気が向いたときに行います。</p></div>' +
      '<p class="back"><a href="#">[トップへ戻る]</a></p></div>';
  }

  function renderNotFound() {
    document.title = 'ページが見つかりません - ピコぬ新聞社';
    main.innerHTML = '<div class="box"><h2>記事が見つかりません</h2><p>指定された記事は存在しないか、削除された可能性があります。</p>' +
      '<p class="back"><a href="#">[トップへ戻る]</a></p></div>';
  }

  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (h === '' || h === 'list') renderList();
    else if (h === 'log') renderLog();
    else if (h === 'about') renderAbout();
    else if (/^\d+$/.test(h)) renderDetail(parseInt(h, 10));
    else renderNotFound();
    window.scrollTo(0, 0);
  }

  function initCounter() {
    var n = 12345;
    try {
      n = parseInt(localStorage.getItem('pikonu-shimbun-count') || '12344', 10) + 1;
      localStorage.setItem('pikonu-shimbun-count', String(n));
    } catch (e) {}
    var s = String(n);
    while (s.length < 6) s = '0' + s;
    document.getElementById('counter').textContent = s;
  }

  function initMood() {
    var moods = ['Very Nu.', 'Slightly Nu.', 'Nu... probably.', 'Not Nu today.', 'Nu Nu Nu!', 'Nu? Nu.', 'とてもぬ'];
    document.getElementById('nu-mood').textContent = moods[Math.floor(Math.random() * moods.length)];
  }

  initCounter();
  initMood();
  window.addEventListener('hashchange', route);

  fetch('data/articles.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) { articles = data.articles || []; route(); })
    .catch(function () {
      main.innerHTML = '<div class="box"><h2>読み込みエラー</h2><p>記事データ(data/articles.json)を読み込めませんでした。ローカルで開いている場合は、簡易サーバー経由で表示してください。</p></div>';
    });
})();
