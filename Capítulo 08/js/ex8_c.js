const frm = document.querySelector('form');
const convenio = document.querySelector('#pConvenio');
const resp1 = document.querySelector('#outDesconto');
const resp2 = document.querySelector('#outPagar');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const valor = Number(frm.inValor.value);

  let desconto = 0;

  if (frm.rbSim.checked) {
    if (frm.selConvenio.value == 'amigo') {
      desconto = calcularDesconto(valor, 20);
    } else {
      desconto = calcularDesconto(valor, 50);
    }
  } else {
    desconto = calcularDesconto(valor, 10);
  }

  resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`;
  resp2.innerText = `A Pagar R$: ${(valor - desconto).toFixed(2)}`;
});

function calcularDesconto(valor, desc) {
  return valor * (desc / 100);
}

frm.rbSim.addEventListener('change', () => {
  convenio.classList = 'exibe';
});
frm.rbNao.addEventListener('change', () => {
  convenio.classList = 'oculta';
});
