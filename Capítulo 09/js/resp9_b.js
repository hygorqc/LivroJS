const frm = document.querySelector('form');
const btnLimpar = document.querySelector('#btLimpar');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = frm.inProduto.value;

  if (localStorage.getItem('comprarItens')) {
    const produtos = localStorage.getItem('comprarItens').split(';');

    if (produtos.includes(item)) {
      alert('Item já cadastrado, tente adicionar um novo.');
    } else {
      produtos.push(item);
      produtos.sort();
      localStorage.setItem('comprarItens', produtos.join(';'));
    }
  } else {
    localStorage.setItem('comprarItens', item);
  }
  frm.inProduto.value = '';
  frm.inProduto.focus();
  listarProdutos();
});

const listarProdutos = () => {
  const lista = localStorage.getItem('comprarItens').split(';');
  let newLista = '';
  for (let i = 0; i < lista.length; i++) {
    newLista += lista[i] + '\n';
  }
  resp.innerText = 'Lista de compras \n' + '-'.repeat(20) + '\n' + newLista;
};

btnLimpar.addEventListener('click', () => {
  if (localStorage.getItem('comprarItens')) {
    localStorage.removeItem('comprarItens');
    resp.innerText = '';
  } else {
    alert('LocalStorage já está limpo');
  }
});
window.addEventListener('load', listarProdutos);
