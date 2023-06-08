const frm = document.querySelector("form")
const respIn = document.querySelector("#invalido")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const saque = Number(frm.inSaque.value)

  if ( saque % 10 != 0) { //se saque não é multiplo de 10
    alert("Valor inválido para as notas disponíveis (R$ 10, 50 e 100)")
    frm.inSaque.focus()
    return
    // respIn.innerText = 'O valor informado é inválido, notas disponiveis de 10, 50 e 100'
    // respIn.focus()
  }

  const notasCem = Math.floor(saque / 100) //calcula as notas de 100
  let resto = saque % 100   //quanto sobra para pagar
  const notasCinquenta = Math.floor(resto / 50)   //calcula notas de 50
  resto = resto % 50    // quanto ainda sobra
  const notasDez = Math.floor(resto / 10)  //calcula as notas de 10

  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }
})