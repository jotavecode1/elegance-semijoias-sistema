// Login simples
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Login padrão
    if ((usuario === "joao" && senha === "1234") || 
        (usuario === "raquel" && senha === "1234")) {
        document.getElementById('login-section').style.display = "none";
        document.getElementById('form-section').style.display = "block";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Envio para Google Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbz7b6llXZF3uQwzm6xdmtc50gYMiLZBCiVg8XURPqPvtFOWguo0Lpql7Hfreu2UAUUU/exec";
const form = document.getElementById('venda-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Venda registrada com sucesso!");
            form.reset();
        })
        .catch(error => {
            alert("Erro ao enviar os dados: " + error.message);
        });
});

// Adiciona a classe tela-login quando a página carrega
document.body.classList.add("tela-login");

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Esconde login e mostra formulário de vendas
    document.getElementById('login-section').style.display = "none";
    document.getElementById('form-section').style.display = "block";

    // Remove a classe tela-login para que o h1 volte à posição normal
    document.body.classList.remove("tela-login");
});

