const prompt = require('prompt-sync')();
const formula = prompt('Formula: ');

let abre = 0;
let fecha = 0;

for (const simbolo of formula) {
  if (simbolo == "(") {
    abre++
  } else if (simbolo == ")") {
    fecha++
  }
  if (fecha > abre) {
    break
  }
}

if (abre == fecha) {
  console.log(`A formúla: ${formula} esta correta. | ${abre}`)
} else {
  console.log(`A formula não é válida.`)
}