const prompt = require("prompt-sync")();

const num = Number(prompt("Número perfeito: "))

// como 1 é um divisor universal, já iniciamos com ele
let divisores = "Divisores do " + num + ": 1"
let soma = 1

// percorre os possíveis divisores e acumula
for (let i = 2; i <= num / 2; i++) {
  if (num % i == 0) {
    divisores = divisores + ", " + i // vírgula + i (evita última vírgula)
    soma = soma + i
  }
}
divisores = divisores + " (Soma: " + soma + ")"
console.log(divisores)

// verifica se é perfeito e exibe resposta na tag outResposta (resp2)
if (num == soma) {
  console.log(`${num} É um Número Perfeito`)
} else {
  console.log(`${num} Não É um Número Perfeito`)
}

