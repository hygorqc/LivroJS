// entrada no clube custa 20,00
// cada pessoa pode levar 1 peixe caso leve mais tem que pagar 12,00
//leia o número de pessoas da famila e a quantidade de peixes

const prompt = require("prompt-sync")();  //adiciona pacote prompt-sync
const pessoas = Number(prompt("Nº Pessoas: "));
const peixes = Number(prompt("Nº Peixes: "));

let pagar;
if(peixes <= pessoas) {
  pagar = pessoas * 20;
} else {
  pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)