const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value
  const preco = Number(frm.inValor.value)

  const entrada = preco / 2
  const parcelas = entrada / 12

  resp1.innerText = `Promoção de: ${veiculo}`
  resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
  resp3.innerText = `12x de R$ ${parcelas.toFixed(2)}`
  frm.inVeiculo.innerText = `teste`

  e.preventDefault()
})