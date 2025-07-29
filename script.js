// Initialize GlideJS carousel
const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 5000,
  hoverpause: true,
  gap: 20,
  peek: {
    before: 0,
    after: 0
  },
  animationDuration: 600,
  animationTimingFunc: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  rewind: true,
  loop: false,
  keyboard: true,
  focusAt: 'center',
  breakpoints: {
    768: {
      gap: 15,
      peek: {
        before: 0,
        after: 0
      }
    },
    480: {
      gap: 10,
      peek: {
        before: 0,
        after: 0
      }
    }
  }
});

// Mount the carousel
glide.mount();

// Ensure bullets are properly initialized and working
glide.on(['mount.after', 'run'], () => {
  const bullets = document.querySelectorAll('.glide__bullet');
  const currentIndex = glide.index;
  
  // Update active bullet
  bullets.forEach((bullet, index) => {
    bullet.classList.remove('glide__bullet--active');
    if (index === currentIndex) {
      bullet.classList.add('glide__bullet--active');
    }
  });
});

// Add manual bullet click handlers as backup
document.addEventListener('DOMContentLoaded', () => {
  const bullets = document.querySelectorAll('.glide__bullet');
  
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', (e) => {
      e.preventDefault();
      glide.go(`=${index}`);
    });
  });
});

// All transitions now use consistent timing for uniform behavior

// Add smooth scrolling for anchor links with analytics tracking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Track internal link clicks
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'Navigation',
          event_label: this.getAttribute('href'),
          value: 1
        });
      }
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
  
  // Track CTA button clicks
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton && typeof gtag !== 'undefined') {
    ctaButton.addEventListener('click', function() {
      gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Schedule Consultation',
        value: 1
      });
    });
  }
  
  // Track service card interactions
  const serviceLinks = document.querySelectorAll('.card a');
  serviceLinks.forEach(link => {
    if (typeof gtag !== 'undefined') {
      link.addEventListener('click', function() {
        const serviceName = this.closest('.card').querySelector('h3').textContent;
        gtag('event', 'click', {
          event_category: 'Service',
          event_label: serviceName,
          value: 1
        });
      });
    }
  });
  
  // Track contact link clicks
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach(link => {
    if (typeof gtag !== 'undefined') {
      link.addEventListener('click', function() {
        gtag('event', 'click', {
          event_category: 'Contact',
          event_label: this.textContent,
          value: 1
        });
      });
    }
  });
  
  // Track chat link clicks specifically
  const chatLink = document.querySelector('.chat-link');
  if (chatLink && typeof gtag !== 'undefined') {
    chatLink.addEventListener('click', function() {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Chat Conversation',
        value: 1
      });
    });
  }
  
  // Add animation to metrics - Commented out for now
  /*
  const metrics = document.querySelectorAll('.metric-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
          let currentValue = 0;
          const increment = numericValue / 30;
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
              currentValue = numericValue;
              clearInterval(timer);
            }
            target.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : finalValue.includes('%') ? '%' : '');
          }, 50);
        }
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  metrics.forEach(metric => {
    observer.observe(metric);
  });
  */
}); 