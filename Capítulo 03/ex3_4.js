const prompt = require("prompt-sync")()

const pesoKg = Number(prompt('Qual o peso da ração? (KG) '))
const consumo = Number(prompt('Digite o consumo diário em (Gr): '))

const pesoGr = pesoKg * 1000
const dias = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo

console.log(`Duração ${dias.toFixed(0)} dias`)
console.log(`Sobra ${sobra}gr`)

