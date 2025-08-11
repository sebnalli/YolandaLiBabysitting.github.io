/* Reset and base styles */
body {
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
header {
  background-color: #fff0f5;
  border-bottom: 3px solid #d96f91;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 60px;
  margin-left: 1rem;
}

/* Navigation */
nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: #5c1b31;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li a:focus {
  color: #d96f91;
  outline: none;
}

/* Nav contact info inside the menu */
.nav-contact {
  margin-left: 2rem;
  color: #5c1b31;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-contact p {
  margin: 0;
}

.nav-contact a {
  color: #d96f91;
  text-decoration: none;
  font-weight: 700;
}

.nav-contact a:hover {
  text-decoration: underline;
}

/* Social icons inside nav contact */
.nav-social {
  margin-top: 0.5rem;
}

.nav-social a {
  font-size: 1.2rem;
  margin-right: 1rem;
  color: #d96f91;
  transition: color 0.3s ease;
}

.nav-social a:hover {
  color: #b94c6a;
}

/* Hamburger menu */
#nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  position: relative;
  width: 30px;
  height: 24px;
  z-index: 1100;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  background-color: #5c1b31;
  height: 4px;
  border-radius: 2px;
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
}

.hamburger {
  top: 50%;
  margin-top: -2px;
}

.hamburger::before {
  top: -10px;
}

.hamburger::after {
  top: 10px;
}

#nav-toggle.active .hamburger {
  background-color: transparent;
}

#nav-toggle.active .hamburger::before {
  top: 0;
  transform: rotate(45deg);
}

#nav-toggle.active .hamburger::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Responsive nav for mobile */
@media (max-width: 768px) {
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 250px;
    background-color: #fff0f5;
    flex-direction: column;
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    box-shadow: -3px 0 6px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 1050;
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav-contact {
    margin-top: 2rem;
    margin-left: 0;
  }

  #nav-toggle {
    display: block;
  }
}

/* Main */
main {
  padding: 2rem 0;
}

/* Welcome & Gallery */
.welcome-gallery {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.welcome {
  flex: 1 1 350px;
  color: #5c1b31;
}

.welcome h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.slogan {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.gallery-grid {
  flex: 1 1 350px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}

.gallery-grid img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #d96f91;
}

/* Section Separators */
section + section {
  border-top: 2px solid #ccc;
  padding-top: 3rem;
  margin-top: 3rem;
}

/* Schedule Table */
.schedule table {
  width: 100%;
  border-collapse: collapse;
}

.schedule th, .schedule td {
  padding: 0.75rem;
  border: 1px solid #d96f91;
  text-align: center;
}

.schedule th {
  background-color: #f8d4db;
  color: #5c1b31;
  font-weight: 600;
}

.schedule td {
  font-weight: 500;
}

/* Add grey line separator between Day and Hours cells */
.schedule td:first-child::after {
  content: "---------";
  display: block;
  color: grey;
  margin-top: 6px;
  font-weight: normal;
  font-size: 0.8rem;
}

/* Rates */
.rates-box {
  background: #fce8f0;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #d96f91;
  font-size: 1.25rem;
  color: #5c1b31;
  font-weight: 600;
}

/* Testimonials */
.testimonials blockquote {
  font-style: italic;
  border-left: 4px solid #d96f91;
  margin: 1.5rem 0;
  padding-left: 1rem;
  color: #5c1b31;
}

/* Enrollment Form */
.enrollment {
  max-width: 600px;
  margin: auto;
}

.enrollment form {
  display: flex;
  flex-direction: column;
}

.enrollment label {
  margin-top: 1rem;
  font-weight: 600;
  color: #5c1b31;
}

.enrollment input,
.enrollment textarea {
  margin-top: 0.25rem;
  padding: 0.5rem;
  border: 2px solid #d96f91;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}

.enrollment input:focus,
.enrollment textarea:focus {
  outline: none;
  border-color: #b94c6a;
  box-shadow: 0 0 4px #b94c6a;
}

.enrollment button {
  margin-top: 1.5rem;
  background-color: #d96f91;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.enrollment button:hover,
.enrollment button:focus {
  background-color: #b94c6a;
  outline: none;
}

/* Form Feedback */
.form-feedback {
  margin-top: 0.5rem;
  font-weight: 600;
  color: #b94c6a;
}

/* FAQ */
.faq {
  max-width: 700px;
  margin: auto;
}

.faq-item {
  margin-bottom: 1.5rem;
  border: 1px solid #d96f91;
  border-radius: 8px;
  background: #fff0f5;
  padding: 1rem;
}

.faq-question {
  background: none;
  border: none;
  font-weight: 700;
  color: #5c1b31;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 1.1rem;
}

.faq-question:focus {
  outline: 3px solid #d96f91;
}

.faq-answer {
  margin-top: 0.75rem;
  color: #333;
}

/* Footer */
footer {
  background-color: #fff0f5;
  border-top: 3px solid #d96f91;
  color: #5c1b31;
  padding: 2rem 1rem 1rem 1rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.footer-contact,
.footer-social,
.footer-quick-contact {
  flex: 1 1 250px;
}

.footer-contact h3,
.footer-social h3,
.footer-quick-contact h3 {
  margin-bottom: 1rem;
  font-weight: 700;
  color: #5c1b31;
}

.footer-contact p,
.footer-social a {
  font-weight: 600;
  color: #5c1b31;
}

.footer-social a {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #d96f91;
  transition: color 0.3s ease;
}

.footer-social a:hover,
.footer-social a:focus {
  color: #b94c6a;
}

.footer-quick-contact form {
  display: flex;
  flex-direction: column;
}

.footer-quick-contact label {
  margin-top: 0.75rem;
  font-weight: 600;
}

.footer-quick-contact input,
.footer-quick-contact textarea {
  margin-top: 0.25rem;
  padding: 0.5rem;
  border: 2px solid #d96f91;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.footer-quick-contact button {
  margin-top: 1rem;
  background-color: #d96f91;
  color: white;
  border: none;
  padding: 0.75rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.footer-quick-contact button:hover,
.footer-quick-contact button:focus {
  background-color: #b94c6a;
  outline: none;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #5c1b31;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .welcome-gallery {
    flex-direction: column;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 250px;
    background-color: #fff0f5;
    flex-direction: column;
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    box-shadow: -3px 0 6px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 1050;
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav-contact {
    margin-top: 2rem;
    margin-left: 0;
  }

  #nav-toggle {
    display: block;
  }
}
