const carros = []

carros.push({ modelo: "Sandero", preco: 46500 })
carros.push({ modelo: "Palio", preco: 36500 })

for (const carro of carros) {
  console.log(`${carro.modelo} - ${carro.preco}`)
}

// desestruturação do objeto
for (const carro of carros) {
  const { modelo, preco } = carro
  console.log(`${modelo} - ${preco}`)
}

// desestruturação de um array
const pacientes = ['Ana', 'Paula', 'Luiz', 'Paty', 'Hygor']
const pacientes2 = [...pacientes]
console.log(pacientes2)
const [atender, proximo, ...outros] = pacientes;
console.log(atender)
console.log(proximo)
console.log(outros)

const carro = { modelo: "Corsa", preco: 59500 }
const carro2 = { ...carro, ano: 2020 }

console.log(carro2)
