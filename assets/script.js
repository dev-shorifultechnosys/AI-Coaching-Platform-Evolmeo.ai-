(() => {
  document.documentElement.classList.add('motion-ready');
  const ICONS = {
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>', play:'<path d="m9 7 8 5-8 5V7Z"/>', lock:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>', spark:'<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/>', check:'<path d="m5 12 4 4L19 6"/>', message:'<path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8.5 8.5 0 1 1 21 12Z"/>', compass:'<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/>', journal:'<path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h4"/>', arrowUp:'<path d="m8 16 8-8M9 8h7v7"/>', chart:'<path d="M5 19V9M12 19V5M19 19v-7"/>', file:'<path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h4"/>', mic:'<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>', user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', shield:'<path d="M12 3 19 6v5c0 4.5-2.7 8-7 10-4.3-2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/>', memory:'<path d="M8 6h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"/><path d="M9 10h6M9 14h4M9 3v3M15 3v3M9 18v3M15 18v3M2 10h3M2 14h3M19 10h3M19 14h3"/>', trash:'<path d="M4 7h16M9 3h6l1 4H8l1-4ZM7 7l1 14h8l1-14"/>', home:'<path d="M3 11 12 4l9 7v8a2 2 0 0 1-2 2h-5v-6h-4v6H5a2 2 0 0 1-2-2v-8Z"/>', wand:'<path d="m15 4 5 5L8 21H3v-5L15 4Z"/><path d="m14 5 5 5"/>', history:'<path d="M4 12a8 8 0 1 0 2-5.3M4 4v5h5"/><path d="M12 8v5l3 2"/>', card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>', settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3h4a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1H21v4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>', more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>', search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>', moon:'<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z"/>', clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4V2M20 12h2"/>', shuffle:'<path d="M4 7h3c5 0 5 10 10 10h3M17 14l3 3-3 3M4 17h3c2 0 3-.7 4-2M17 4l3 3-3 3"/>', heart:'<path d="M20.8 5.7a5.3 5.3 0 0 0-7.5 0L12 7l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.8a5.3 5.3 0 0 0 0-7.5Z"/>', chevronDown:'<path d="m7 10 5 5 5-5"/>', logout:'<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5"/><path d="m15 16 4-4-4-4M19 12H9"/>'
  };
  const renderIcons = (root=document) => root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (!ICONS[name]) return;
    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
  });
  renderIcons();

  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    }), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else revealEls.forEach(el => el.classList.add('in-view'));

  const billingBtns = document.querySelectorAll('[data-billing]');
  if (billingBtns.length) billingBtns.forEach(btn => btn.addEventListener('click', () => {
    billingBtns.forEach(b => b.classList.toggle('active', b === btn));
    const mode = btn.dataset.billing;
    document.querySelectorAll('[data-price]').forEach(p => {
      p.textContent = p.dataset[mode] || p.dataset.month;
    });
  }));

  const modeCopy = {
    text: { title: 'Talk it through in your own words.', body: `
      <div class="chat-bubble user">I keep circling the same work decision.</div>
      <div class="chat-bubble meo">What would become easier if you stopped trying to preserve every option?</div>
      <div class="chat-bubble user small">I could finally name the trade-off.</div>` },
    voice: { title: 'Say it out loud. Hear what shifts.', body: `
      <div class="voice-demo"><span class="voice-bars"><i></i><i></i><i></i><i></i><i></i><i></i></span><strong>Listening to your reflection…</strong></div>
      <div class="chat-bubble meo">Take your time. What feels most important in what you just said?</div>` },
    avatar: { title: 'Choose a presence that feels natural.', body: `
      <div class="avatar-demo"><div class="avatar avatar-small">M</div><div><strong>Meo</strong><small>Warm · direct · reflective</small></div></div>
      <div class="chat-bubble meo">We can slow this down and work with one part at a time.</div>` }
  };
  document.querySelectorAll('.mode-tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.mode-tab').forEach(t => { t.classList.toggle('active', t===tab); t.setAttribute('aria-selected', String(t===tab)); });
    const mode = modeCopy[tab.dataset.mode];
    const title = document.querySelector('[data-mode-title]');
    const content = document.querySelector('[data-mode-content]');
    if (title && content && mode) { title.textContent = mode.title; content.innerHTML = mode.body; }
  }));

  const sidebar = document.querySelector('[data-sidebar]');
  const backdrop = document.querySelector('[data-sidebar-backdrop]');
  const openSidebar = () => { sidebar?.classList.add('open'); backdrop?.classList.add('open'); document.body.style.overflow='hidden'; };
  const closeSidebar = () => { sidebar?.classList.remove('open'); backdrop?.classList.remove('open'); document.body.style.overflow=''; };
  document.querySelector('[data-sidebar-open]')?.addEventListener('click', openSidebar);
  document.querySelector('[data-sidebar-close]')?.addEventListener('click', closeSidebar);
  backdrop?.addEventListener('click', closeSidebar);
  sidebar?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { sidebar.querySelectorAll('.dash-nav a').forEach(x=>x.classList.remove('active')); if(a.closest('.dash-nav')) a.classList.add('active'); if(innerWidth<821) closeSidebar(); }));

  const modal = document.querySelector('[data-session-modal]');
  const openModal = () => { if (!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
  const closeModal = () => { if (!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  document.querySelectorAll('[data-open-session]').forEach(btn => btn.addEventListener('click', openModal));
  document.querySelectorAll('[data-close-session]').forEach(btn => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });


  // User profile menus are available anywhere the signed-in user appears.
  const accountWraps = [...document.querySelectorAll('[data-account-wrap]')];
  const closeAccountMenus = (except=null) => accountWraps.forEach(w => {
    if (w === except) return;
    w.classList.remove('open');
    w.querySelector('[data-account-trigger]')?.setAttribute('aria-expanded','false');
  });
  accountWraps.forEach(wrap => {
    const trigger = wrap.querySelector('[data-account-trigger]');
    trigger?.addEventListener('click', e => {
      e.stopPropagation();
      const willOpen = !wrap.classList.contains('open');
      closeAccountMenus(wrap);
      wrap.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
    wrap.querySelector('[data-account-menu]')?.addEventListener('click', e => e.stopPropagation());
  });
  document.addEventListener('click', () => closeAccountMenus());

  document.querySelectorAll('[data-logout]').forEach(btn => btn.addEventListener('click', () => {
    btn.disabled = true;
    const strong = btn.querySelector('strong');
    if (strong) strong.textContent = 'Signing out…';
    setTimeout(() => { window.location.href = 'index.html'; }, 450);
  }));

  const saveSettings = document.querySelector('[data-save-settings]');
  const settingsToast = document.querySelector('[data-settings-toast]');
  saveSettings?.addEventListener('click', () => {
    settingsToast?.classList.add('show');
    setTimeout(() => settingsToast?.classList.remove('show'), 2200);
  });

  document.querySelectorAll('[data-session-row]').forEach(row => row.addEventListener('click', () => {
    row.classList.toggle('selected');
  }));
})();
