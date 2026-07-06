<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>T-Coin Login Portal</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>T-Coin Login</h2>
    <form id="loginForm">
      <input type="email" id="loginEmail" placeholder="Email" required>
      <input type="password" id="loginPassword" placeholder="Password" required>
      <div id="loginError" class="error"></div>
      <button type="submit">Login</button>
    </form>
    <p style="text-align:center;margin-top:10px;">
      Don’t have an account? <a href="index.html">Register here</a>
    </p>
  </div>
  <script src="login.js"></script>
</body>
</html>
