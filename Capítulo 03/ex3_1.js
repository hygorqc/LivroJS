const prompt = require("prompt-sync")() //adiciona o pacote de entrada de dados

const num1 = Number(prompt("1° Número: "))   //Solicita a entrada e lê o número
const num2 = Number(prompt("2° Número: "))   //Solicita a entrada e lê o número

const soma = num1 + num2

console.log(`A soma de ${num1} + ${num2} = ${soma}`)