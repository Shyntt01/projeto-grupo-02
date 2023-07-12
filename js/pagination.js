const arrayRestaurantes = [
  {
    nome: "Tacacá do Norte",
    descricao:
      "De origem indígena, o tacacá é uma comida típica da região amazônica. O caldo amarelado à base de mandioca, chamado de tucupi, preparado com goma, camarão e jambu é servido bem quente em cuias.",
    link: "receita_individual.html?receita=1",
    img: "assets/img/tacaca.png",
    imgAlt: "Tacacá",
  },
  {
    nome: "Vatapá",
    descricao:
      "O vatapá é uma preparação culinária típica da culinária baiana. É um creme denso e amarelo feito com pão, camarão seco, leite de coco, amendoim, azeite de dendê e temperos. É servido como acompanhamento de diversos pratos, como acarajé e caruru.",
    link: "receita_individual.html?receita=2",
    ingredientes:
      "<li>500g de camarão seco</li><li>200g de pão amanhecido</li><li>200ml de leite de coco</li><li>100g de amendoim torrado e sem casca</li><li>2 colheres de sopa de azeite de dendê</li><li>1 cebola média picada</li><li>2 dentes de alho picados</li><li>1 pimentão médio picado</li><li>2 tomates médios picados</li><li>Coentro picado a gosto</li><li>Sal a gosto</li><li>Pimenta-do-reino a gosto</li>",
    modo_de_preparo:
      "<li>Deixe o camarão seco de molho em água quente por cerca de 30 minutos. Em seguida, escorra a água e reserve.</li><li>Em uma panela, coloque o pão amanhecido e o leite de coco. Deixe o pão absorver o leite por alguns minutos.</li><li>Em um liquidificador ou processador de alimentos, coloque o pão amolecido, o amendoim torrado e sem casca e bata até obter uma pasta cremosa. Reserve.</li><li>Em uma panela grande, aqueça o azeite de dendê em fogo médio.</li><li>Adicione a cebola picada e refogue até ficar transparente.</li><li>Acrescente o alho picado e refogue por mais alguns minutos.</li><li>Adicione o pimentão e o tomate picados e refogue até que os vegetais estejam macios.</li><li>Adicione o camarão seco e refogue por cerca de 5 minutos.</li><li>Adicione a pasta de pão e amendoim que foi reservada anteriormente, mexendo bem para incorporar os ingredientes.</li><li>Tempere com sal, pimenta-do-reino e coentro picado a gosto.</li><li>Reduza o fogo para médio-baixo e cozinhe o vatapá por cerca de 15 a 20 minutos, mexendo de vez em quando para evitar que grude no fundo da panela.</li><li>Verifique o tempero e ajuste se necessário.</li><li>Retire do fogo e sirva quente.</li>",
    img: "assets/img/Vatapá.png",
    imgAlt: "Vatapá",
  },
  {
    nome: "Galinhada",
    descricao:
      "A galinhada é um prato muito apreciado no almoço ou jantar. É uma preparação feita com arroz cozido no caldo de galinha, acompanhado de pedaços de frango, temperos e ingredientes como pimentão, tomate e cebola. É uma refeição reconfortante e saborosa.",
    link: "receita_individual.html?receita=3",
    img: "./assets/img/Galinhada.png",
    imgAlt: "Galinhada",
  },
  {
    nome: "Escondidinho",
    descricao:
      "O escondidinho é composto por camadas de purê de mandioca ou batata, intercaladas com carne moída, frango desfiado, camarão ou outros recheios de sua preferência. É gratinado no forno até ficar dourado e crocante.",
    link: "receita_individual.html?receita=4",
    img: "./assets/img/Escondidinho.png",
    imgAlt: "Escondiinho",
  },
  {
    nome: "Moqueca",
    descricao:
      "A moqueca é um prato típico do litoral brasileiro, perfeito para um almoço ou jantar em família. É preparada com peixe ou frutos do mar cozidos em um delicioso molho de tomate, cebola, pimentões, leite de coco e azeite de dendê. Acompanhe com arroz branco e pirão.",
    link: "receita_individual.html?receita=5",
    img: "./assets/img/Moqueca.png",
    imgAlt: "Moqueca",
  },
];

let paginaAtual = 1;
const itensPorPagina = 3;

function criarRestaurante(restaurante) {
  const section = document.createElement("section");
  section.className = "listagem-restaurantes";

  section.innerHTML = `
    <img class="img-restaurante" src="${restaurante.img}" alt="${restaurante.imgAlt}" />
    <div class="texto-restaurante">
      <h3 class="titulo-restaurante">
        <a href="${restaurante.link}">${restaurante.nome}</a>
      </h3>
      <p class="descricao-restaurante">${restaurante.descricao}</p>
    </div>
  `;

  return section;
}

const restaurantesSection = document.getElementById("restaurantes");

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
  
  // Role suavemente para o topo da página
  scrollToTop();
}

function scrollToTop() {
  // Obtenha a posição atual da rolagem
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
    // Role suavemente para o topo
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 10);
  }
}


const anteriorButton = document.getElementById("anteriorButton");
const proximaButton = document.getElementById("proximaButton");
const pagina1Button = document.getElementById("pagina1");
const pagina2Button = document.getElementById("pagina2");

anteriorButton.addEventListener("click", () => {
  trocarPagina("anterior");
});

proximaButton.addEventListener("click", () => {
  trocarPagina("proxima");
});

pagina1Button.addEventListener("click", () => {
  trocarPagina(1);
});

pagina2Button.addEventListener("click", () => {
  trocarPagina(2);
});

// Inicialização da página
exibirRestaurantesPagina(1);

function atualizarListaRestaurantes(restaurantes) {
  restaurantesSection.innerHTML = "";

  restaurantes.forEach((restaurante) => {
    const section = criarRestaurante(restaurante);
    restaurantesSection.appendChild(section);
  });
}
