const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = frm.inNome.value;

  if (!nome.includes(" ")) {
    alert("Por favor digite o nome completo.")
    frm.inNome.focus()
    return
  }

  const prim = nome.indexOf(" ")
  const segn = nome.lastIndexOf(" ")

  const cracha = `${nome.substring(0, prim)} ${nome.substring(segn, nome.length)}`

  resp.innerText = `Seu crachá é: ${cracha}`;
})