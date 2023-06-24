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
  
  
  