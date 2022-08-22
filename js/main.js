document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#copyright-year').innerText =
    new Date().getFullYear();
});
