// Cards remain visible and linked even when JavaScript is unavailable.
const galleryTools = document.querySelector('.gallery-tools');
const galleryGrid = document.querySelector('.gallery-grid');
if (galleryTools && galleryGrid) {
  const cards = Array.from(galleryGrid.querySelectorAll('.design-card'));
  const buttons = Array.from(galleryTools.querySelectorAll('[data-filter]'));
  const count = galleryTools.querySelector('[role="status"]');
  const order = galleryTools.querySelector('select');
  let activeFilter = 'kaikki';

  function updateGallery() {
    let visible = 0;
    cards.forEach(card => {
      const matches = activeFilter === 'kaikki' || card.dataset.styles.split(' ').includes(activeFilter);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    const filterName = buttons.find(button => button.dataset.filter === activeFilter).textContent;
    count.textContent = `${filterName}: ${visible} / ${cards.length} mallia`;
    const sorted = order.value === 'uudet' ? [...cards].reverse() : cards;
    sorted.forEach(card => galleryGrid.append(card));
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    updateGallery();
  }));
  order.addEventListener('change', updateGallery);
  galleryTools.hidden = false;
  updateGallery();
}
