document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .research-grid article, .principle-list article').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease, border-color .25s ease, background .25s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.project-card.visible,.research-grid article.visible,.principle-list article.visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
