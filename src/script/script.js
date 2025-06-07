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


const themes = ['theme-default', 'theme-dark', 'theme-sepia'];
  let currentThemeIndex = 0;

  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  // Inicializa com o tema padrão
  body.classList.add(themes[currentThemeIndex]);

  btn.addEventListener('click', () => {
    // Remove a classe do tema atual
    body.classList.remove(themes[currentThemeIndex]);

    // Incrementa índice do tema (loopando)
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Adiciona a nova classe do tema
    body.classList.add(themes[currentThemeIndex]);
  });

// Validação de formulário
function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  if (!nome || !email) {
    alert('Preencha todos os campos.');
    return false;
  }
  return true;
}

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

let respostasCorretas = 0;
const quizDiv = document.getElementById('quiz');
perguntas.forEach((p, i) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <p>${i + 1}. ${p.pergunta}</p>
    <input type="text" id="resposta${i}" placeholder="Sua resposta">
  `;
  quizDiv.appendChild(div);
});

function mostrarResultado() {
  respostasCorretas = 0;
  perguntas.forEach((p, i) => {
    const resposta = document.getElementById(`resposta${i}`).value.toLowerCase();
    if (resposta.includes(p.resposta.toLowerCase())) {
      respostasCorretas++;
    }
  });
  document.getElementById('resultado').innerText = `Você acertou ${respostasCorretas} de ${perguntas.length} perguntas.`;
}