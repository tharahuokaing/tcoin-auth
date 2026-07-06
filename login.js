const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    // Example: send login request to backend API
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Welcome back, " + data.username + "!");
      loginForm.reset();
      // Redirect to dashboard
      window.location.href = "/dashboard.html";
    } else {
      loginError.textContent = data.error;
    }
  } catch (err) {
    loginError.textContent = "Server error: " + err.message;
  }
});
