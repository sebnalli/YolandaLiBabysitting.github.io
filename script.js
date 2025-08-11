// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// FAQ toggle
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    if (answer) {
      answer.hidden = !answer.hidden;
    }
  });
});

// Enrollment form validation & feedback
const enrollForm = document.getElementById('enroll-form');
const enrollFeedback = document.getElementById('form-feedback');

enrollForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!enrollForm.checkValidity()) {
    enrollFeedback.textContent = 'Please fill out all required fields correctly.';
    enrollFeedback.style.color = '#b94c6a';
    return;
  }
  enrollFeedback.textContent = 'Submitting...';
  enrollFeedback.style.color = '#5c1b31';

  // Submit form via fetch to Formspree
  const formData = new FormData(enrollForm);

  fetch(enrollForm.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      enrollFeedback.textContent = 'Thank you for your enrollment submission!';
      enrollForm.reset();
    } else {
      enrollFeedback.textContent = 'Oops! Something went wrong. Please try again later.';
      enrollFeedback.style.color = '#b94c6a';
    }
  }).catch(() => {
    enrollFeedback.textContent = 'Network error. Please try again later.';
    enrollFeedback.style.color = '#b94c6a';
  });
});

// Footer quick contact form submission (fake)
const footerForm = document.getElementById('footer-contact-form');
const footerFeedback = document.getElementById('footer-feedback');

footerForm.addEventListener('submit', e => {
  e.preventDefault();
  footerFeedback.textContent = 'Thank you for reaching out! I will get back to you soon.';
  footerFeedback.style.color = '#5c1b31';
  footerForm.reset();
});
