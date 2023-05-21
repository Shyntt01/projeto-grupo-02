//Etapa 1: Criar o elemento Article
const cabecalho = document.createElement("article");

//Etapa 2: Manipular o elemento article através do innerHtml
cabecalho.innerHTML = `
<header class="menu">
<div class="container">
        <div class="wrapper">
<figure class="logo">
  <a href="index.html"
    ><img src="./assets/img/Roteiro do sabor.png" alt="Logo Roteiro do sabor"
  /></a>
</figure>
<nav class="lista">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="restaurante_lista.html">Restaurantes</a></li>
    <li><a href="receita_lista.html">Receitas</a></li>
    <li><a href="contato.html">Contato</a></li>
  </ul>
</nav>
</div>
      </div>
</header>
 `;

//Etapa 3: Adicionar o elemento article no elemento main do DOM
const headerElement = document.querySelector("header");

headerElement.appendChild(cabecalho);
