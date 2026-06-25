// Lógica Javascript para a Landing Page da Pousada Dilis

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    // Fechar menu mobile ao clicar em um link
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // 2. Animação de Scroll Reveal usando IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Deixa de observar depois que ativa
        }
      });
    }, {
      threshold: 0.1, // Dispara quando 10% do elemento está visível
      rootMargin: '0px 0px -50px 0px' // Margem na parte inferior para ativar um pouco antes de aparecer totalmente
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback para navegadores antigos
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }

  // 3. Efeito de scroll no Header (adicionar sombra/mudança de background quando rolar)
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('shadow-lg', 'bg-opacity-95');
    } else {
      header?.classList.remove('shadow-lg', 'bg-opacity-95');
    }
  }, { passive: true });
});
