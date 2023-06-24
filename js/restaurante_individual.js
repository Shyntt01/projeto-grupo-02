// Criei elemento div para colocar as imagens
const divImagens = document.createElement("div"); 
divImagens.classList.add("imagens");

// Coloquei a seleção dos caminhos das imagens
const caminhosImagens = [
  "./assets/Fotos restaurante individual/Galinha caipira com quiabo.png",
  "./assets/Fotos restaurante individual/Mungunzá-doce.jpg",
  "./assets/Fotos restaurante individual/Carne de sol com mandioca.png",
  "./assets/Fotos restaurante individual/Pamonha (2).png",
  "./assets/Fotos restaurante individual/Feijoada nordestina.png",
  "./assets/Fotos restaurante individual/Bolo de milho.png"
];

// Array dos caminhos
for (let i = 0; i < caminhosImagens.length; i++) {
  const caminho = caminhosImagens[i];

  // Criei elemento <img> para cada imagem
  const imagem = document.createElement("img");
  imagem.src = caminho;

  // Adicionei a class imagem1 para 3 primeiras fotos e imagem2 para as demais
  if (i < 3) {
    imagem.classList.add("imagem1");
  } else {
    imagem.classList.add("imagem2");
  }

  // Coloquei a imagem no <div class="imagens">
  divImagens.appendChild(imagem);
}

// Selecionei a parte do título
const retangulo = document.querySelector(".retangulo");

// Coloquei as imagens abaixo do retangulo(titulo)
retangulo.insertAdjacentElement("afterend", divImagens);
