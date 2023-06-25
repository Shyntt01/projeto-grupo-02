const arrayRestaurantes = [
  {
    nome: "Tacacá do Norte",
    descricao:
      "De origem indígena, o tacacá é uma comida típica da região amazônica. O caldo amarelado à base de mandioca, chamado de tucupi, preparado com goma, camarão e jambu é servido bem quente em cuias.",
    link: "receita_individual.html",
    img: "assets/img/tacaca.png",
    imgAlt: "",
  },
  {
    nome: "Vatapá",
    descricao:
      "O vatapá é uma preparação culinária típica da culinária baiana. É um creme denso e amarelo feito com pão, camarão seco, leite de coco, amendoim, azeite de dendê e temperos. É servido como acompanhamento de diversos pratos, como acarajé e caruru.",
    link: "",
    img: "assets/img/Vatapá.png",
    imgAlt: "",
  },
  {
    nome: "Galinhada",
    descricao:
      "A galinhada é um prato muito apreciado no almoço ou jantar. É uma preparação feita com arroz cozido no caldo de galinha, acompanhado de pedaços de frango, temperos e ingredientes como pimentão, tomate e cebola. É uma refeição reconfortante e saborosa.",
    link: "",
    img: "assets/img/Galinhada.png",
    imgAlt: "",
  },
  {
    nome: "Escondidinho",
    descricao:
      "O escondidinho é composto por camadas de purê de mandioca ou batata, intercaladas com carne moída, frango desfiado, camarão ou outros recheios de sua preferência. É gratinado no forno até ficar dourado e crocante.",
    link: "",
    img: "/assets/img/Escondidinho.png",
    imgAlt: "",
  },
  {
    nome: "Moqueca",
    descricao:
      "A moqueca é um prato típico do litoral brasileiro, perfeito para um almoço ou jantar em família. É preparada com peixe ou frutos do mar cozidos em um delicioso molho de tomate, cebola, pimentões, leite de coco e azeite de dendê. Acompanhe com arroz branco e pirão.",
    link: "",
    img: "/assets/img/Moqueca.png",
    imgAlt: "",
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
  paginaAtual = pagina;
  exibirRestaurantesPagina(pagina);
}
const pagina1Button = document.getElementById("pagina1");
const pagina2Button = document.getElementById("pagina2");

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
