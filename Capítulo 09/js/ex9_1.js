const frm = document.querySelector('form');
const inClube = document.querySelector('#imgClube');
const divTitulo = document.querySelector('#divTitulo');

const trocarClube = () => {
  let clube;

  if (frm.rbBrasil.checked) {
    clube = 'Brasil';
  } else if (frm.rbPelotas.checked) {
    clube = 'Pelotas';
  } else {
    clube = 'Farroupilha';
  }

  divTitulo.className = `row cores-${clube}`;

  inClube.src = `img/${clube.toLowerCase()}.png`;
  inClube.className = `img-fluid`;
  inClube.alt = `Símbolo do ${clube}`;

  localStorage.setItem('clube', clube);
};

frm.rbBrasil.addEventListener('change', trocarClube);
frm.rbPelotas.addEventListener('change', trocarClube);
frm.rbFarroupilha.addEventListener('change', trocarClube);

const verificarClube = () => {
  if (localStorage.getItem('clube')) {
    const clube = localStorage.getItem('clube');
    if (clube == 'Brasil') {
      frm.rbBrasil.checked = true;
    } else if (clube == 'Pelotas') {
      frm.rbPelotas.checked = true;
    } else {
      frm.rbFarroupilha.checked = true;
    }
    trocarClube();
  }
};

window.addEventListener('load', verificarClube);
