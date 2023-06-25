//Etapa 1: Criar o elemento Article
const footer = document.createElement("article-footer");

//Etapa 2: Manipular o elemento article através do innerHtml
footer.innerHTML = `
<footer class="rodape">
  <div class="container-footer">
    <div class="wrapper-footer">
      <figure>
        <a href="index.html"
          ><img
            src="/assets/img/Roteiro do sabor B.png"
            alt="Logo Roteiro do sabor"
        /></a>
      </figure>

      <nav class="lista-footer">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li><a href="restaurante_lista.html">Restaurantes</a></li>
          <li><a href="receita_lista.html">Receitas</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ol>
      </nav>
      <address>
        <h4>Av. Júlio de Castilhos, 516 - Centro Histórico, </br>Porto Alegre - RS, 90030-130</h4>
        <h4>contato@roteirodosabor.com.br</h4>
        <section>
          <a href=""
            ><img src="/assets/img/whatsapp.png" alt="Contato WhatsApp"
          /></a>
          <a href=""><img src="/assets/img/facebook.png" alt="Facebook" /></a>
          <a href=""><img src="/assets/img/instagram.png" alt="Instagram" /></a>
        </section>
      </address>
    </div>
  </div>
</footer>
 `;

//Etapa 3: Adicionar o elemento article no elemento main do DOM
const footerElement = document.querySelector("footer");

footerElement.appendChild(footer);
