function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

const images = [
    './src/assets/imgs/foto1.webp',
    './src/assets/imgs/foto2.webp',
    './src/assets/imgs/foto3.webp'
];

let agora = 0;
const imageElement = document.getElementById('carousel-image');

document.querySelector('.prev').addEventListener('click', () => {
    agora = (agora - 1 + images.length) % images.length;
    imageElement.src = images[agora];
});

document.querySelector('.next').addEventListener('click', () => {
    agora = (agora + 1) % images.length;
    imageElement.src = images[agora];
});
