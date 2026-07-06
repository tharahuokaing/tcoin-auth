<script>
  const form = document.getElementById('registrationForm');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match!";
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        form.reset();
      } else {
        errorMessage.textContent = data.error;
      }
    } catch (err) {
      errorMessage.textContent = "Server error: " + err.message;
    }
  });
</script>
