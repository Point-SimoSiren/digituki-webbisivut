const contactForm = document.getElementById('tarmola-contact-form');

if (contactForm) {
  const healthUrl = 'https://tcg-lomakeapi.onrender.com/health';
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-form-status');
  const nameField = contactForm.elements.namedItem('name');
  const emailField = contactForm.elements.namedItem('email');
  const messageField = contactForm.elements.namedItem('message');
  const retryButton = document.createElement('button');
  retryButton.type = 'button';
  retryButton.className = 'contact-form-retry';
  retryButton.textContent = 'Yritä uudelleen';
  retryButton.hidden = true;
  status.insertAdjacentElement('afterend', retryButton);
  let apiReady = false;

  const showStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  const prepareForm = async () => {
    apiReady = false;
    submitButton.disabled = true;
    retryButton.hidden = true;
    showStatus('Valmistellaan yhteydenottolomaketta. Tämä voi kestää noin minuutin…', 'loading');

    // A sleeping Render service can take about a minute to start.
    const deadline = Date.now() + 90000;
    while (Date.now() < deadline) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(healthUrl, {
          cache: 'no-store',
          signal: controller.signal,
        });
        const result = await response.json();
        if (response.ok && result.status === 'ok') {
          apiReady = true;
          submitButton.disabled = false;
          showStatus('Yhteydenottolomake on valmis.', 'ready');
          return;
        }
      } catch {
        // A cold start can briefly return a loading page or a network error.
      } finally {
        clearTimeout(timeout);
      }
      if (Date.now() < deadline) {
        await new Promise(resolve => setTimeout(resolve, 4000));
      }
    }

    showStatus('Lomaketta ei saatu valmiiksi. Yritä uudelleen tai ota yhteyttä puhelimitse tai sähköpostitse.', 'error');
    retryButton.hidden = false;
  };

  retryButton.addEventListener('click', prepareForm);
  prepareForm();

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!apiReady) return;

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    if (!name || !email || !message) {
      showStatus('Täytä kaikki kentät ennen lähettämistä.', 'error');
      (!name ? nameField : !email ? emailField : messageField).focus();
      return;
    }

    submitButton.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    showStatus('Lähetetään viestiä…', 'sending');

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteId: 'tarmola-code', name, email, message }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(`Lähetys epäonnistui (${response.status}): ${result?.error ?? 'Tuntematon virhe'}`);
      }

      contactForm.reset();
      showStatus('Kiitos viestistäsi! Viesti lähetettiin onnistuneesti.', 'success');
    } catch (error) {
      console.error('Yhteydenottolomakkeen lähetys epäonnistui:', error);
      showStatus('Viestin lähetys epäonnistui. Yritä myöhemmin uudelleen tai ota yhteyttä puhelimitse tai sähköpostitse.', 'error');
    } finally {
      submitButton.disabled = !apiReady;
      contactForm.removeAttribute('aria-busy');
    }
  });
}
