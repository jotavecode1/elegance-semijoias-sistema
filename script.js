// Seleciona o formulário
const vendaForm = document.getElementById('venda-form');

// URL do seu Web App do Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ8Bp9g_iEy84BUZ-6gAUfDwZZNZvJc4xsQsQWTgqMcT4rUq2cQTZpJgjjrfYDM9C29g/exec';

// Ao enviar o formulário
vendaForm.addEventListener('submit', e => {
    e.preventDefault(); // previne o reload da página

    // Cria objeto FormData do formulário
    const formData = new FormData(vendaForm);

    // Converte FormData para um objeto simples
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Envia para o Google Apps Script via fetch
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Formulário enviado com sucesso
        alert('Cadastro realizado com sucesso!');
        vendaForm.reset(); // limpa campos
    })
    .catch(error => {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro. Tente novamente.');
    });
});
