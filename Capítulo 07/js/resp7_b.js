const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const frase = frm.inFrase.value;
  const fraseEnt = frase.replace(/\ /g, "").toLowerCase();
  const tam = fraseEnt.length;
  let fraseVeri = ''.toLowerCase();

  for (let i = 1; i <= tam; i++) {
    fraseVeri += fraseEnt[tam - i]
  }

  if (fraseEnt == fraseVeri) {
    resp.innerText = `A frase ${frase.toUpperCase()} é um palíndromo`;
  } else {
    resp.innerText = `A frase digitada não é um palíndromo`
  }

})