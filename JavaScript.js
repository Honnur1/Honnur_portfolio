// Responsive nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.site-nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerText =  " Your message has been sent successfully!";
      form.reset();
    } else {
      const data = await response.json();
      status.innerText = data?.errors?.[0]?.message || "❌ Oops! Something went wrong.";
    }
  } catch (error) {
    status.innerText = "❌ Network error! Please try again.";
  }
});
