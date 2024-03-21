const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const modelo = frm.inModelo.value;
  const ano = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);
  const classificacao = classificarVeiculo(ano);
  const entrada = calcularEntrada(preco, classificacao);
  const parcela = (preco - entrada) / 10;

  resp1.innerText = modelo + ' - ' + classificacao;
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `Em 10x de R$: ${parcela.toFixed(2)}`;
});

  function classificarVeiculo(ano) {
    const anoAtual = new Date().getFullYear();
    let carro;
    if (ano == anoAtual) {
      carro = 'Novo';
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
      carro = 'Seminovo';
    } else {
      carro = 'Usado';
    }
    return carro;
  }

  const calcularEntrada = (valor, status) => 
    status == 'Novo' ? valor * 0.5 : valor * 0.3;
