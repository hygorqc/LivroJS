const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp1 = document.querySelector("h4")

const numeros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = frm.inNumero.value;
  const repedido = numeros.includes(numero)

  if (repedido) {
    alert("O valor já contém no array, digite um valor diferente")
  } else {
    numeros.push(numero)
    resp.innerText = "Números: " + numeros.join(", ")
  }
  frm.inNumero.value = ""
  frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
  if (numeros.length == 0) {
    alert("Não há números na lista...")
    frm.inNumero.focus()
    return
  }

  let ordem = true

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false
      break
    }
  }
  resp1.innerText = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"
})