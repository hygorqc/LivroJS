const frm = document.querySelector('form');
const result = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = frm.inAtleta.value;
  const idade = frm.inIdade.value;

  function retornarTracos(nome) {
    let tam = nome.length;
    let tracos = '-'.repeat(tam);
    return tracos;
  }

  function categorizarAluno(idade) {
    if (idade <= 12) {
      return 'Infantil';
    } else if (idade <= 18) {
      return 'Juvenil';
    } else {
      return 'Adulto';
    }
  }

  result.innerText = `${nome}\n${retornarTracos(nome)}\n${categorizarAluno(
    idade,
  )}`;
});
