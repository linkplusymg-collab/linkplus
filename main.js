// Sticky CTA: ヒーロー部分を過ぎたら表示
const stickyCta = document.getElementById('sticky-cta');
const hero = document.getElementById('hero');

if (stickyCta && hero) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        stickyCta.classList.add('is-visible');
        stickyCta.removeAttribute('aria-hidden');
      } else {
        stickyCta.classList.remove('is-visible');
        stickyCta.setAttribute('aria-hidden', 'true');
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(hero);
}

// FAQ: detailsのopen/close切り替え（Safari対応）
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('toggle', () => {
    const summary = item.querySelector('summary');
    if (summary) {
      summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
    }
  });
});
