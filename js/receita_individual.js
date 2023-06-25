//Codigo com innerHtml para cada pagina de forma dinamica, a pagina receita foi gerado apartir do id uado igual a url

const url = new URL(window.location.href);
let receita = {};
const receitas = [
	{
	id: 1,
	receitaCompleta: `
  <div class="container">
  <hr style="border-color: rgb(71, 8, 8); border-width: 2px" />


  <!-- Div principal da página -->
  <div id="div-principal">
    <div class="prato-receita">
      <!-- Título principal da página -->
      <h1 id="receitaNome">Tacacá do Norte</h1>


      <!-- imagem principal da página -->
      <img
      src="./assets/img/tacaca.png" alt="prato_receita"  id="imagemReceita"  class="imagem-prato fade-in" />


      <!-- Texto principal da página -->
      <h2>
        <br>
        De origem indígena, o tacacá é uma comida típica da região
        amazônica. O caldo amarelado à base de mandioca, chamado de
        tucupi, preparado com goma, camarão e jambu é servido bem quente
        em cuias.
      </h2>
    </div>
    <div class="prato-ingredientes">
      <!-- Subtitulo INGREDIENTES -->
      <h3 class="ingredientes-receita" style="margin-top: 120px;">INGREDIENTES</h3>


      <!-- Lista não ordenada de INGREDIENTES - Exibe como tópicos-->
      <ul class="lista-itens">
        <li>2 xícaras (chá) de tucupi</li>
        <li>1 dente de alho</li>
        <li>1 folha de chicória do pará</li>
        <li>1 colher (café) de sal</li>
        <li>1 pimenta de cheiro do pará cortada ao meio</li>
        <li>1/4 de de maço de jambu (despreze os talos mais grossos)</li>
        <li>4 camarões secos</li>
        <li>30 g de goma</li>
        <li>300 ml de água</li>
      </ul><br>


      <!-- Subtitulo MODO DE PREPARO -->
      <h3 class="modo-de-preparo">MODO DE PREPARO</h3>


      <!-- Lista ordenada para o modo de preparo - preenche automaticamente os números -->
      <ol class="lista-itens">
        <li>Ferva o tucupi por 15 minutos.</li>
        <li>Agora coloque o alho, a chicória, o sal, o jambu e a pimenta de cheiro (a gosto) e cozinhe por mais 5 minutos ou até os talos do jambu ficarem macios.</li>
        <li>Em outra panela, dissolva a goma na água e cozinhe até adquirir transparência.</li>
        <li>Afervente os camarões secos separadamente.</li>
        <li>Em cuias apropriadas, coloque a goma até preencher um terço e complete com o Caldo temperado do tucupi e as folhas de jambu.</li>
        <li>Finalize com um camarão para cada tacacá.</li>
      </ol> <br>
      <div class="classificacao">
        Gostou da receita? Dê sua avaliação: <span id="classificacao-media">0.0</span>
      </div><br>          
     
      <!-- Botões de classificação -->
      <div class="classificacao-botoes" data-valor="0">
        <button class="botao-classificacao" data-valor="1">1 estrela</button>
        <button class="botao-classificacao" data-valor="2">2 estrelas</button>
        <button class="botao-classificacao" data-valor="3">3 estrelas</button>
        <button class="botao-classificacao" data-valor="4">4 estrelas</button>
        <button class="botao-classificacao" data-valor="5">5 estrelas</button>
      </div>
    </div>
  </div>
</div>
  `
	},
	{
    id: 2,
    receitaCompleta: `
    <div class="container">
    <hr style="border-color: rgb(71, 8, 8); border-width: 2px" />
  
  
    <!-- Div principal da página -->
    <div id="div-principal">
      <div class="prato-receita">
        <!-- Título principal da página -->
        <h1 id="receitaNome">Vatapá</h1>
  
  
        <!-- imagem principal da página -->
        <img
        src="./assets/img/Vatapá.png" alt="prato_receita"  id="imagemReceita"  class="imagem-prato fade-in" />
  
  
        <!-- Texto principal da página -->
        <h2>
          <br>
          O vatapá é uma preparação culinária típica da culinária baiana. É um creme denso e amarelo feito com pão, camarão seco, leite de coco, amendoim, azeite de dendê e temperos. É servido como acompanhamento de diversos pratos, como acarajé e caruru.
        </h2>
      </div>
      <div class="prato-ingredientes">
        <!-- Subtitulo INGREDIENTES -->
        <h3 class="ingredientes-receita" style="margin-top: 120px;">INGREDIENTES</h3>
  
  
        <!-- Lista não ordenada de INGREDIENTES - Exibe como tópicos-->
        <ul class="lista-itens">
        <li>500g de camarão seco</li><li>200g de pão amanhecido</li><li>200ml de leite de coco</li><li>100g de amendoim torrado e sem casca</li><li>2 colheres de sopa de azeite de dendê</li><li>1 cebola média picada</li><li>2 dentes de alho picados</li><li>1 pimentão médio picado</li><li>2 tomates médios picados</li><li>Coentro picado a gosto</li><li>Sal a gosto</li><li>Pimenta-do-reino a gosto</li>
        </ul><br>
  
  
        <!-- Subtitulo MODO DE PREPARO -->
        <h3 class="modo-de-preparo">MODO DE PREPARO</h3>
  
  
        <!-- Lista ordenada para o modo de preparo - preenche automaticamente os números -->
        <ol class="lista-itens">
        <li>Deixe o camarão seco de molho em água quente por cerca de 30 minutos. Em seguida, escorra a água e reserve.</li><li>Em uma panela, coloque o pão amanhecido e o leite de coco. Deixe o pão absorver o leite por alguns minutos.</li><li>Em um liquidificador ou processador de alimentos, coloque o pão amolecido, o amendoim torrado e sem casca e bata até obter uma pasta cremosa. Reserve.</li><li>Em uma panela grande, aqueça o azeite de dendê em fogo médio.</li><li>Adicione a cebola picada e refogue até ficar transparente.</li><li>Acrescente o alho picado e refogue por mais alguns minutos.</li><li>Adicione o pimentão e o tomate picados e refogue até que os vegetais estejam macios.</li><li>Adicione o camarão seco e refogue por cerca de 5 minutos.</li><li>Adicione a pasta de pão e amendoim que foi reservada anteriormente, mexendo bem para incorporar os ingredientes.</li><li>Tempere com sal, pimenta-do-reino e coentro picado a gosto.</li><li>Reduza o fogo para médio-baixo e cozinhe o vatapá por cerca de 15 a 20 minutos, mexendo de vez em quando para evitar que grude no fundo da panela.</li><li>Verifique o tempero e ajuste se necessário.</li><li>Retire do fogo e sirva quente.</li>
          <li>Finalize com um camarão para cada tacacá.</li>
        </ol> <br>
        <div class="classificacao">
          Gostou da receita? Dê sua avaliação: <span id="classificacao-media">0.0</span>
        </div><br>          
       
        <!-- Botões de classificação -->
        <div class="classificacao-botoes" data-valor="0">
          <button class="botao-classificacao" data-valor="1">1 estrela</button>
          <button class="botao-classificacao" data-valor="2">2 estrelas</button>
          <button class="botao-classificacao" data-valor="3">3 estrelas</button>
          <button class="botao-classificacao" data-valor="4">4 estrelas</button>
          <button class="botao-classificacao" data-valor="5">5 estrelas</button>
        </div>
      </div>
    </div>
  </div>
    `
    },
    {
      id: 3,
      receitaCompleta: `
      <div class="container">
      <hr style="border-color: rgb(71, 8, 8); border-width: 2px" />
    
    
      <!-- Div principal da página -->
      <div id="div-principal">
        <div class="prato-receita">
          <!-- Título principal da página -->
          <h1 id="receitaNome">Galinhada</h1>
    
    
          <!-- imagem principal da página -->
          <img
          src="./assets/img/Galinhada.png" alt="prato_receita"  id="imagemReceita"  class="imagem-prato fade-in" />
    
    
          <!-- Texto principal da página -->
          <h2>
            <br>
            A galinhada é um prato muito apreciado no almoço ou jantar. É uma preparação feita com arroz cozido no caldo de galinha, acompanhado de pedaços de frango, temperos e ingredientes como pimentão, tomate e cebola. É uma refeição reconfortante e saborosa.
          </h2>
        </div>
        <div class="prato-ingredientes">
          <!-- Subtitulo INGREDIENTES -->
          <h3 class="ingredientes-receita" style="margin-top: 120px;">INGREDIENTES</h3>
    
    
          <!-- Lista não ordenada de INGREDIENTES - Exibe como tópicos-->
          <ul class="lista-itens">
          <li>1 kg de frango cortado em pedaços</li><li>2 xícaras de arroz</li><li>1 cebola picada</li><li>2 dentes de alho picados</li><li>2 tomates picados</li><li>1 pimentão verde picado</li><li>1 colher de sopa de óleo</li><li>2 colheres de sopa de manteiga</li><li>2 colheres de sopa de cheiro-verde picado (salsinha e cebolinha)</li><li>Sal a gosto</li><li>Pimenta-do-reino a gosto</li><li>Água quente</li>
          </ul><br>
    
    
          <!-- Subtitulo MODO DE PREPARO -->
          <h3 class="modo-de-preparo">MODO DE PREPARO</h3>
    
    
          <!-- Lista ordenada para o modo de preparo - preenche automaticamente os números -->
          <ol class="lista-itens">
          <li>Em uma panela grande, aqueça o óleo e a manteiga em fogo médio.</li><li>Adicione os pedaços de frango e tempere com sal e pimenta-do-reino a gosto. Refogue o frango até que esteja dourado por todos os lados.</li><li>Adicione a cebola, o alho, o tomate e o pimentão picados. Refogue por alguns minutos até que os vegetais fiquem macios.</li><li>Adicione o arroz e misture bem para envolver todos os ingredientes.</li><li>Acrescente água quente suficiente para cobrir o arroz e o frango. A quantidade de água pode variar dependendo do tipo de arroz utilizado. Geralmente, utiliza-se duas xícaras de água para cada xícara de arroz.</li><li>Reduza o fogo para médio-baixo, tampe a panela e deixe cozinhar por aproximadamente 20 minutos, ou até que o arroz esteja cozido e o frango esteja macio.</li><li>Durante o cozimento, verifique se é necessário adicionar mais água para que o arroz não fique seco. Caso necessário, adicione aos poucos, conforme a necessidade.</li><li>Após o tempo de cozimento, desligue o fogo e deixe a panela tampada por mais alguns minutos para que o arroz absorva o líquido restante.</li><li>Antes de servir, salpique o cheiro-verde picado por cima para dar um toque de frescor ao prato.</li><li>Sirva a galinhada quente acompanhada de salada verde ou legumes refogados.</li>
          </ol> <br>
          <div class="classificacao">
            Gostou da receita? Dê sua avaliação: <span id="classificacao-media">0.0</span>
          </div><br>          
         
          <!-- Botões de classificação -->
          <div class="classificacao-botoes" data-valor="0">
            <button class="botao-classificacao" data-valor="1">1 estrela</button>
            <button class="botao-classificacao" data-valor="2">2 estrelas</button>
            <button class="botao-classificacao" data-valor="3">3 estrelas</button>
            <button class="botao-classificacao" data-valor="4">4 estrelas</button>
            <button class="botao-classificacao" data-valor="5">5 estrelas</button>
          </div>
        </div>
      </div>
    </div>
      `
      },
      {
        id: 4,
        receitaCompleta: `
        <div class="container">
        <hr style="border-color: rgb(71, 8, 8); border-width: 2px" />
      
      
        <!-- Div principal da página -->
        <div id="div-principal">
          <div class="prato-receita">
            <!-- Título principal da página -->
            <h1 id="receitaNome">Escondidinho</h1>
      
      
            <!-- imagem principal da página -->
            <img
            src="./assets/img/Escondidinho.png" alt="prato_receita"  id="imagemReceita"  class="imagem-prato fade-in" />
      
      
            <!-- Texto principal da página -->
            <h2>
              <br>
              O escondidinho é composto por camadas de purê de mandioca ou batata, intercaladas com carne moída, frango desfiado, camarão ou outros recheios de sua preferência. É gratinado no forno até ficar dourado e crocante.
            </h2>
          </div>
          <div class="prato-ingredientes">
            <!-- Subtitulo INGREDIENTES -->
            <h3 class="ingredientes-receita" style="margin-top: 120px;">INGREDIENTES</h3>
      
      
            <!-- Lista não ordenada de INGREDIENTES - Exibe como tópicos-->
            <ul class="lista-itens">
            "<li>500g de carne bovina moída</li><li>1 cebola picada</li><li>2 dentes de alho picados</li><li>2 tomates picados</li><li>2 colheres de sopa de óleo</li><li>Sal a gosto</li><li>Pimenta-do-reino a gosto</li><li>1 kg de mandioca ou batata descascada e cozida</li><li>1/2 xícara de leite</li><li>2 colheres de sopa de manteiga</li><li>Queijo ralado (opcional)</li><li>Salsinha picada para decorar</li>
            </ul><br>
      
      
            <!-- Subtitulo MODO DE PREPARO -->
            <h3 class="modo-de-preparo">MODO DE PREPARO</h3>
      
      
            <!-- Lista ordenada para o modo de preparo - preenche automaticamente os números -->
            <ol class="lista-itens">
            <li>Em uma panela grande, aqueça o óleo em fogo médio.</li><li>Adicione a cebola e o alho picados e refogue até ficarem dourados e perfumados.</li><li>Acrescente a carne moída e cozinhe até que esteja bem dourada e cozida por completo.</li><li>Adicione os tomates picados e cozinhe por mais alguns minutos até que eles fiquem macios.</li><li>Tempere a carne com sal e pimenta-do-reino a gosto. Reserve.</li><li>Em outra panela, coloque a mandioca ou batata cozida e amasse bem até obter um purê.</li><li>Adicione o leite e a manteiga ao purê e misture até obter uma consistência cremosa. Tempere com sal a gosto.</li><li>Em um refratário, faça uma camada com metade do purê de mandioca ou batata.</li><li>Espalhe o recheio de carne por cima da primeira camada de purê.</li><li>Cubra o recheio com o restante do purê, espalhando-o de maneira uniforme.</li><li>Se desejar, polvilhe queijo ralado por cima para gratinar.</li><li>Leve o refratário ao forno preaquecido a 180°C por aproximadamente 20 minutos, ou até que o escondidinho esteja aquecido e dourado.</li><li>Retire do forno, decore com salsinha picada e sirva quente.</li>"
            </ol> <br>
            <div class="classificacao">
              Gostou da receita? Dê sua avaliação: <span id="classificacao-media">0.0</span>
            </div><br>          
           
            <!-- Botões de classificação -->
            <div class="classificacao-botoes" data-valor="0">
              <button class="botao-classificacao" data-valor="1">1 estrela</button>
              <button class="botao-classificacao" data-valor="2">2 estrelas</button>
              <button class="botao-classificacao" data-valor="3">3 estrelas</button>
              <button class="botao-classificacao" data-valor="4">4 estrelas</button>
              <button class="botao-classificacao" data-valor="5">5 estrelas</button>
            </div>
          </div>
        </div>
      </div>
        `
        },
        {
          id: 5,
          receitaCompleta: `
          <div class="container">
          <hr style="border-color: rgb(71, 8, 8); border-width: 2px" />
        
        
          <!-- Div principal da página -->
          <div id="div-principal">
            <div class="prato-receita">
              <!-- Título principal da página -->
              <h1 id="receitaNome">Moqueca</h1>
        
        
              <!-- imagem principal da página -->
              <img
              src="./assets/img/Moqueca.png" alt="prato_receita"  id="imagemReceita"  class="imagem-prato fade-in" />
        
        
              <!-- Texto principal da página -->
              <h2>
                <br>
                A moqueca é um prato típico do litoral brasileiro, perfeito para um almoço ou jantar em família. É preparada com peixe ou frutos do mar cozidos em um delicioso molho de tomate, cebola, pimentões, leite de coco e azeite de dendê. Acompanhe com arroz branco e pirão.
              </h2>
            </div>
            <div class="prato-ingredientes">
              <!-- Subtitulo INGREDIENTES -->
              <h3 class="ingredientes-receita" style="margin-top: 120px;">INGREDIENTES</h3>
        
        
              <!-- Lista não ordenada de INGREDIENTES - Exibe como tópicos-->
              <ul class="lista-itens">
              <li>500g de filé de peixe (pode ser robalo, namorado, dourado, badejo, entre outros)</li><li>1 cebola grande cortada em rodelas</li><li>3 tomates médios cortados em rodelas</li><li>1 pimentão verde cortado em rodelas</li><li>1 pimentão vermelho cortado em rodelas</li><li>1 pimentão amarelo cortado em rodelas</li><li>2 dentes de alho picados</li><li>Suco de 1 limão</li><li>1 maço de coentro picado</li><li>1 maço de cebolinha picada</li><li>200ml de leite de coco</li><li>2 colheres de sopa de azeite de dendê</li><li>Sal a gosto</li><li>Pimenta-do-reino a gosto</li>
              </ul><br>
        
        
              <!-- Subtitulo MODO DE PREPARO -->
              <h3 class="modo-de-preparo">MODO DE PREPARO</h3>
        
        
              <!-- Lista ordenada para o modo de preparo - preenche automaticamente os números -->
              <ol class="lista-itens">
              <li>Tempere os filés de peixe com suco de limão, sal e pimenta-do-reino a gosto. Reserve.</li><li>Em uma panela de barro ou panela grande, coloque uma camada de cebola, tomate e pimentões.</li><li>Acrescente metade do alho picado, metade do coentro picado e metade da cebolinha picada.</li><li>Coloque uma camada dos filés de peixe temperados sobre os vegetais na panela.</li><li>Repita o processo, adicionando mais uma camada de cebola, tomate, pimentões, alho, coentro e cebolinha.</li><li>Coloque outra camada de filés de peixe por cima.</li><li>Regue a moqueca com o leite de coco e o azeite de dendê.</li><li>Tempere com sal e pimenta-do-reino a gosto.</li><li>Leve a panela ao fogo médio-baixo e tampe.</li><li>Cozinhe por cerca de 30 a 40 minutos, ou até que o peixe esteja cozido e os sabores se integrem.</li><li>Durante o cozimento, evite mexer a moqueca para não desmanchar os filés de peixe.</li><li>Após o tempo de cozimento, desligue o fogo e deixe a moqueca descansar por alguns minutos antes de servir.</li><li>Polvilhe coentro e cebolinha picados por cima para finalizar.</li><li>Sirva a moqueca baiana de peixe acompanhada de arroz branco e pirão, se desejar.</li>
              </ol> <br>
              <div class="classificacao">
                Gostou da receita? Dê sua avaliação: <span id="classificacao-media">0.0</span>
              </div><br>          
             
              <!-- Botões de classificação -->
              <div class="classificacao-botoes" data-valor="0">
                <button class="botao-classificacao" data-valor="1">1 estrela</button>
                <button class="botao-classificacao" data-valor="2">2 estrelas</button>
                <button class="botao-classificacao" data-valor="3">3 estrelas</button>
                <button class="botao-classificacao" data-valor="4">4 estrelas</button>
                <button class="botao-classificacao" data-valor="5">5 estrelas</button>
              </div>
            </div>
          </div>
        </div>
          `
  },
];

if (
	url.searchParams.has("receita") ||
	url.searchParams.get("receita")
) {
  receita = receitas.filter((element)=>{
    if(url.searchParams.get("receita") == element.id){
      return true
    }
  })[0];
  console.table(receita)
	console.log(url.searchParams.get("receita"));
}

document.querySelector('#main').innerHTML = receita.receitaCompleta;



// Função para aplicar o zoom na imagem principal
function aplicarZoomNaImagem() {
    var imagemElement = document.querySelector(".imagem-prato");
  

    // Função para aumentar o zoom
    function aumentarZoom() {
      imagemElement.style.transform = "scale(1.2)";
    }
  
  
    // Função para resetar o zoom
    function resetarZoom() {
      imagemElement.style.transform = "scale(1)";
    }
     // Adiciona o evento de mouseover para aumentar o zoom
     imagemElement.addEventListener("mouseover", aumentarZoom);
  
  
     // Adiciona o evento de mouseout para resetar o zoom
     imagemElement.addEventListener("mouseout", resetarZoom);
   
    // Adiciona o evento de click para alternar o zoom
     imagemElement.addEventListener("click", function() {
      if (imagemElement.style.transform === "scale(1.2)") {
        resetarZoom();
      } else {
        aumentarZoom();
      }
    });
  }
  
  // Chama função
  aplicarZoomNaImagem();//
  
  
  let somaClassificacoes = 0;
  let numClassificacoes = 0;
  
  
  // Função para atualizar a classificação média
  function atualizarClassificacao() {
    // Elementos de classificação
    const classificacoes = document.querySelectorAll('.classificacao span');
  
  
    let somaClassificacoes = 0;
    let numClassificacoes = 0;
  
  
    // Soma das classificações e conta o número de classificações
    classificacoes.forEach(function(classificacao) {
      const valorClassificacao = parseInt(classificacao.parentElement.dataset.valor);
      if (!isNaN(valorClassificacao)) {
        somaClassificacoes += valorClassificacao;
        numClassificacoes++;
      }
    });
  
  
    // Calcula a classificação média
    const classificacaoMedia = somaClassificacoes / numClassificacoes;
  
  
    // Atualiza a exibição da classificação média
    const classificacaoMediaElemento = document.getElementById('classificacao-media');
    classificacaoMediaElemento.textContent = classificacaoMedia.toFixed(1);
  }
  
  
  // Adiciona um evento de clique para cada botão de classificação
  const botoesClassificacao = document.querySelectorAll('.botao-classificacao');
  botoesClassificacao.forEach(function(botaoClassificacao) {
    botaoClassificacao.addEventListener('click', function() {
      // Obtem a classificação do botão clicado
      const valorClassificacao = parseInt(this.dataset.valor);
  

      // Atualiza a classificação do elemento pai
      const classificacaoElemento = this.parentElement.parentElement.querySelector('.classificacao');
      classificacaoElemento.dataset.valor = valorClassificacao;
  
  
      // Atualiza a exibição da classificação
      atualizarClassificacao();
    });
  });
  
  
  // Calcula a classificação média
  const classificacaoMedia = somaClassificacoes / numClassificacoes;
  
  
  // Seleciona a imagem do prato principal
  const imagemPrato = document.querySelector('.imagem-prato');
  
  
  // Função para adicionar a classe de animação
  function adicionarAnimacao() {
    imagemPrato.classList.add('scroll-animation');
  }
  
  
  // Verifica quando a página for completamente carregada
  window.addEventListener('load', adicionarAnimacao);
  
  
  