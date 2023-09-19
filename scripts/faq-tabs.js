window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const pages = document.querySelectorAll('.faq-section__page');

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab--active'));
      pages.forEach((page) =>
        page.classList.remove('faq-section__page--active')
      );
      tab.classList.add('tab--active');
      pages[idx].classList.add('faq-section__page--active');
    });
  });
});
