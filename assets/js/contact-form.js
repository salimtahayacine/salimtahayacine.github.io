/**
 * Contact form handler (GitHub Pages has no PHP: messages are sent through FormSubmit).
 */
(function () {
  "use strict";

  const form = document.getElementById('contact-form');
  if (!form) return;

  const loading = form.querySelector('.loading');
  const errorBox = form.querySelector('.error-message');
  const sent = form.querySelector('.sent-message');
  const button = form.querySelector('button[type="submit"]');
  const endpoint = form.getAttribute('action').replace('formsubmit.co/', 'formsubmit.co/ajax/');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    loading.classList.add('d-block');
    errorBox.classList.remove('d-block');
    sent.classList.remove('d-block');
    button.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || String(data.success) === 'false') {
        throw new Error(data.message || 'Erreur ' + response.status);
      }
      sent.classList.add('d-block');
      form.reset();
    } catch (error) {
      errorBox.innerHTML = "Le message n'a pas pu être envoyé. Écrivez-moi directement à " +
        '<a href="mailto:salimtahayacine@gmail.com">salimtahayacine@gmail.com</a>.';
      errorBox.classList.add('d-block');
    } finally {
      loading.classList.remove('d-block');
      button.disabled = false;
    }
  });
})();
