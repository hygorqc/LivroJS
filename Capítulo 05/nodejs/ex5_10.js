const prompt = require("prompt-sync")();

const conta = prompt("Valor: ")
const num = Number(prompt("Número de parcelas: "));

const valorParcelas = Math.floor(conta / num);
const valorFinal = valorParcelas + (conta % num)

for (let i = 1; i < num; i++) {
  console.log(`A ${i}° parcela é: ${valorParcelas.toFixed(2)}`)
}

console.log(`A ${num}° parcela é: ${valorFinal.toFixed(2)}`)