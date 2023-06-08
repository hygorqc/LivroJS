const frm = document.querySelector("form");
const resp1 = document.querySelector(".tempo")
const resp2 = document.querySelector(".troco")

// 1 = 30 min
// 1.75 = 60 min
// 3 = 120 min

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const valor = frm.inValor.value;
  // caso valor insuficiente
  if (valor < 1.00) {
    resp1.innerText = "Valor Insuficiente (no mínimo, R$ 1.00)"
    frm.inValor.focus()
    return
  }

  // declara variáveis
  let tempo
  let troco

  // cria as condições para verificar tempo e troco
  if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  // exibe as respostas
  resp1.innerText = `Tempo: ${tempo} min`
  if (troco != 0) {
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  } else {
    resp2.innerText = ""
  }
})
