// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Formspree AJAX submission
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        form.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      } else {
        alert('Something went wrong. Please email us directly at akronbookkeepingcompany@gmail.com');
      }
    } catch {
      alert('Something went wrong. Please email us directly at akronbookkeepingcompany@gmail.com');
    }
  });
}
