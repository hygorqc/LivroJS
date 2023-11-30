const prompt = require("prompt-sync")()

const clientes = [];

do {
  const nome = prompt("Digite o nome do cliente: ")
  if (nome == "Fim") {
    break
  }
  const idade = Number(prompt("Digite a idade: "))
  clientes.push({ nome, idade })
  console.log("\nCliente cadastrado.")
} while (true)
console.log("-".repeat(40))
console.log("Fila preferencial\n" + "-".repeat(40))
const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`)
})
console.log("-".repeat(40))

console.log("Fila normal\n" + "-".repeat(40))
const filaNormal = clientes.filter(cliente => cliente.idade < 60)
filaNormal.forEach((fila, i) => {
  console.log(`${i + 1}. ${fila.nome}`)
})