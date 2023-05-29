const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  const nome = frm.inMedicamento.value
  const preco = Number(frm.inPreco.value)

  const valorP = (Math.floor(preco) * 2)

  resp1.innerText = `Promoção de ${nome}`
  resp2.innerText = `Leve 2 por apenas R$ ${valorP.toFixed(2)}`

  e.preventDefault()
})