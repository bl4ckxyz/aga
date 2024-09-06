document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um efeito de suavização ao scroll quando o usuário clica em links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para mostrar um aviso quando a largura da janela for muito pequena
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            // alert("Você está visualizando o site em um dispositivo móvel. Aproveite a navegação!");
        }
    });

    // Controle do menu mobile (verifica se o elemento existe antes de adicionar o listener)
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const nav = document.getElementById('nav-links');
            if (nav) {
                if (nav.classList.contains('hidden')) {
                    nav.classList.remove('hidden');
                } else {
                    nav.classList.add('hidden');
                }
            }
        });
    }

    // Função para mostrar/esconder o conteúdo dos elementos com a classe .hidden
    function toggleContent(element) {
        const ul = element.querySelector('ul');
        if (ul) {
            if (ul.classList.contains('hidden')) {
                ul.classList.remove('hidden');
                element.classList.add('active');
            } else {
                ul.classList.add('hidden');
                element.classList.remove('active');
            }
        }
    }

    // Adiciona o evento de clique para todos os elementos com a classe .game
    document.querySelectorAll('.game').forEach(game => {
        game.addEventListener('click', function() {
            toggleContent(this);
        });
    });
});