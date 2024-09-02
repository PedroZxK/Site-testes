document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciais de exemplo
    const validUsername = 'admin';
    const validPassword = 'senha123';

    // Verifica se as credenciais estão corretas
    if (username === validUsername && password === validPassword) {
        // Redireciona para home.html se as credenciais estiverem corretas
        window.location.href = 'home.html';
    } else {
        // Mostra mensagem de erro
        document.getElementById('error-message').style.display = 'block';
    }
});
