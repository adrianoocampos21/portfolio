

//baixar curriculo
document.getElementById('btn-download').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validação simples
    if (nome === '' || email === '') {
        alert('Por favor, preencha seu nome e e-mail para liberar o download do currículo.');
    } else {
        // Se preenchido, redireciona para o arquivo do currículo
        // Substitua pelo caminho real do seu arquivo PDF
        window.location.href = 'caminho/do/seu/curriculo.pdf';
    }
});