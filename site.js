(() => {
  'use strict';
  const paths = {
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    'arrow-down': '<path d="M12 4v16M6 14l6 6 6-6"/>',
    'arrow-right': '<path d="M4 12h16M14 6l6 6-6 6"/>',
    'arrow-left': '<path d="M20 12H4M10 6l-6 6 6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    music: '<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    transfer: '<path d="M4 7h16m-5-5 5 5-5 5M20 17H4m5-5-5 5 5 5"/>',
    smartphone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 5h4M11 19h2"/>',
    'sd-card': '<path d="M5 3h10l5 5v13H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 4v5m4-5v5m4-3v3M8 15h8M8 18h5"/>',
    chart: '<path d="M21 12a9 9 0 1 1-9-9v9zM16 3a9 9 0 0 1 5 5h-5z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    sliders: '<path d="M4 7h7m4 0h5M4 17h3m4 0h9"/><circle cx="13" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
    'shield-check': '<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6zM8 12l3 3 5-6"/>',
    sparkles: '<path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7zM20 2v4m-2-2h4"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    repeat: '<path d="M4 8a3 3 0 0 1 3-3h13m-4-4 4 4-4 4M20 16a3 3 0 0 1-3 3H4m4-4-4 4 4 4"/>',
    history: '<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7M12 7v5l3 2"/>',
    'eye-off': '<path d="m3 3 18 18M10.5 10.5a2 2 0 0 0 3 3M6.5 6.5A18 18 0 0 0 2 12s4 7 10 7a13 13 0 0 0 5.5-1.5M10 5.2c.7-.1 1.3-.2 2-.2 6 0 10 7 10 7a19 19 0 0 1-3 3.5"/>',
    'play-circle': '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="m6 6 12 12M6 18 18 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    'heart-handshake': '<path d="M12 6C7 0 0 6 4 11l8 9 8-9c4-5-3-11-8-5zM12 6l-3 4a2 2 0 0 0 3 2l2-2 4 5M7 15l2-2"/>'
  };
  function iconMarkup(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (paths[name] || paths.file) + '</svg>';
  }
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = iconMarkup(el.dataset.icon); });
  const settings = window.MOVEIT_SITE;
  if (settings && /^https:\/\/galaxystore\.samsung\.com\//.test(settings.storeUrl)) {
    document.querySelectorAll('[data-store-link]').forEach(el => { el.href = settings.storeUrl; });
  }
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const modes = {
    move: {
      title: 'A new home, after verification.',
      text: 'MoveIt copies the selected file to your destination. When that copy passes your chosen verification, MoveIt attempts to remove the original.',
      outcome: 'Original removed only after verification passes'
    },
    copy: {
      title: 'A second copy. Your original stays.',
      text: 'MoveIt copies the selected file to your destination and checks it with your chosen verification method. The original file stays in its source folder.',
      outcome: 'Original stays in place after copying'
    }
  };
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
    const value = modes[button.dataset.mode];
    if (!value) return;
    document.querySelectorAll('[data-mode]').forEach(other => {
      const selected = other === button;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('mode-title').textContent = value.title;
    document.getElementById('mode-text').textContent = value.text;
    document.getElementById('mode-outcome').innerHTML = iconMarkup('check');
    document.getElementById('mode-outcome').append(document.createTextNode(value.outcome));
  }));

  const tabs = [...document.querySelectorAll('[data-gallery-tab]')];
  let selectedGallery = 'app';
  function activeTrack() { return document.getElementById('gallery-' + selectedGallery); }
  function updateGalleryButtons() {
    const track = activeTrack();
    if (!track) return;
    const previous = document.querySelector('[data-gallery-prev]');
    const next = document.querySelector('[data-gallery-next]');
    if (previous) previous.disabled = track.scrollLeft < 4;
    if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  function selectGallery(tab, focus = false) {
    selectedGallery = tab.dataset.galleryTab;
    tabs.forEach(other => {
      const selected = tab === other;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-selected', String(selected));
      other.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(other.getAttribute('aria-controls'));
      if (panel) panel.hidden = !selected;
    });
    const note = document.getElementById('gallery-note');
    if (note) note.textContent = selectedGallery === 'app'
      ? 'Actual app captures. Example content and available storage vary by device. Some screens use English.'
      : 'Promotional compositions based on the app. These are feature illustrations, separate from the actual app captures.';
    if (focus) tab.focus();
    updateGalleryButtons();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectGallery(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectGallery(tabs[next], true);
    });
  });
  const scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => {
    const track = activeTrack();
    track?.scrollBy({left: -track.clientWidth * 0.78, behavior: scrollBehavior});
  });
  document.querySelector('[data-gallery-next]')?.addEventListener('click', () => {
    const track = activeTrack();
    track?.scrollBy({left: track.clientWidth * 0.78, behavior: scrollBehavior});
  });
  document.querySelectorAll('.gallery-track').forEach(track => track.addEventListener('scroll', updateGalleryButtons, {passive: true}));
  window.addEventListener('resize', updateGalleryButtons, {passive: true});
  updateGalleryButtons();

  const dialog = document.getElementById('screenshot-dialog');
  let previews = [], previewIndex = 0, lastPreviewButton;
  function showImage(index) {
    previewIndex = (index + previews.length) % previews.length;
    const button = previews[previewIndex];
    const image = document.getElementById('lightbox-image');
    image.src = button.dataset.preview;
    image.alt = button.querySelector('img')?.alt || button.dataset.caption;
    document.getElementById('lightbox-caption').textContent = button.dataset.caption;
    document.getElementById('lightbox-count').textContent = (previewIndex + 1) + ' / ' + previews.length;
  }
  document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => {
    if (!dialog || !dialog.showModal) {
      window.open(button.dataset.preview, '_blank', 'noopener');
      return;
    }
    previews = [...button.closest('.gallery-track').querySelectorAll('[data-preview]')];
    lastPreviewButton = button;
    showImage(previews.indexOf(button));
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector('[data-close-preview]').focus();
  }));
  document.querySelector('[data-close-preview]')?.addEventListener('click', () => dialog.close());
  document.querySelector('[data-preview-prev]')?.addEventListener('click', () => showImage(previewIndex - 1));
  document.querySelector('[data-preview-next]')?.addEventListener('click', () => showImage(previewIndex + 1));
  dialog?.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showImage(previewIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(previewIndex - 1); }
  });
  dialog?.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    lastPreviewButton?.focus({preventScroll: true});
  });
  dialog?.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });

  document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
    const text = settings?.supportEmail || 'chennoufo11@gmail.com';
    const status = document.querySelector('[data-copy-status]');
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Email us at ' + text;
    }
  });
})();
