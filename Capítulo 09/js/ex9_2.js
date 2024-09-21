const inRadios = document.querySelectorAll('input');
const inClube = document.querySelector('#imgClube');
const divTitulo = document.querySelector('#divTitulo');

const trocarClube = () => {
  let clubes = ['Brasil', 'Pelotas', 'Farroupilha'];

  let selecao;

  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i;
      break;
    }
  }
  if (selecao <= 2) {
    divTitulo.className = `row cores-${clubes[selecao]}`;
    inClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
    inClube.className = `img-fluid`;
    inClube.alt = `Simboleo do ${clubes[selecao]}`;
    localStorage.setItem('clube', clubes[selecao]);
  } else {
    divTitulo.className = 'row';
    inClube.className = 'd-none';
    inClube.alt = '';
    localStorage.removeItem('clube');
  }
};

for (const inRadio of inRadios) {
  inRadio.addEventListener('change', trocarClube);
}

const verificarClube = () => {
  if (localStorage.getItem('clube')) {
    const clube = localStorage.getItem('clube');
    if (clube == 'Brasil') {
      inRadios[0].checked = true;
    } else if (clube == 'Pelotas') {
      inRadios[1].checked = true;
    } else {
      inRadios[2].checked = true;
    }
    trocarClube();
  }
};

window.addEventListener('load', verificarClube);
