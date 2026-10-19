(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollTop();
    initCurrentYear();
  });

  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 60) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop();
      if (linkPage === currentPath || (currentPath === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const close = document.querySelector('.mobile-close');
    if (!toggle || !menu) return;

    menu.id = 'mobile-navigation';
    menu.inert = true;
    toggle.setAttribute('aria-controls', menu.id);
    toggle.setAttribute('aria-expanded', 'false');
    close && close.setAttribute('aria-label', 'Cerrar menú');

    const openMenu = () => {
      menu.classList.add('open');
      overlay && overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      menu.inert = false;
      toggle.setAttribute('aria-expanded', 'true');
      close && close.focus();
    };
    const closeMenu = () => {
      menu.classList.remove('open');
      overlay && overlay.classList.remove('open');
      document.body.style.overflow = '';
      menu.inert = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    };

    toggle.addEventListener('click', openMenu);
    close && close.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (!menu.classList.contains('open')) return;
      if (event.key === 'Escape') closeMenu();
      if (event.key === 'Tab') {
        const controls = [...menu.querySelectorAll('a[href], button')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
      if (event.matches && menu.classList.contains('open')) closeMenu();
    });
  }

  function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initCurrentYear() {
    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  }

  window.AppUI = { initNavbar, initMobileMenu, initScrollTop };
})();
