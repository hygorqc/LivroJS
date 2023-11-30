const prompt = require("prompt-sync")();
console.log('Digite os nomes dos alunos. Digite "FIM" para sair.')
const alunos = [];
do {
  const nome = prompt("Digite o nome do aluno: ")
  if (nome == 'Fim') {
    break
  }
  const nota = Number(prompt("Digite a nota do aluno: "))
  alunos.push({ nome, nota })
  console.log("Aluno cadastrado!\n")
} while (true)
console.log("-".repeat(40));
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior Nota: ${maior}`)
if (maior >= 7) {
  const destaques = alunos.filter(aluno => aluno.nota == maior)
  console.log(destaques)
  for (const destaque of destaques) {
    console.log(` - ${destaque.nome}`)
  }
} else {
  console.log("Não há alunos destaques na turma")
}