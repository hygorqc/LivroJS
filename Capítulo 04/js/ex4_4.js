const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const horaBrasil = Number(frm.inHoraBrasil.value)
  let horaFranca = horaBrasil + 5

  if (horaFranca > 24) {  //se passar das 24 horas na frança
    horaFranca = horaFranca - 24
  }

  resp.innerText = `O horário na França é ${horaFranca.toFixed(2)}`
})