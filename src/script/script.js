document.addEventListener('DOMContentLoaded', () => {
  const imageElement = document.getElementById('carousel-image');
  let agora = 0;
  const images = [
    './src/assets/imgs/foto1.webp',
    './src/assets/imgs/foto2.webp',
    './src/assets/imgs/foto3.webp'
  ];

  document.querySelector('.prev').addEventListener('click', () => {
      agora = (agora - 1 + images.length) % images.length;
      imageElement.src = images[agora];
  });

  document.querySelector('.next').addEventListener('click', () => {
      agora = (agora + 1) % images.length;
      imageElement.src = images[agora];
  });

  document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const altura = document.getElementById("categoria").value;
    const loc = document.getElementById("local").value;

    const form = new FormData();
    form.append('altura', altura);
    form.append('local', loc);
    const resposta = await fetch("http://localhost:5000/index", {
      method: "POST",
      body: form
    });


    const resultado = await resposta.json();
    document.getElementById("textErro").innerHTML = "Gravidade: " + resultado.gravidade;
  });
});
