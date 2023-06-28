const prompt = require("prompt-sync")();

const chin = Number(prompt("N° chinchilas: "))
const anos = Number(prompt("Anos: "));

let totalChinchilas = 0;

for (let i = 1; i <= anos; i++) {
  if (i == 1) {
    totalChinchilas = totalChinchilas + chin
    console.log(`${i}° ano: ${totalChinchilas} Chinchilas`)
  } else {
    totalChinchilas = totalChinchilas * 3
    console.log(`${i}° ano: ${totalChinchilas} Chinchilas`)
  }
}

// resposta do livro:

// cria uma variável do tipo String, que irá concatenar a resposta
let resposta = ""
let total = chin

// define o laço de repetição
for (let i = 1; i <= anos; i++) {
  resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
  total = total * 3
}
console.log(resposta)