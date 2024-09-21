const frm = document.querySelector('form');
const btnExecutar = frm.btExecutar;

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = frm.inServico.value;

  if (localStorage.getItem('servicosOficina')) {
    const servicos = localStorage.getItem('servicosOficina').split(';');

    servicos.push(item);
    localStorage.setItem('servicosOficina', servicos.join(';'));
  } else {
    localStorage.setItem('servicosOficina', item);
  }
  frm.inServico.value = '';
  listarServico();
});
const listarServico = () => {
  const exibirQnt = document.querySelector('h3 span');
  if (localStorage.getItem('servicosOficina')) {
    const qntServico = localStorage.getItem('servicosOficina').split(';');
    exibirQnt.innerHTML = qntServico.length;
  } else {
    exibirQnt.innerHTML = 0;
  }
};

btnExecutar.addEventListener('click', () => {
  const listarServicos = localStorage.getItem('servicosOficina').split(';');
  const emExecucao = listarServicos.shift();
  document.querySelector('h4').innerText = emExecucao;
  localStorage.setItem('servicosOficina', listarServicos.join(';'));
  listarServico();
});

listarServico();
