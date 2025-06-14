document.addEventListener('DOMContentLoaded', () => {
  // Carrossel
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

  // Tema
  const themes = ['theme-default', 'theme-dark', 'theme-sepia'];
  let currentThemeIndex = 0;

  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  body.classList.add(themes[currentThemeIndex]);
  btn.addEventListener('click', () => {
    body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    body.classList.add(themes[currentThemeIndex]);
  });

  // Validação do Formulário
  const form = document.getElementById('form');
  const nome = document.getElementById('nome');
  const local = document.getElementById('local');
  const categoria = document.getElementById('categoria');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nomeVal = nome.value.trim();
    const localVal = local.value.trim();
    const categoriaVal = categoria.value;

    let errors = [];

    if (!nomeVal) errors.push('Por favor, preencha o campo Nome.');
    if (!localVal) errors.push('Por favor, preencha o campo Endereço.');
    if (!categoriaVal) errors.push('Por favor, selecione onde a água está batendo.');

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    const formData = new FormData();
    formData.append('altura', categoriaVal);
    formData.append('local', localVal);

    const resposta = await fetch("http://localhost:5000/index", {
      method: "POST",
      body: formData
    });

    const resultado = await resposta.json();
    document.getElementById("textErro").innerHTML = "Gravidade: " + resultado.gravidade;
  });

  // Quiz
  const perguntas = [
    { pergunta: 'O que é um alagamento?', resposta: 'Acúmulo de água em vias públicas' },
    { pergunta: 'O que fazer em caso de enchente?', resposta: 'Procurar abrigo seguro' },
    { pergunta: 'Como evitar entupimentos?', resposta: 'Não jogar lixo no chão' },
    { pergunta: 'Qual órgão monitora chuvas?', resposta: 'Defesa Civil' },
    { pergunta: 'O que é um alerta de chuva?', resposta: 'Aviso de previsão de chuva intensa' },
    { pergunta: 'Quando ocorre transbordamento?', resposta: 'Quando rios saem do leito' },
    { pergunta: 'Como agir em áreas de risco?', resposta: 'Sair imediatamente do local' },
    { pergunta: 'O que são bueiros?', resposta: 'Saídas para escoamento da água' },
    { pergunta: 'O que não deve ser feito em enchentes?', resposta: 'Tentar atravessar a pé' },
    { pergunta: 'Como ajudar na prevenção?', resposta: 'Participar de campanhas educativas' }
  ];

  const quizDiv = document.getElementById('quiz');
  perguntas.forEach((p, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${i + 1}. ${p.pergunta}</p>
      <input type="text" id="resposta${i}" placeholder="Sua resposta">
    `;
    quizDiv.appendChild(div);
  });

  window.mostrarResultado = () => {
    let respostasCorretas = 0;
    perguntas.forEach((p, i) => {
      const resposta = document.getElementById(`resposta${i}`).value.toLowerCase();
      if (resposta.includes(p.resposta.toLowerCase())) {
        respostasCorretas++;
      }
    });
    document.getElementById('resultado').innerText = `Você acertou ${respostasCorretas} de ${perguntas.length} perguntas.`;
  };
});
