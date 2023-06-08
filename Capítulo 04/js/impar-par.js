const frm = document.querySelector("form");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = frm.num.value;
 
  const verifica = num % 2 == 0 ? "Par" : "Impar"
 
  resp.innerText = `${num} é ${verifica}`

})