// programa que l;eia o salario e o tempo de trabalho fo funcionario ( ofuncionario recebe um aumento de 1% a cada 4 anos)

const prompt = require("prompt-sync")()

const salario = Number(prompt("Digite seu salário: "))
const anos = Number(prompt("Quantos anos trabalha na empresa? "))

const quadrienios = Math.floor(anos / 4)

const acrescimo = salario * quadrienios / 100

console.log(`Quandiênios: ${quadrienios}`)
console.log(`Salário final: ${(salario+acrescimo).toFixed(2)}`)