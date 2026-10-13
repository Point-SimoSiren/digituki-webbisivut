const contactForm = document.getElementById('tarmola-contact-form');

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-form-status');
  const nameField = contactForm.elements.namedItem('name');
  const emailField = contactForm.elements.namedItem('email');
  const messageField = contactForm.elements.namedItem('message');

  const showStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

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
      submitButton.disabled = false;
      contactForm.removeAttribute('aria-busy');
    }
  });

  submitButton.disabled = false;
}
