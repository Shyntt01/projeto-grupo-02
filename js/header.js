// Etapa 1: Criar o elemento Article
const cabecalho = document.createElement("article");

// Etapa 2: Manipular o elemento article através do innerHtml
cabecalho.innerHTML = `
<header class="menu">
  <div class="container">
    <div class="wrapper">
      <figure class="logo">
        <a href="index.html"><img src="./assets/img/Roteiro do sabor.png" alt="Logo Roteiro do sabor" /></a>
      </figure>
      <nav class="lista-header" id="itens">
        <ul>
          <li class="itens-cima"><a href="index.html">Home</a></li>
          <li class="itens-cima"><a href="restaurante_lista.html">Restaurantes</a></li>
          <li class="itens-baixo"><a href="receita_lista.html">Receitas</a></li>
          <li class="itens-baixo"><a href="contato.html">Contato</a></li>
        </ul>
      </nav>

      <a class="menu-mobile" onClick="clickMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </a>
    </div>
  </div>
</header>
`;

// Etapa 3: Adicionar o elemento article no elemento main do DOM
const headerElement = document.querySelector("header");
headerElement.appendChild(cabecalho);

function clickMenu() {
  const itens = document.getElementById("itens");
  if (itens.style.display === "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}
