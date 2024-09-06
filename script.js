// Exemplo de código JavaScript para tornar o site mais interativo e responsivo

// Adiciona um efeito de suavização ao scroll quando o usuário clica em links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para mostrar um aviso quando a largura da janela for muito pequena
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
       // alert("Você está visualizando o site em um dispositivo móvel. Aproveite a navegação!");
    }
});

// Controle do menu mobile (se necessário adicionar futuramente um menu mobile)
document.getElementById('menu-btn').addEventListener('click', function() {
    var nav = document.getElementById('nav-links');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
});
