// Vetores

const vetor = ['Hygor', 'Stephanne', 'Anne', 'Velnice', 'Romilton'];


// Inclusão e Exclusão de Itens no Vetor

vetor.push()     // adiciona um elemento no final do vetor
vetor.unshift()  // adiciona um elemento no inicio do vetor e desloca os demais para uma posição abaixo
vetor.pop()      // remove o último item do vetor
vetor.shift()    // remove o primeiro elemento e desloca os demais existententes uma posição acima

vetor.slice(-2)   // obtem os 2 ultimos items
vetor.slice(0, -1) // obtem do inicio até o final, exceto a última

const retira = vetor.splice(2, 1)  // remove a partir da posição 2, 1 elemento
console.log(vetor)
console.log(retira)