const frm = document.querySelector('form');
const resp = document.querySelector('#outPedidos');

const itens = [];

frm.rbPizza.addEventListener('click', () => {
  frm.inBebida.className = "oculta";
  frm.inPizza.className = "exibe";
})

frm.rbBebida.addEventListener('click', () => {
  frm.inBebida.className = "exibe";
  frm.inPizza.className = "oculta";
});

frm.inDetalhes.addEventListener('focus', () => {
  if(frm.rbPizza.checked) {
    const pizza = frm.inPizza.value
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    frm.inDetalhes.placeholder = `Até ${num} sabores` 
  }
})

frm.inDetalhes.addEventListener('blur', () => {
  frm.inDetalhes.placeholder = "";
})

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  let produto;
  if(frm.rbPizza.checked) {
    const num = frm.inPizza.selectedIndex;
    produto = frm.inPizza.options[num].text;
  } else {
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text;
  }
  const detalhes = frm.inDetalhes.value;
  itens.push(`<input type="checkbox" name="" id="${(produto.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/\s/g, ''))}"> <label>${produto} (${detalhes})</label> <br>`);
  resp.innerHTML = itens.join("")

  frm.reset();
  frm.rbPizza.dispatchEvent(new Event("click"))
})