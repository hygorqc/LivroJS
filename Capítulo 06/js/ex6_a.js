const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nomeClube = frm.inClube.value;
  clubes.push(nomeClube)

  frm.btListar.dispatchEvent(new Event("click"))

  frm.inClube.value = ""
  frm.inClube.focus()
})

frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes na lista...")
    inClube.focus()
    return
  }
  let lista = ""

  clubes.forEach((clube, index) => {
    lista += `${index + 1} - ${clube}\n`
  })
  resp.innerText = lista
})

frm.btMontar.addEventListener("click", () => {
  const tamanho = clubes.length;

  if (tamanho % 2 != 0) {
    alert("Não pode ser montada uma tabela com um número ímpar de times")
    return
  }

  let tabela = ""

  const ultimo = tamanho - 1;

  for (i = 0; i < tamanho / 2; i++) {
    tabela += `${clubes[i]} x ${clubes[ultimo - i]}\n`
  }

  resp.innerText = tabela
})