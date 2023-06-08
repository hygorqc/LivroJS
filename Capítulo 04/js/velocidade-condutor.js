const frm = document.querySelector("form");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const permitida = Number(frm.inPermitida.value);
  const condutor = Number(frm.inCondutor.value);
 
  let verifica;

  if(condutor <= permitida) {
    verifica = 'Sem multa'
  } else if (condutor <= ((permitida*0.2) + permitida)) {
    verifica = 'Multa Leve'
  } else {
    verifica = 'Multa Grave'
  }
 
  resp.innerText = `Situação: ${verifica}`

})