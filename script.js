function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.add('hidden'));

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.remove('hidden');
  }
}
