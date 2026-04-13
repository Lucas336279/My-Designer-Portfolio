const discordLink = document.getElementById('discord-link');

    discordLink.addEventListener('click', function(event) {
        // Impede o link de tentar navegar para outra página ou subir o scroll
        event.preventDefault();

        // O seu nome de usuário do Discord (mude para o seu real!)
        const meuUsuario = "lwcas_1234"; 

        // A mágica acontece aqui: copia para a área de transferência
        navigator.clipboard.writeText(meuUsuario).then(() => {
        }).catch(err => {
            console.error('Erro ao copiar: ', err);
        });
    });

// Selecionamos todos os elementos necessários
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.sec-2 img');

// Adicionamos o evento de clique para cada imagem da vitrine
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Mostra o lightbox
        setTimeout(() => lightbox.classList.add('active'), 10); // Ativa a animação
        lightboxImg.src = image.src; // Troca a imagem pela que foi clicada
        document.body.style.overflow = 'hidden'; // Trava o scroll do site ao fundo
    });
});

// Função para fechar o lightbox
const fecharLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Devolve o scroll ao site
    }, 100);
};

// Fecha ao clicar no X ou em qualquer lugar do fundo preto
closeBtn.addEventListener('click', fecharLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        fecharLightbox();
    }
});