(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initFilters();
    initLightbox();
  });

  function renderGallery() {
    const grid = document.querySelector('[data-gallery-grid]');
    if (!grid || !window.APP_DATA) return;

    grid.innerHTML = window.APP_DATA.PROJECTS.map(p => `
      <article class="project-card group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md animate-on-scroll" data-category="${p.category}" data-image="${p.image}">
        <div class="relative overflow-hidden aspect-[4/3]">
          <img src="${p.image}" alt="${p.title}" loading="lazy" class="project-image w-full h-full object-cover" />
          <div class="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div class="text-white">
              <p class="text-xs uppercase tracking-widest text-yellow-400 mb-1">${p.category}</p>
              <h3 class="text-xl font-bold font-poppins">${p.title}</h3>
              <p class="text-sm text-gray-300 mt-1">${p.location} · ${p.year}</p>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    setTimeout(() => {
      document.querySelectorAll('[data-gallery-grid] .animate-on-scroll').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 100);
  }

  function initFilters() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach(b => {
          b.classList.remove('bg-yellow-500', 'text-white');
          b.classList.add('bg-white', 'text-gray-700');
        });
        btn.classList.add('bg-yellow-500', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-700');

        document.querySelectorAll('[data-gallery-grid] [data-category]').forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  function initLightbox() {
    const grid = document.querySelector('[data-gallery-grid]');
    if (!grid) return;

    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
        </button>
        <img alt="Imagen ampliada" />
      `;
      document.body.appendChild(lightbox);
    }

    const img = lightbox.querySelector('img');
    const close = lightbox.querySelector('.lightbox-close');

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-image]');
      if (!card) return;
      img.src = card.dataset.image;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };
    close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  window.AppGallery = { renderGallery };
})();