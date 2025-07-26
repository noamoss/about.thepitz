// CSS Fallback - Apply critical styles if external CSS fails
function applyFallbackStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .glide { position: relative; width: 100%; box-sizing: border-box; }
    .glide * { box-sizing: inherit; }
    .glide__track { overflow: hidden; }
    .glide__slides { position: relative; width: 100%; list-style: none; backface-visibility: hidden; transform-style: preserve-3d; touch-action: pan-Y; overflow: hidden; margin: 0; padding: 0; white-space: nowrap; display: flex; flex-wrap: nowrap; will-change: transform; }
    .glide__slide { width: 100%; height: 100%; flex-shrink: 0; white-space: normal; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
    .glide__arrows { -webkit-touch-callout: none; user-select: none; }
    .glide__bullets { -webkit-touch-callout: none; user-select: none; }
  `;
  document.head.appendChild(style);
}

// Check if Glide CSS loaded properly
setTimeout(() => {
  const glideElement = document.querySelector('.glide');
  if (glideElement && getComputedStyle(glideElement).position === 'static') {
    console.warn('Glide CSS not loaded, applying fallback styles');
    applyFallbackStyles();
  }
}, 1000);

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

glide.mount();

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
  // Check if main CSS loaded and apply fallback if needed
  const ctaButtonElement = document.querySelector('.cta-button');
  if (ctaButtonElement && getComputedStyle(ctaButtonElement).background === 'rgba(0, 0, 0, 0)') {
    console.warn('Main CSS not loaded properly, applying fallback styles');
    const fallbackStyle = document.createElement('style');
    fallbackStyle.textContent = `
      .cta-button { 
        display: inline-block !important; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; 
        color: white !important; 
        padding: 1rem 2rem !important; 
        border-radius: 50px !important; 
        text-decoration: none !important; 
        font-weight: 600 !important; 
        font-size: 1rem !important; 
        transition: all 0.3s ease !important; 
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important; 
      }
      .skip-link { 
        position: absolute !important; 
        top: -40px !important; 
        left: 6px !important; 
        background: #667eea !important; 
        color: white !important; 
        padding: 8px !important; 
        text-decoration: none !important; 
        z-index: 1000 !important; 
      }
      .skip-link:focus { 
        top: 6px !important; 
      }
    `;
    document.head.appendChild(fallbackStyle);
  }
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