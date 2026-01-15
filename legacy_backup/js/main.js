/* ============================================
   PRIMEHOOD SUPPLIES - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Check on load
  
  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
  
  // ============================================
  // Scroll Animations (Intersection Observer)
  // ============================================
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
  
  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ============================================
  // Products Tab Filtering
  // ============================================
  const productTabs = document.querySelectorAll('.products-tabs button');
  
  productTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active from all tabs
      productTabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked tab
      this.classList.add('active');
      
      // Here you would filter products based on the tab
      // For now, just visual feedback
      const category = this.textContent.trim().toLowerCase();
      console.log('Filter by:', category);
    });
  });
  
  // ============================================
  // Contact Form Handling
  // ============================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      let isValid = true;
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'service', 'message'];
      
      requiredFields.forEach(field => {
        const input = contactForm.querySelector(`[name="${field}"]`);
        if (!data[field] || data[field].trim() === '') {
          isValid = false;
          input.style.borderColor = '#ff4444';
        } else {
          input.style.borderColor = '';
        }
      });
      
      if (!isValid) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Phone validation (basic)
      const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
      if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        // Show success message
        alert(`Thank you, ${data.firstName}! Your message has been sent successfully. We'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Optional: Redirect or show success state
        console.log('Form submitted:', data);
      }, 1500);
    });
  }
  
  // ============================================
  // Counter Animation for Stats
  // ============================================
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent);
      if (isNaN(target)) return;
      
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.innerHTML = Math.floor(current) + '<span>+</span>';
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerHTML = target + '<span>+</span>';
        }
      };
      
      // Only animate when in view
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      counterObserver.observe(counter);
    });
  }
  
  animateCounters();
  
  // ============================================
  // Parallax Effect for Hero
  // ============================================
  const heroSection = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg img');
  
  if (heroSection && heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;
      
      if (scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }
  
  // ============================================
  // Typing Effect for Hero (Optional)
  // ============================================
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
  
  // ============================================
  // WhatsApp Float Button
  // ============================================
  function createWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/254722801926';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '💬';
    whatsappBtn.title = 'Chat on WhatsApp';
    
    // Add styles
    whatsappBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      z-index: 1000;
      transition: all 0.3s ease;
      animation: pulse 2s infinite;
    `;
    
    // Add hover effect
    whatsappBtn.addEventListener('mouseenter', () => {
      whatsappBtn.style.transform = 'scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', () => {
      whatsappBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(whatsappBtn);
  }
  
  createWhatsAppButton();
  
  // ============================================
  // Back to Top Button
  // ============================================
  function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Back to Top';
    
    backToTop.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 100px;
      width: 50px;
      height: 50px;
      background: var(--primary, #0066cc);
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
    `;
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });
    
    document.body.appendChild(backToTop);
  }
  
  createBackToTopButton();
  
  // ============================================
  // Image Lazy Loading
  // ============================================
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        lazyLoadObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => lazyLoadObserver.observe(img));
  
  // ============================================
  // Page Load Animation
  // ============================================
  document.body.classList.add('loaded');
  
  console.log('🏆 Prime Hood Supplies - Website Loaded Successfully!');
  console.log('📞 Contact: +254 722 801 926');
  console.log('✉️ Email: primehoodsupplies@gmail.com');
});
