const frm = document.querySelector("form")
const total = document.querySelector("h3")

frm.addEventListener("submit", (a) =>{
  const quilo = Number(frm.inPreco.value)
  const consumo = Number(frm.inConsumo.value)

  const valor = (quilo / 1000) * consumo

  total.innerText = `O valor para seu consumo é R$ ${valor.toFixed(2)}`

  a.preventDefault()
})