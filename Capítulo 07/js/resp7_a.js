const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  let msgCriptoPar = "";
  let msgCriptoImp = "";

  const msg = frm.inMensagem.value;
  const tam = msg.length;

  for (let i = 0; i < tam; i++) {
    if ((i + 1) % 2 == 0) {
      msgCriptoPar += msg.charAt(i)
    } else {
      msgCriptoImp += msg.charAt(i);
    }
  }
  resp.innerText = msgCriptoPar + msgCriptoImp;
});

frm.btDecript.addEventListener("click", () => {
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada")
    frm.inMensagem.focus()
    return
  }
  const mensagem = frm.inMensagem.value
  // const tam = mensagem.length;
  // const metade = Math.ceil(tam / 2);
  // let resposta = ""
  const tam = mensagem.length
  const metade = Math.floor(tam / 2)
  let resposta = ""

  if (tam % 2 == 0) {
    for (let i = metade; i < tam; i++) {
      resposta += mensagem.charAt(i)
      resposta += mensagem.charAt(i - metade)
    }
  } else {
    for (let i = metade; i < tam - 1; i++) {
      resposta += mensagem.charAt(i)
      resposta += mensagem.charAt(i - metade)
    }
    resposta += mensagem.charAt(tam - 1)
  }

  resp.innerText = resposta
})