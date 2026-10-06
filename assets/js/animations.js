(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initCounters();
    initTestimonialCarousel();
  });

  let scrollObserver = null;
  let mutationObserver = null;

  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach(t => t.classList.add('is-visible'));
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList && node.classList.contains('animate-on-scroll')) {
              scrollObserver.observe(node);
            }
            if (node.querySelectorAll) {
              node.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));
            }
          });
        });
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    document.querySelectorAll('.animate-on-scroll').forEach(t => scrollObserver.observe(t));

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 4000);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    setTimeout(() => {
      document.querySelectorAll('[data-counter]').forEach(el => {
        if (el.textContent === '0' || el.textContent === '0' + el.dataset.suffix) animate(el);
      });
    }, 4000);
  }

  function initTestimonialCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('[data-slide]');
    const dots = carousel.querySelectorAll('[data-dot]');
    if (slides.length <= 1) return;

    let idx = 0;
    let timer;

    const show = (i) => {
      slides.forEach((s, n) => {
        s.classList.toggle('opacity-100', n === i);
        s.classList.toggle('opacity-0', n !== i);
      });
      dots.forEach((d, n) => {
        d.classList.toggle('bg-yellow-500', n === i);
        d.classList.toggle('bg-gray-300', n !== i);
      });
      idx = i;
    };

    const next = () => show((idx + 1) % slides.length);
    const start = () => { timer = setInterval(next, 5000); };
    const stop = () => clearInterval(timer);

    dots.forEach((dot, i) => dot.addEventListener('click', () => { stop(); show(i); start(); }));
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    start();
  }

  window.AppAnimations = { initScrollAnimations, initCounters };
})();