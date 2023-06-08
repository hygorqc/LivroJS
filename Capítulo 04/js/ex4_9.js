const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número (centena): "))

if (numero <= 100 || numero >= 1000) {
  console.log("Erro o valor não é uma dezena")
  return
}

const num1 = Math.floor(numero / 100)
const resto = numero % 100
const num2 = Math.floor(resto / 10)
const num3 = resto % 10

console.log(`A sequência invertida é ${num3}${num2}${num1}`)