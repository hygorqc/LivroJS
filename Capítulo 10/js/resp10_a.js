const frm = document.querySelector('form');
const divIdade = document.querySelector('#divIdade');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const idade = Number(frm.inIdade.value);

  const strIdade = idade.toString();

  for (const num of strIdade) {
    const img = document.createElement('img');
    img.src = `img/${num}.jpg`;
    img.alt = `Vela de ${num} abos`;
    divIdade.appendChild(img);
  }
  e.submitter.disabled = true;
});

frm.addEventListener('reset', () => {
  location.reload();
});
