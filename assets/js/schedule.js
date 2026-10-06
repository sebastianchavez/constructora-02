(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    initDayFilter();
    initFaq();
  });

  function renderCourses() {
    const grid = document.querySelector('[data-schedule-grid]');
    if (!grid || !window.APP_DATA) return;

    grid.innerHTML = window.APP_DATA.COURSES.map(c => `
      <article class="course-card bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll" data-days="${c.days.join(',')}">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full opacity-10 -mr-10 -mt-10"></div>
          <span class="inline-block px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-xs font-semibold mb-3">${c.category}</span>
          <h3 class="text-xl font-bold font-poppins mb-2">${c.title}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">${c.description}</p>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-wide">Instructor</p>
              <p class="font-semibold text-gray-800">${c.instructor}</p>
            </div>
            <div class="text-right">
              <p class="text-xs text-gray-500 uppercase tracking-wide">Duración</p>
              <p class="font-semibold text-gray-800">${c.duration}</p>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-xs text-gray-500 uppercase tracking-wide mb-2">Días y horarios</p>
            <div>
              ${c.days.map(d => `<span class="day-badge">${d}</span>`).join('')}
            </div>
            <p class="text-sm text-gray-700 mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${c.hours}
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p class="text-xs text-gray-500">Inversión</p>
              <p class="text-2xl font-bold text-yellow-600">S/ ${c.price}</p>
            </div>
            <button data-inscribe="${c.id}" class="btn-primary px-5 py-2 rounded-lg font-semibold text-sm">Inscribirme</button>
          </div>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('[data-inscribe]').forEach(btn => {
      btn.addEventListener('click', () => {
        const course = window.APP_DATA.COURSES.find(c => c.id === parseInt(btn.dataset.inscribe, 10));
        if (course) {
          alert(`Inscripción al curso "${course.title}" iniciada.\nEn la versión final, esto abrirá un formulario de pago o contacto.`);
        }
      });
    });
  }

  function initDayFilter() {
    const buttons = document.querySelectorAll('[data-day-filter]');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const day = btn.dataset.dayFilter;
        buttons.forEach(b => {
          b.classList.remove('bg-yellow-500', 'text-white');
          b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
        });
        btn.classList.add('bg-yellow-500', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');

        document.querySelectorAll('[data-schedule-grid] [data-days]').forEach(card => {
          const days = (card.dataset.days || '').split(',');
          const match = day === 'all' || days.includes(day);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  window.AppSchedule = { renderCourses };
})();