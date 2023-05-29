const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
  const valor = frm.valorMin.value
  const minutos = frm.tempoUso.value
  const total = minutos / 15
  const aPagar = Math.ceil(total) * valor

  resp.innerText = `Você vai pagar o valor de R$ ${aPagar.toFixed(2)}`

  e.preventDefault()
})