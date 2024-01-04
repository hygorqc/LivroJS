const frm = document.querySelector('form');
const dataLimite = document.querySelector('#outDataLimite');
const desconto = document.querySelector('#outComDesconto');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const dataMulta = frm.inData.value;
  const valor = frm.inValor.value;
  const valorDesc = valor * 0.8;

  const data = new Date();
  const dataParte = dataMulta.split("-");
  console.log(dataParte)

  data.setDate(Number(dataParte[2]))
  data.setMonth(Number(dataParte[1]) - 1)
  data.setFullYear(Number(dataParte[0]))

  const dia = data.getDate()
  data.setDate(dia + 90)      // aumenta 90 dias na data da multa
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()

  dataLimite.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
  desconto.innerText = `Valor com desconto: R$ ${valorDesc}`;
})