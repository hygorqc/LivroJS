const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const aluno = frm.inAluno.value;

  if (!validarNome(aluno)) {
    alert('Informe o nome completo do aluno');
    frm.inAluno.focus();
    return;
  }

  resp.innerText =
    'Senha Inicial: ' + obterSobrenome(aluno) + contarVogais(aluno);
});

const validarNome = (nome) => nome.includes(' ');

function obterSobrenome(nome) {
  const sobrenome = nome.split(' ');
  return sobrenome[sobrenome.length - 1].toLowerCase();
}
function contarVogais(nome) {
  let vogais = 0;
  for (const letra of nome) {
    const letraUc = letra.toLowerCase();
    if (
      letraUc == 'a' ||
      letraUc == 'e' ||
      letraUc == 'i' ||
      letraUc == 'o' ||
      letraUc == 'u'
    ) {
      vogais++;
    }
  }
  return vogais < 10 ? '0' + vogais : vogais;
}
