const prompt = require("prompt-sync")();
console.log("Informe os valores dos saques ou 0 para sair")
const saques = []
do {
  const valor = Number(prompt("Digite o valor que deseja sacar: "))
  if (valor == 0) {
    break
  }
  saques.push(valor);
  if (valor % 10 == 0) {
    console.log("-".repeat(40) + `\nO saque de R$ ${valor.toFixed(2)} foi realizado com sucesso!\n` + "-".repeat(40))
  } else {
    console.log("-".repeat(40) + `\nO valor digitado é invalido. digite um valor multiplo de 10\n` + "-".repeat(40))
  }
} while (true)
console.log("\nAgradecemos por utilizar o nosso caixa 24h\n")
console.log("-".repeat(40))
const saquesValidos = saques.filter(saque => saque % 10 == 0)
saquesValidos.forEach((saque, index) => {
  console.log(`${index + 1}° - R$ ${saque.toFixed(2)}`)
})
console.log("-".repeat(40))
const totalSacado = saquesValidos.reduce((acumuldaor, num) => acumuldaor + num, 0)
console.log(`O valor total sacado foi de R$ ${totalSacado.toFixed(2)}`)
const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNúmero de tentativas inválidas: ${saquesInvalidos}`)