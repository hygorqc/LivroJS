const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const num = frm.inNumero.value
  const raiz = Math.sqrt(num)

  if(Number.isInteger(raiz)) {
    resp.innerText = `A raiz de ${num} é ${raiz}`
    resp.style.color = 'blue'
  } else {
    resp.innerText = `Não há raiz exata para o número ${num}`
    resp.style.color = 'red'
  }
})