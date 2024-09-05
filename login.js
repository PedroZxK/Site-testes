document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const correctUsername = "admin";
  const correctPassword = "senha123";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
      alert("Login bem-sucedido!");
      window.location.href = "home.html";
  } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
      window.location.href = "index.html";
  }
});
