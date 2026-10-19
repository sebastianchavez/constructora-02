(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form)) {
        showSuccess(form);
      }
    });

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(field);
      });
    });
  });

  function validateForm(form) {
    let ok = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!validateField(field)) ok = false;
    });
    return ok;
  }

  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let valid = true;
    let message = '';

    if (!value) {
      valid = false;
      message = 'Este campo es obligatorio';
    } else if (type === 'email') {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(value)) { valid = false; message = 'Email inválido'; }
    } else if (type === 'tel') {
      const normalized = value.replace(/[\s()\-]/g, '');
      const re = /^(?:\+?56)?[2-9]\d{8}$/;
      if (!re.test(normalized)) { valid = false; message = 'Ingresa un teléfono chileno de 9 dígitos, con +56 opcional'; }
    }

    field.classList.toggle('error', !valid);
    field.classList.toggle('success', valid && value);
    const errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) errorEl.textContent = message;
    return valid;
  }

  function showSuccess(form) {
    const successBox = document.querySelector('[data-success]');
    if (successBox) {
      successBox.classList.remove('hidden');
      form.classList.add('hidden');
      window.scrollTo({ top: successBox.offsetTop - 100, behavior: 'smooth' });
      setTimeout(() => {
        successBox.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
        form.querySelectorAll('.form-input').forEach(f => f.classList.remove('success'));
      }, 5000);
    } else {
      form.reset();
      alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
    }
  }

  window.AppContact = { validateForm, validateField };
})();
