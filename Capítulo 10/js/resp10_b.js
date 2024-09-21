const frm = document.querySelector('form');
const divNome = document.querySelector('#divNome');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const parteNome = nome.split(' ');

  const nomeExistente = document.querySelectorAll('h3');
  console.log(nomeExistente);
  for (let i = nomeExistente.length - 1; i >= 0; i--) {
    divNome.removeChild(nomeExistente[i]);
  }

  const cores = [
    'blue',
    'red',
    'yellow',
    'green',
    'orange',
    'chocolate',
    'deeppink',
    'purple',
    'violet',
    'aquamarine',
  ];
  for (let i = 0; i < parteNome.length; i++) {
    const h3 = document.createElement('h3');
    h3.innerText = parteNome[i];
    h3.style.color = cores[Math.ceil(Math.random() * 10)];
    divNome.appendChild(h3);
  }
});
