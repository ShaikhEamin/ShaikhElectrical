/* =====================================================
   ShaikhElectrical Portfolio – main.js
   ===================================================== */

'use strict';

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !navToggle.contains(e.target)
  ) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ---- Scroll-reveal animation ----
const revealTargets = document.querySelectorAll(
  '.skill-card, .project-card, .about-grid, .contact-item, .proficiency'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// ---- Skill bar animation ----
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width + '%';
        barObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.3 }
);

barFills.forEach((fill) => barObserver.observe(fill));

// ---- Contact form validation ----
const form         = document.getElementById('contactForm');
const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError    = document.getElementById('nameError');
const emailError   = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess  = document.getElementById('formSuccess');

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setError(input, errorEl, message) {
  input.classList.add('error');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('error');
  errorEl.textContent = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Name
  if (nameInput.value.trim().length < 2) {
    setError(nameInput, nameError, 'Please enter your name (min. 2 characters).');
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Email
  if (!validateEmail(emailInput.value.trim())) {
    setError(emailInput, emailError, 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Message
  if (messageInput.value.trim().length < 10) {
    setError(messageInput, messageError, 'Message must be at least 10 characters.');
    valid = false;
  } else {
    clearError(messageInput, messageError);
  }

  if (valid) {
    // Simulate a successful form submission
    form.reset();
    formSuccess.textContent = '✅ Message sent! I\'ll get back to you soon.';
    setTimeout(() => { formSuccess.textContent = ''; }, 5000);
  }
});

// Clear errors on input
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    const errEl = document.getElementById(input.id + 'Error');
    if (errEl) errEl.textContent = '';
  });
});

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
