const url = new URL(window.location.href);
let restaurante = {};
const restaurantes = [
	{
		id: 1,
		nome: "Sabores do Sertão",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/SaboresDoSertão.jpg" class="imagem1"/>
    `,
    descricao: `<p>
    O Restaurante <b>Sabores do Sertão</b> é um estabelecimento gastronômico localizado no centro de <b>São Paulo</b>,
    oferecendo aos clientes uma experiência única de culinária tradicional do sertão brasileiro.<br>
    <br>
    Com uma localização privilegiada, o restaurante é de fácil acesso para todos, seja por transporte público ou particular.<br>
    Ao adentrar o restaurante <b>Sabores do Sertão</b>, os clientes são recebidos em um ambiente calmo e acolhedor, projetado
    para proporcionar uma experiência agradável e relaxante. A decoração é cuidadosamente planejada, incorporando elementos
    rústicos e regionais que refletem a cultura e tradição do sertão.<br>
    <br>
    A atmosfera tranquila do restaurante é complementada por uma iluminação suave e uma música ambiente agradável,
    criando um clima perfeito para desfrutar de uma refeição em paz. A equipe de atendimento é conhecida por sua hospitalidade
    e cordialidade, garantindo que os clientes se sintam bem-vindos e confortáveis durante toda a visita. <br>
    <br>
    Entre os pratos icônicos do <b>Sabores do Sertão</b>, destacam-se a carne de sol suculenta, acompanhada por deliciosas guarnições típicas.
    Também são oferecidos pratos à base de peixes e frutos do mar, garantindo uma variedade de opções para os amantes da culinária regional.

    Além disso, o restaurante conta com uma carta de vinhos selecionada, que harmoniza perfeitamente com os pratos servidos.
    Para completar a experiência gastronômica, o restaurante oferece sobremesas caseiras irresistíveis, como o delicioso bolo de milho. <br>
    O Restaurante <b>Sabores do Sertão</b> é mais do que um simples lugar para refeições, é um convite a uma viagem culinária ao sertão brasileiro.
  </p>`
	},
	{
		id: 2,
		nome: "Brasa & Sabor",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/Brasa&Sabor.jpg" class="imagem1"/>`,
    descricao: `<p>
    O Restaurante <b>Brasa & Sabor</b> é um estabelecimento gastronômico localizado no coração de <b>Rio de Janeiro</b>,
    oferecendo aos clientes uma experiência única de culinária com sabores autênticos e pratos grelhados irresistíveis.<br>
    <br>
    Com uma localização privilegiada, o restaurante é facilmente acessível a todos, seja por transporte público ou particular.<br>
    Ao entrar no restaurante <b>Brasa & Sabor</b>, os clientes são recebidos em um ambiente acolhedor e sofisticado,
    cuidadosamente decorado para proporcionar uma experiência agradável e memorável. Os detalhes da decoração evocam
    uma atmosfera de churrasco tradicional, com elementos rústicos e um toque contemporâneo.<br>
    <br>
    A atmosfera aconchegante do restaurante é complementada por uma iluminação suave e uma trilha sonora selecionada,
    criando um ambiente perfeito para desfrutar de uma refeição saborosa. A equipe de atendimento é reconhecida por sua
    hospitalidade calorosa, garantindo que os clientes se sintam bem-vindos e bem cuidados durante toda a sua visita.<br>
    <br>
    Entre os pratos icônicos do <b>Brasa & Sabor</b>, destacam-se os suculentos cortes de carne grelhada, acompanhados por deliciosos
    acompanhamentos e molhos exclusivos. O restaurante também oferece opções de frango, peixe e vegetais grelhados, atendendo a
    todos os gostos e preferências.<br>
    <br>
    Além disso, o restaurante conta com uma seleção de vinhos de qualidade, cuidadosamente escolhidos para complementar os sabores
    intensos das carnes grelhadas. Para finalizar a experiência gastronômica, o Brasa & Sabor oferece uma variedade de sobremesas
    irresistíveis, incluindo o clássico pudim de leite.<br>
    O Restaurante <b>Brasa & Sabor</b> é mais do que um simples local para refeições, é um destino imperdível para os amantes de churrasco
    e apreciadores de uma culinária autêntica e saborosa.
  </p>`
	},
	{
		id: 3,
		nome: "Comida Raiz",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/ComidaRaiz.jpg" class="imagem1"/>
    `,
    descricao: `<p>
    O Restaurante <b>Comida Raiz</b> é um lugar especial localizado no coração de <b>Recife</b>, conhecido por oferecer uma autêntica
    experiência de comida regional. Nosso compromisso é preservar as raízes da culinária brasileira, resgatando receitas tradicionais
    e sabores que fazem parte da identidade cultural do nosso país.<br>
    <br>
    Ao adentrar o Restaurante Comida Raiz, você será transportado para um ambiente acolhedor e nostálgico, que remete às casas de
    família e aos sabores caseiros. Nossa decoração rústica e aconchegante cria a atmosfera perfeita para desfrutar de uma refeição
    saborosa e reconfortante.<br>
    <br>
    Nossa equipe de chefs talentosos é apaixonada por ingredientes frescos e regionais, buscando sempre trabalhar com produtores
    locais. No Comida Raiz, você encontrará pratos típicos do Nordeste, como tapiocas, carne de sol, buchada de bode, além de
    uma variedade de opções vegetarianas inspiradas na riqueza dos ingredientes nativos da região.<br>
    <br>
    Além disso, valorizamos a tradição das bebidas brasileiras, oferecendo uma seleção de cachaças artesanais e sucos naturais
    que complementam perfeitamente as refeições. Para finalizar sua experiência, não deixe de experimentar nossas sobremesas
    regionais, como o bolo de rolo e o cartola.<br>
    O Restaurante <b>Comida Raiz</b> é o destino perfeito para aqueles que desejam vivenciar os sabores autênticos e a hospitalidade
    acolhedora da culinária regional brasileira.
  </p>
  `
	},
  {
		id: 4,
		nome: "Sabor Carioca",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/SaborCarioca.jpg" class="imagem1"/>
    `,
    descricao: `<p>
    O Restaurante <b>Sabor Carioca</b> é um verdadeiro tesouro culinário localizado no coração do Rio de Janeiro.
    Inspirado pela rica cultura e tradições da cidade, oferecemos aos nossos clientes uma experiência gastronômica única,
    repleta de sabores autênticos e pratos que representam a essência do Rio.<br>
    <br>
    Ao adentrar o Restaurante Sabor Carioca, você será recebido com um ambiente vibrante e descontraído, onde o samba e a
    alegria estão sempre presentes. Nossa equipe calorosa e atenciosa está pronta para atender você com o típico jeito
    carioca, garantindo que sua visita seja memorável.<br>
    <br>
    Nossa cozinha é uma verdadeira celebração dos sabores cariocas. Preparamos pratos icônicos da culinária local, como
    a feijoada, o bobó de camarão, a moqueca, além de opções vegetarianas e veganas inspiradas nos ingredientes frescos e
    coloridos encontrados nos mercados locais.<br>
    <br>
    Para acompanhar sua refeição, oferecemos uma seleção de caipirinhas e drinques tropicais, que capturam a energia e a
    diversidade da vida carioca. E para adoçar seu paladar, experimente nossas sobremesas deliciosas, como o pudim de leite
    condensado e o quindim.<br>
    O Restaurante <b>Sabor Carioca</b> é um verdadeiro tesouro da culinária do Rio de Janeiro, convidando você a mergulhar nos sabores,
    aromas e alegria dessa cidade maravilhosa.
  </p>  
  `
	},
  {
		id: 5,
		nome: "Cozinha do Brasil",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/CozinhaDoBrasil.jpg" class="imagem1"/>
    `,
    descricao: `<p>
    O Restaurante <b>Cozinha do Brasil</b> é um lugar encantador localizado em um dos bairros mais charmosos de <b>São Paulo</b>.
    Nosso objetivo é proporcionar aos clientes uma verdadeira imersão na culinária brasileira, com pratos que resgatam as tradições
    e sabores de todas as regiões do país.<br>
    <br>
    Com uma atmosfera acolhedora e descontraída, o restaurante Cozinha do Brasil oferece uma experiência gastronômica única.
    Nossa equipe é dedicada em proporcionar um serviço atencioso e amigável, garantindo que os clientes se sintam em casa e
    desfrutem de momentos memoráveis em cada visita.<br>
    <br>
    Nossos pratos são preparados com ingredientes frescos e selecionados, criando uma explosão de sabores autênticos.
    Do Norte ao Sul do Brasil, nossa equipe de chefs talentosos recria pratos tradicionais, como a feijoada, o acarajé, o
    churrasco gaúcho e muitos outros, sempre preservando a essência e originalidade de cada receita.<br>
    <br>
    Além disso, o Cozinha do Brasil oferece uma extensa carta de bebidas, incluindo uma variedade de coquetéis brasileiros
    clássicos e exclusivos, perfeitos para acompanhar a sua refeição. E para adoçar o paladar, não deixe de experimentar as
    irresistíveis sobremesas brasileiras, como o brigadeiro, o quindim e a cartola.<br>
    O Restaurante <b>Cozinha do Brasil</b> é um verdadeiro tesouro culinário, convidando você a saborear o melhor da comida brasileira
    em um ambiente acolhedor e repleto de sabor.
  </p>  
  `
	},
  {
		id: 6,
		nome: "Comida de Boteco",
    avaliacaoPrecoMapa: `
    <div class="avaliacao">
      <b>Avaliação</b>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
      <i class="fas fa-star" style="color: yellow;"></i>
    </div>
    <div class="preco">
      <b>Preço</b>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
      <i class="fa-solid fa-dollar-sign" style="color: #1E5D00;"></i>
    </div>
    <div class="mapa">
      <b>Localidade</b>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.548077933368!2d-46.641414837634265!3d-23.563521912642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a46b9d0227%3A0x83d2c9982d91ec19!2sHotel%20Lido%20Plaza!5e0!3m2!1spt-BR!2sbr!4v1685571701330!5m2!1spt-BR!2sbr" 
          width="300" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    `,
    imagens: `
    <img src="./assets/FotosRestauranteIndividual/ComidaDeButeco.jpg" class="imagem1"/>
    `,
    descricao: `<p>
    O Restaurante <b>Comida de Boteco</b> é um lugar descontraído e acolhedor que celebra a cultura dos botecos brasileiros.
    Localizado no coração de uma das cidades mais vibrantes do país, oferecemos aos nossos clientes uma experiência autêntica
    de comida de boteco, com pratos saborosos e ambiente descontraído.<br>
    <br>
    Ao entrar no Restaurante Comida de Boteco, você será transportado para uma atmosfera animada e alegre, que remete aos tradicionais
    botecos brasileiros. Nossa decoração é inspirada no estilo rústico e descontraído, com mesas de madeira, fotos antigas nas paredes
    e uma trilha sonora eclética que embala a experiência gastronômica.<br>
    <br>
    Nossa equipe de chefs talentosos se dedica a preparar os clássicos da culinária de boteco com maestria. Aqui você encontrará
    delícias como coxinhas, bolinhos de bacalhau, caldinho de feijão, pastéis e muitos outros petiscos irresistíveis. Além disso,
    oferecemos opções de pratos principais que são verdadeiros comfort foods, como feijoada, tropeiro e bife acebolado.<br>
    <br>
    Para acompanhar sua refeição, temos uma extensa carta de cervejas artesanais e drinques refrescantes, perfeitos para harmonizar
    com os sabores intensos dos petiscos. E, é claro, não poderiam faltar as sobremesas tradicionais de boteco, como pudim de leite
    e doce de leite com queijo.<br>
    O Restaurante <b>Comida de Boteco</b> é o destino ideal para aqueles que desejam desfrutar de boa comida, bebidas geladas e
    um clima descontraído, em um ambiente que celebra a tradição e o espírito dos botecos brasileiros.
  </p>    
  `
	},
];

if (
	url.searchParams.has("restaurante") ||
	url.searchParams.get("restaurante")
) {
  restaurante = restaurantes.filter((element)=>{
    if(url.searchParams.get("restaurante") == element.id){
      return true
    }
  })[0];
  console.table(restaurante)
	console.log(url.searchParams.get("restaurante"));
}

document.querySelector('.titulo').innerHTML = restaurante.nome;
document.querySelector('.texto').innerHTML = restaurante.descricao;
document.querySelector('.avaliacao-preco-mapa').innerHTML = restaurante.avaliacaoPrecoMapa;
document.querySelector('.imagens').innerHTML = restaurante.imagens



// // Criei elemento div para colocar as imagens
// const divImagens = document.createElement("div");
// divImagens.classList.add("imagens");

// // Coloquei a seleção dos caminhos das imagens
// const caminhosImagens = [
// 	"./assets/Fotos restaurante individual/Galinha caipira com quiabo.png",
// 	"./assets/Fotos restaurante individual/Mungunzá-doce.jpg",
// 	"./assets/Fotos restaurante individual/Carne de sol com mandioca.png",
// 	"./assets/Fotos restaurante individual/Pamonha (2).png",
// 	"./assets/Fotos restaurante individual/Feijoada nordestina.png",
// 	"./assets/Fotos restaurante individual/Bolo de milho.png",
// ];

// // Array dos caminhos
// for (let i = 0; i < caminhosImagens.length; i++) {
// 	const caminho = caminhosImagens[i];

// 	// Criei elemento <img> para cada imagem
// 	const imagem = document.createElement("img");
// 	imagem.src = caminho;

// 	// Adicionei a class imagem1 para 3 primeiras fotos e imagem2 para as demais
// 	if (i < 3) {
// 		imagem.classList.add("imagem1");
// 	} else {
// 		imagem.classList.add("imagem2");
// 	}

// 	// Coloquei a imagem no <div class="imagens">
// 	divImagens.appendChild(imagem);
// }

// // Selecionei a parte do título
// const retangulo = document.querySelector(".retangulo");

// // Coloquei as imagens abaixo do retangulo(titulo)
// retangulo.insertAdjacentElement("afterend", divImagens);



