<?php
$correct_username = "admin";
$correct_password = "senha123";

$username = $_POST['username'];
$password = $_POST['password'];

if ($username === $correct_username && $password === $correct_password) {
    echo "<script>
            alert('Login bem-sucedido!');
            window.location.href='home.html';
          </script>";
    exit();
} else {
    echo "<script>
            alert('Usuário ou senha incorretos. Tente novamente.');
            window.location.href='index.html';
          </script>";
    exit();
}
