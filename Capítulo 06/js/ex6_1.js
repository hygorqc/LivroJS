const frm = document.querySelector("form");
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [];

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = frm.inPaciente.value   // obtem o nome do paciente
  pacientes.push(nome)    // adiciona o nome do paciente ao final do vetor
  let lista = ''
  // fot tradicional (inicia em 0, enquanto menor queo o tamamho do array)
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }
  respLista.innerText = lista;    // exibe a lista de pacientes
  frm.inPaciente.value = "";    // limpa o conteúdo do campo do form
  frm.inPaciente.focus();   // posiciona o cursor no campo
})

// adiciona um "ouvinte" para o evento de click no botao btUrgencia que está no form

frm.btUrgencia.addEventListener("click", () => {
  //verifica se as validades do form estão ok (no caso, paciente is required)
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência")
    frm.inPaciente.focus()
    return
  }
  const nome = frm.inPaciente.value;
  pacientes.unshift(nome); // adiciona o nome do pacinete no incio do array
  let lista = "";
  // forEach aplicado sobre o array de pacientes
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  }
  )
  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
})

frm.btAtender.addEventListener("click", () => {
  // se o tamanho do vetor for igual a 0
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera")
    frm.inPaciente.focus()
    return
  }
  const atender = pacientes.shift()
  respNome.innerText = atender;
  let lista = "";
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  respLista.innerText = lista;
})