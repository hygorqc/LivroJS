const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);
  let numDivisores = 0; // desclara e inicializa o contador

  // for (let i = 1; i <= num; i++) { // percorre todos os possiveis divisores de num
  //   if (num % i == 0) {    // verifica se 1, 2, 3... é divisor de 1
  //     numDivisores++      // se é, incrementa contador
  //   }
  // }
  // if (numDivisores == 2) {   // se possui apenas 2 divisores é primo
  //   resp.innerText = `${num} é primo`
  // } else {
  //   resp.innerText = `${num} não é primo`
  // }

  /* Verificação com for otimizado */
  let temDivisor = 0    // declara e inicializa uma variável tipo flag

  for (let i = 2; i <= num / 2; i++) {  //percorre os possíveis divisores do num
    if (num % i == 0) {   // se tem um divisor
      temDivisor = 1;     // muda o flag
      break   //sai da repetição
    }
  }
  if (num > 1 && !temDivisor) {     // se num > 1 e não possui divisor
    resp.innerText = `${num} é primo`
  } else {
    resp.innerText = `${num} não é primo`
  }

})