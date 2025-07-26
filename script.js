// Initialize GlideJS carousel
const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 1,
  autoplay: 4000,
  hoverpause: true,
  gap: 0,
  peek: {
    before: 15,
    after: 15
  },
  animationDuration: 500,
  animationTimingFunc: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  rewind: true,
  rewindDuration: 500,
  loop: false,
  breakpoints: {
    768: {
      peek: {
        before: 12,
        after: 12
      }
    },
    480: {
      peek: {
        before: 8,
        after: 8
      }
    }
  }
});

glide.mount();

// All transitions now use consistent timing for uniform behavior

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
}); 