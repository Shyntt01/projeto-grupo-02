// Lista de restaurantes disponíveis no nosso site
const paginasRestaurante = [
    { titulo: 'Sabores do Sertão', url: '/restaurante_individual.html?restaurante=1' },
    { titulo: 'Brasa & Sabor', url: '/restaurante_individual.html?restaurante=2' },
    { titulo: 'Comida Raiz', url: '/restaurante_individual.html?restaurante=3' },
    { titulo: 'Sabor Carioca', url: '/restaurante_individual.html?restaurante=4' },
    { titulo: 'Cozinha do Brasil', url: '/restaurante_individual.html?restaurante=5' },
    { titulo: 'Comida de Buteco', url: '/restaurante_individual.html?restaurante=6' },
    // Aqui é possivel adiionar mais páginas de restaurantes no nosso site
  ];
  
  function realizarPesquisaRestaurantes() {
    const valorPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    const resultado = document.getElementById('resultado');
  
    // Limpa o resultado anterior
    resultado.innerHTML = '';
  
    // Realiza a pesquisa
    const resultadosEncontrados = paginasRestaurante.filter(pagina => {
      const titulo = pagina.titulo.toLowerCase();
      const url = pagina.url.toLowerCase();
  
      // Verifica se o valor de pesquisa está presente no título ou na URL da página
      return titulo.includes(valorPesquisa) || url.includes(valorPesquisa);
    });
  
    // Exibe os resultados da pesquisa
    if (resultadosEncontrados.length > 0) {
      resultadosEncontrados.forEach(pagina => {
        const link = document.createElement('a');
        link.href = pagina.url;
        link.textContent = pagina.titulo;
        resultado.appendChild(link);
      });
    } else {
      resultado.textContent = 'Nenhum resultado encontrado.';
    }
  };


  // Lista de receitas disponíveis no nosso site
const paginasReceitas = [
  { titulo: 'Tacacá do Norte', url: '/receita_individual.html?receita=1' },
  { titulo: 'Vatapá', url: '/receita_individual.html?receita=2' },
  { titulo: 'Galinhada', url: '/receita_individual.html?receita=3' },
  { titulo: 'Escondidinho', url: '/receita_individual.html?receita=4' },
  { titulo: 'Moqueca', url: '/receita_individual.html?receita=5' },
  // Aqui é possivel adiionar mais páginas de receitas no nosso site
];

function realizarPesquisaReceitas() {
  const valorPesquisa = document.getElementById('pesquisaReceita').value.toLowerCase();
  const resultado = document.getElementById('resultadoReceita');

  // Limpa o resultado anterior
  resultado.innerHTML = '';

  // Realiza a pesquisa
  const resultadosEncontrados = paginasReceitas.filter(pagina => {
    const titulo = pagina.titulo.toLowerCase();
    const url = pagina.url.toLowerCase();

    // Verifica se o valor de pesquisa está presente no título ou na URL da página
    return titulo.includes(valorPesquisa) || url.includes(valorPesquisa);
  });

  // Exibe os resultados da pesquisa
  if (resultadosEncontrados.length > 0) {
    resultadosEncontrados.forEach(pagina => {
      const link = document.createElement('a');
      link.href = pagina.url;
      link.textContent = pagina.titulo;
      resultado.appendChild(link);
    });
  } else {
    resultado.textContent = 'Nenhum resultado encontrado.';
  }
}
  