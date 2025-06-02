 // Função para o menu mobile
        function toggleMenu() {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("show");
        }

        const images = [
  './src/assets/imgs/foto1.webp',
  './src/assets/imgs/foto2.webp',
  './src/assets/imgs/foto3.webp'
];

let current = 0;
const imageElement = document.getElementById('carousel-image');

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  imageElement.src = images[current];
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % images.length;
  imageElement.src = images[current];
});
