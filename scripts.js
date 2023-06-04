
const secoes = document.querySelectorAll('.question');
secoes.forEach(secao => {
  secao.addEventListener('click', () => {
    const paragrafo = secao.querySelector('div');
    paragrafo.style.display = (paragrafo.style.display === 'none') ? 'block' : 'none';
  });
});

