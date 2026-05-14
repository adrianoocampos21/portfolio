const btnTheme = document.getElementById('troca-tema');

btnTheme.addEventListener('click', () => {
    // O 'toggle' adiciona a classe se ela não existir e remove se já existir
    document.body.classList.toggle('dark-theme');
    
    // Opcional: Salvar a preferência do usuário no navegador
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Ao carregar a página, verifica se o usuário já tinha escolhido o tema escuro
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

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
        window.location.href = 'media/Adriano_Analista_TI_curriculo.pdf';
    }
});


const btnTop = document.getElementById('back-to-top');

// 1. Mostrar/Esconder o botão conforme o scroll
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

// 2. Função de clique para voltar ao topo
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll suave
    });
});