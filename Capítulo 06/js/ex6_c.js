const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = [];

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = frm.inCandidato.value;
  const acertos = frm.inAcertos.value;
  candidatos.push({ nome, acertos })
  listar()
  frm.inCandidato.value = "";
  frm.inAcertos.value = "";
  frm.inCandidato.focus()
})

function listar() {
  let lista = "";
  candidatos.forEach((pessoa, index) => {
    lista += `${index}- ${pessoa.nome} | nota: ${pessoa.acertos}\n`
  })
  resp.innerText = lista;
}

function aprovados() {
  let listaAprovados = "";
  const aprovacao = Number(prompt("Digite o valor para aprovação: "));

  const copiaCandidatos = candidatos.slice()
  copiaCandidatos.sort((a, b) => { a.acertos - b.acertos }).reverse()
  const aprovados = copiaCandidatos.filter(pessoa => pessoa.acertos >= aprovacao)

  aprovados.forEach((pessoa, index) => {
    listaAprovados += `${index}- ${pessoa.nome} | nota: ${pessoa.acertos}\n`
  })
  resp.innerText = listaAprovados;
}
frm.btListar.addEventListener('click', listar)
frm.btAprovados.addEventListener('click', aprovados)