// cria a referencia ao form e elementos de resposta do programa

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault() //evita envio do form
  const nome = frm.inNome.value //obtem valorres do form
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  const media = (nota1 + nota2) / 2

  resp1.innerText = `${media}`

  // condições
  if(media >= 7) {
    //altera o texto e estilo da cor da resp2
    resp2.innerText = `Parabéns ${nome} você foi aprovado!`
    resp2.style.color = 'blue'
  } else {
    resp2.innerText = `Eita, ${nome}! Reprovado.`
    resp2.style.color = 'red'
  }
})