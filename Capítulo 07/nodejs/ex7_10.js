const prompt = require('prompt-sync')();
const altura = Number(prompt('Digite e altura da árvore: '));
console.log();

for (let i = 1; i <= altura; i++) {
  const espacos = 30 + (altura - i);
  console.log(" ".repeat(espacos) + "*".repeat(i * 2))
}
for (let i = 1; i <= altura / 2; i++) {
  const espacos = 30 + (altura - 1);
  console.log(" ".repeat(espacos) + "*".repeat(2))
}