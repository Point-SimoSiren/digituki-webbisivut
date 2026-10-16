document.querySelectorAll('.menu-button').forEach(button => {
  const nav = document.getElementById(button.getAttribute('aria-controls'));
  function close() { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.textContent = 'Valikko'; }
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Sulje' : 'Valikko';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && nav.classList.contains('open')) { close(); button.focus(); } });
});
const dialog = document.querySelector('.demo-dialog');
if (dialog) {
  document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
  dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
}
