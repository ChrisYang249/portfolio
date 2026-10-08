(function () {
  const C = window.CONTENT;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Paragraphs: blank line = new paragraph
  const paras = (s) => esc(s.trim()).split(/\n\s*\n/).map((p) => `<p>${p}</p>`).join('');

  const PROMPTS = {
    intro: 'One or two sentences: who you are and what you build.',
    summary: 'One or two sentences: what this is and why it was needed.',
    built: 'What did you personally build?',
    challenge: 'The hardest technical or other problem, and how you solved it.',
    learned: 'What did you learn?',
    extra: 'What was your part in this paper?',
    question: 'What question did you ask, and what did you find?',
    about: 'A short paragraph about you.',
  };

  // Shows Chris's text, or a visible reminder box while it is still TODO
  const voice = (value, key, cls = '') => {
    if (value === undefined) return '';
    if (value === null) {
      return `<div class="todo ${cls}"><strong>Chris to write</strong> ${esc(PROMPTS[key] || '')}</div>`;
    }
    return `<div class="${cls}">${paras(value)}</div>`;
  };

  const isExternal = (url) => /^https?:\/\//.test(url);
  const linkAttrs = (url) => isExternal(url) ? ' target="_blank" rel="noopener"' : '';
  const hostOf = (url) => { try { return new URL(url).host; } catch (e) { return ''; } };

  const button = (l) => `<a class="btn ${l.primary ? 'btn-primary' : ''}" href="${esc(l.url)}"${linkAttrs(l.url)}>${esc(l.label)}</a>`;

  /* ---------------- Top links ---------------- */
  const p = C.person;
  $('#toplinks').innerHTML = `
    <a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>
    <a href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a href="mailto:${esc(p.email)}">Email</a>`;

  /* ---------------- Hero ---------------- */
  const liveRows = C.projects.map((pr) => {
    const demo = pr.links.find((l) => l.primary);
    return `
      <li class="live-row">
        <span class="live-dot" aria-hidden="true"></span>
        <div class="live-text">
          <a class="live-title" href="#${pr.id}">${esc(pr.title)}</a>
          <span class="live-for">${esc(pr.shortFor || pr.builtFor)}</span>
        </div>
        ${demo ? `<a class="btn btn-small" href="${esc(demo.url)}" target="_blank" rel="noopener" aria-label="Open live demo of ${esc(pr.title)}">Open demo</a>` : ''}
      </li>`;
  }).join('');

  const nameParts = p.name.split(' ');
  $('#hero').innerHTML = `
    <div class="hero-main">
      <img class="headshot" src="${esc(p.headshot)}" alt="Portrait of ${esc(p.name)}" width="88" height="88">
      <h1 class="name"><span>${esc(nameParts[0])}</span> <span>${esc(nameParts.slice(1).join(' '))}</span></h1>
      <p class="hero-meta">${esc(p.school)}<br>${esc(p.base)}</p>
      ${voice(p.intro, 'intro', 'hero-intro')}
    </div>
    <aside class="switchboard" aria-labelledby="sb-h">
      <h2 id="sb-h">Try the live demos</h2>
      <ul>${liveRows}</ul>
      <p class="sb-note">All four run on sample data and open in a new tab.</p>
    </aside>`;

  /* ---------------- Projects ---------------- */
  $('#work-intro').textContent = C.workIntro || '';
  const gallery = (pr) => {
    const demo = pr.links.find((l) => l.primary);
    const first = pr.gallery[0];
    const thumbs = pr.gallery.length > 1 ? `
      <div class="thumbs" role="group" aria-label="${esc(pr.title)} screenshots">
        ${pr.gallery.map((g, i) => `
          <button class="thumb ${i === 0 ? 'is-on' : ''}" data-src="${esc(g.src)}" data-alt="${esc(g.alt)}" aria-pressed="${i === 0}">
            <img src="${esc(g.src)}" alt="" loading="lazy">
            <span class="sr">${esc(g.alt)}</span>
          </button>`).join('')}
      </div>` : '';
    return `
      <figure class="frame">
        <div class="frame-bar">
          <span class="frame-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          ${demo ? `<a class="frame-url" href="${esc(demo.url)}" target="_blank" rel="noopener">${esc(hostOf(demo.url))}</a>` : ''}
        </div>
        <button class="frame-shot" data-zoom aria-label="Enlarge screenshot">
          <img class="main-shot" src="${esc(first.src)}" alt="${esc(first.alt)}" loading="lazy">
        </button>
        <figcaption class="frame-cap">${esc(first.alt)}</figcaption>
      </figure>
      ${thumbs}`;
  };

  const facts = (rows) => rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

  $('#projects').innerHTML = C.projects.map((pr) => `
    <article class="project" id="${esc(pr.id)}" aria-labelledby="${esc(pr.id)}-h">
      <div class="wrap">
        <header class="project-head">
          <h3 id="${esc(pr.id)}-h">${esc(pr.title)}</h3>
          <p class="tagline">${esc(pr.tagline)}</p>
          ${voice(pr.summary, 'summary', 'summary')}
        </header>
        <div class="project-grid">
          <div class="project-media" data-gallery>${gallery(pr)}
            ${pr.video ? `
              <figure class="video">
                <video controls preload="none" playsinline poster="${esc(pr.video.poster)}">
                  <source src="${esc(pr.video.src)}" type="video/mp4">
                </video>
                <figcaption>${esc(pr.video.caption)}</figcaption>
              </figure>` : ''}
          </div>
          <div class="project-side">
            <div class="actions">${pr.links.map(button).join('')}</div>
            ${pr.demoNote ? `<p class="demo-note">${esc(pr.demoNote)}</p>` : ''}
            <dl class="facts">
              ${facts([[ 'Built for', pr.builtFor ], [ 'When', pr.when ], [ 'My role', pr.role ]])}
              <div><dt>Stack</dt><dd><ul class="chips">${pr.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></dd></div>
              ${facts(pr.facts)}
              ${facts([[ 'Status', pr.status ]])}
            </dl>
          </div>
        </div>
        <div class="story">
          <section><h4>What I built</h4>${voice(pr.built, 'built')}</section>
          <section><h4>The hard part</h4>${voice(pr.challenge, 'challenge')}</section>
          <section><h4>What I learned</h4>${voice(pr.learned, 'learned')}</section>
        </div>
      </div>
    </article>`).join('');

  /* ---------------- Research ---------------- */
  $('#research-list').innerHTML = C.research.map((r, i) => `
    <article class="paper ${i === 0 ? 'paper-lead' : ''}" id="${esc(r.id)}" aria-labelledby="${esc(r.id)}-h">
      <div class="paper-text">
        <p class="credit">${esc(r.credit)}</p>
        <h3 id="${esc(r.id)}-h">${esc(r.title)}</h3>
        <p class="venue">${esc(r.venue)}</p>
        <p class="authors">${esc(r.authors)}</p>
        ${r.extra === null ? voice(null, 'extra') : (r.extra ? `<p class="extra">${esc(r.extra)}</p>` : '')}
        ${r.stats ? `<dl class="stats">${r.stats.map(([n, l]) => `<div><dt>${esc(n)}</dt><dd>${esc(l)}</dd></div>`).join('')}</dl>` : ''}
        ${r.summary ? voice(r.summary, 'question') : (r.summary === null && i < 2 ? voice(null, 'question') : '')}
        ${r.learned ? voice(r.learned, 'learned') : (r.learned === null && i < 2 ? voice(null, 'learned') : '')}
        <div class="actions">${r.links.map(button).join('')}</div>
      </div>
      ${r.image ? `
        <div class="paper-media">
          <button class="paper-img" data-zoom aria-label="Enlarge: ${esc(r.image.alt)}">
            <img src="${esc(r.image.src)}" alt="${esc(r.image.alt)}" loading="lazy">
          </button>
          ${r.photos ? `<div class="paper-photos">${r.photos.map((ph) => `
            <button class="paper-photo" data-zoom aria-label="Enlarge: ${esc(ph.alt)}"><img src="${esc(ph.src)}" alt="${esc(ph.alt)}" loading="lazy"></button>`).join('')}</div>` : ''}
        </div>` : ''}
    </article>`).join('');

  /* ---------------- More ---------------- */
  $('#more-list').innerHTML = C.more.filter((m) => m.show).map((m) => `
    <li>
      <h3>${m.url ? `<a href="${esc(m.url)}"${linkAttrs(m.url)}>${esc(m.title)}</a>` : esc(m.title)}</h3>
      <p class="where">${esc(m.where)}</p>
      <p>${esc(m.text)}</p>
    </li>`).join('');

  /* ---------------- About ---------------- */
  const a = C.about;
  $('#about-inner').innerHTML = `
    <img class="about-photo" src="${esc(a.photo)}" alt="${esc(a.photoAlt)}" loading="lazy" width="231" height="696">
    <div class="about-text">
      <h2 class="section-h" id="about-h">About</h2>
      ${voice(a.text, 'about', 'about-body')}
      <dl class="facts facts-about">${facts(a.facts)}</dl>
    </div>`;

  /* ---------------- Footer ---------------- */
  $('#footer').innerHTML = `
    <p class="footer-name">${esc(p.name)}</p>
    <p><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
    <p><a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a> <a href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></p>`;

  /* ---------------- Gallery switching ---------------- */
  document.querySelectorAll('[data-gallery]').forEach((g) => {
    const main = g.querySelector('.main-shot');
    const cap = g.querySelector('.frame-cap');
    g.querySelectorAll('.thumb').forEach((t) => {
      t.addEventListener('click', () => {
        main.src = t.dataset.src;
        main.alt = t.dataset.alt;
        cap.textContent = t.dataset.alt;
        g.querySelectorAll('.thumb').forEach((x) => {
          x.classList.toggle('is-on', x === t);
          x.setAttribute('aria-pressed', x === t);
        });
      });
    });
  });

  /* ---------------- Lightbox ---------------- */
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  const lbCap = $('#lightbox-cap');
  document.querySelectorAll('[data-zoom]').forEach((b) => {
    b.addEventListener('click', () => {
      const img = b.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = img.alt;
      if (typeof lb.showModal === 'function') lb.showModal();
      else window.open(img.src, '_blank');
    });
  });
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

  /* Report unfinished text in the browser console */
  const left = document.querySelectorAll('.todo').length;
  if (left) console.info(`${left} text field(s) still marked TODO in content.js`);
})();
