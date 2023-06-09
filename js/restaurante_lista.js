const arrayRestaurantes = [
  {
    nome: 'Sabores do Sertão',
    descricao: 'O Restaurante Sabores do Sertão é um estabelecimento gastronômico que leva você em uma jornada culinária pelo interior do Brasil. Inspirado pela riqueza da culinária sertaneja, o Sabores do Sertão oferece pratos autênticos e tradicionais.',
    estrelasAtivas: 4,
    preco: 3,
    link: 'restaurante_individual.html?restaurante=1',
    img: './assets/FotosRestauranteIndividual/SaboresDoSertão.jpg',
    imgAlt: '',
    local: 'SP',
  },
  {
    nome: 'Brasa & Sabor',
    descricao: 'O Restaurante Brasa & Sabor é um destino gastronômico conhecido por sua autêntica culinária brasileira, oferecendo pratos deliciosos e saborosos preparados na brasa.',
    estrelasAtivas: 5,
    preco: 3,
    link: 'restaurante_individual.html?restaurante=2',
    img: './assets/FotosRestauranteIndividual/Brasa&Sabor.jpg',
    imgAlt: '',
    local: 'RJ',
  },
  {
    nome: 'Comida Raiz',
    descricao: 'O Restaurante Comida Raiz é um local dedicado a celebrar as raízes da culinária tradicional brasileira. Com pratos que resgatam receitas ancestrais e ingredientes regionais, o Comida Raiz oferece uma experiência autêntica e cheia de sabor',
    estrelasAtivas: 3,
    preco: 2,
    link: 'restaurante_individual.html?restaurante=3',
    img: './assets/FotosRestauranteIndividual/ComidaRaiz.jpg',
    imgAlt: '',
    local: 'MG',
  },
  {
    nome: 'Sabor Carioca',
    descricao: 'O Restaurante Sabor Carioca é um verdadeiro tesouro culinário localizado no coração do Rio de Janeiro. Inspirado pela rica cultura e tradições da cidade, oferecemos aos nossos clientes uma experiência gastronômica única, repleta de sabores autênticos e pratos que representam a essência do Rio.',
    estrelasAtivas: 3,
    preco: 1,
    link: 'restaurante_individual.html?restaurante=4',
    img: './assets/FotosRestauranteIndividual/SaborCarioca.jpg',
    imgAlt: '',
    local: 'SP',
  },
  {
    nome: 'Cozinha do Brasil',
    descricao: 'O Restaurante Cozinha do Brasil é um lugar encantador localizado em um dos bairros mais charmosos de São Paulo. Nosso objetivo é proporcionar aos clientes uma verdadeira imersão na culinária brasileira, com pratos que resgatam as tradições e sabores de todas as regiões do país.',
    estrelasAtivas: 5,
    preco: 3,
    link: 'restaurante_individual.html?restaurante=5',
    img: './assets/FotosRestauranteIndividual/CozinhaDoBrasil.jpg',
    imgAlt: '',
    local: 'SP',
  },
  {
    nome: 'Comida de Buteco',
    descricao: 'O Restaurante Comida de Boteco é um lugar descontraído e acolhedor que celebra a cultura dos botecos brasileiros. Localizado no coração de uma das cidades mais vibrantes do país, oferecemos aos nossos clientes uma experiência autêntica de comida de boteco, com pratos saborosos e ambiente descontraído.',
    estrelasAtivas: 5,
    preco: 2,
    link: 'restaurante_individual.html?restaurante=6',
    img: './assets/FotosRestauranteIndividual/ComidaDeButeco.jpg',
    imgAlt: '',
    local: 'SP',
  },
];


let paginaAtual = 1;
const itensPorPagina = 3;

function criarRestaurante(restaurante) {
  const section = document.createElement('section');
  section.className = 'listagem-restaurantes';

  section.innerHTML = `
    <img class="img-restaurante" src="${restaurante.img}" alt="${restaurante.imgAlt}" />
    <div class="texto-restaurante">
      <div class="avaliacaoRestaurante">${criarAvaliacao(restaurante.estrelasAtivas)}</div>
      <h3 class="titulo-restaurante">
        <a href="${restaurante.link}">${restaurante.nome}</a>
      </h3>
      <p class="descricao-restaurante">${restaurante.descricao}</p>
      <i class="fa-solid fa-location-dot" style="color: #323934;"> ${restaurante.local}</i>
      <div class="precoRestaurante">${criarPreco(restaurante.preco)}</div>
    </div>
  `;

  return section;
}


function criarAvaliacao(estrelasAtivas) {
  let avaliacaoHTML = '';
  for (let i = 0; i < 5; i++) {
    const estrelaClass = (i < estrelasAtivas) ? 'fas fa-star' : 'fa-regular fa-star';
    const estrelaColor = (i < estrelasAtivas) ? 'yellow' : 'gray';
    avaliacaoHTML += `<i class="${estrelaClass}" style="color: ${estrelaColor}"></i>`;
  }
  return avaliacaoHTML;
}

function criarPreco(preco) {
  let precoHTML = '';
  for (let i = 0; i < preco; i++) {
    precoHTML += `<i class="fa-solid fa-dollar-sign" style="color: #34a301"></i>`;
  }
  return precoHTML;
}


const restaurantesSection = document.getElementById('restaurantes');

function exibirRestaurantesPagina(pagina) {
  const startIndex = (pagina - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;
  const restaurantesPagina = arrayRestaurantes.slice(startIndex, endIndex);
  atualizarListaRestaurantes(restaurantesPagina);
}

function trocarPagina(pagina) {
  const numPaginas = Math.ceil(arrayRestaurantes.length / itensPorPagina);

  if (pagina === 'anterior') {
    paginaAtual = Math.max(paginaAtual - 1, 1);
  } else if (pagina === 'proxima') {
    paginaAtual = Math.min(paginaAtual + 1, numPaginas);
  } else {
    paginaAtual = pagina;
  }

  exibirRestaurantesPagina(paginaAtual);
  
  scrollToTop();
}

function scrollToTop() {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 10);
  }
}


const pagina1Button = document.getElementById('pagina1');
const pagina2Button = document.getElementById('pagina2');

pagina1Button.addEventListener('click', () => {
  trocarPagina(1);
});

pagina2Button.addEventListener('click', () => {
  trocarPagina(2);
});

const anteriorButton = document.getElementById('anteriorButton');
const proximaButton = document.getElementById('proximaButton');

anteriorButton.addEventListener('click', () => {
  trocarPagina('anterior');
});

proximaButton.addEventListener('click', () => {
  trocarPagina('proxima');
});


// Inicialização da página
exibirRestaurantesPagina(1);

function filtrarRestaurantes() {
  const selectedAvaliacao = document.getElementById('avaliacaoFiltroSelect').value;
  const selectedPreco = document.getElementById('precoFiltroSelect').value;
  const selectedLocal = document.getElementById('localFiltroSelect').value;

  let restaurantesFiltrados = arrayRestaurantes.filter(restaurante => {
    const atendeAvaliacao = selectedAvaliacao === 'todos' || restaurante.estrelasAtivas === parseInt(selectedAvaliacao);
    const atendePreco = selectedPreco === 'todos' || restaurante.preco === parseInt(selectedPreco);
    const atendeLocal = selectedLocal === 'todos' || restaurante.local === selectedLocal;
  
    return atendeAvaliacao && atendePreco && atendeLocal;
  });
  

  atualizarListaRestaurantes(restaurantesFiltrados);
}

function atualizarListaRestaurantes(restaurantes) {
  restaurantesSection.innerHTML = '';

  restaurantes.forEach(restaurante => {
    const section = criarRestaurante(restaurante);
    restaurantesSection.appendChild(section);
  });
}

function criarFiltroOpcoes(trianguloId, filtroId, selectId, opcoes) {
  const trianguloElement = document.getElementById(trianguloId);
  const filtroElement = document.getElementById(filtroId);
  const selectElement = document.createElement('select');
  selectElement.id = selectId;

  const filtroContentElement = document.createElement('div');
  filtroContentElement.className = 'filtro-content hidden';
  filtroContentElement.id = `${filtroId}Content`;

  opcoes.forEach(opcao => {
    const optionElement = document.createElement('option');
    optionElement.value = opcao.valor;
    optionElement.textContent = opcao.texto;
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener('change', filtrarRestaurantes);

  filtroElement.appendChild(trianguloElement);
  filtroContentElement.appendChild(selectElement);
  filtroElement.appendChild(filtroContentElement);

  trianguloElement.addEventListener('click', () => {
    filtroContentElement.classList.toggle('hidden');
    trianguloElement.classList.toggle('active');
  });
}

const opcoesAvaliacao = [
  { valor: 'todos', texto: 'Todos' },
  { valor: '5', texto: '5 estrelas' },
  { valor: '4', texto: '4 estrelas' },
  { valor: '3', texto: '3 estrelas' },
  { valor: '2', texto: '2 estrelas' },
  { valor: '1', texto: '1 estrela' },
];

const opcoesPreco = [
  { valor: 'todos', texto: 'Todos' },
  { valor: '1', texto: 'Baixo' },
  { valor: '2', texto: 'Médio' },
  { valor: '3', texto: 'Alto' },
];

const opcoesLocal = [
  { valor: 'todos', texto: 'Todos' },
  { valor: 'SP', texto: 'São Paulo' },
  { valor: 'RJ', texto: 'Rio de Janeiro' },
  { valor: 'MG', texto: 'Minas Gerais' },
];

criarFiltroOpcoes('avaliacaoTriangulo', 'avaliacaoFiltro', 'avaliacaoFiltroSelect', opcoesAvaliacao);
criarFiltroOpcoes('precoTriangulo', 'precoFiltro', 'precoFiltroSelect', opcoesPreco);
criarFiltroOpcoes('localTriangulo', 'localFiltro', 'localFiltroSelect', opcoesLocal);