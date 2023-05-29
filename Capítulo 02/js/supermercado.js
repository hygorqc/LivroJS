const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value
  const preco = frm.inPreco.value

  const desconto = preco / 2
  const promo = (preco * 3) - desconto

  resp1.innerText = `${produto} - Promoção Leve 3 por R$ ${promo.toFixed(2)}`
  resp2.innerText = `O 3° produto saí por apenas R$ ${desconto.toFixed(2)}`

  e.preventDefault()
})