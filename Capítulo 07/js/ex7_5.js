const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = "";
  const funcionario = frm.inFuncionario.value;
  const partesNome = funcionario.split(" ");

  const tam = partesNome.length;
  console.log(tam)

  for (let i = 0; i < tam - 1; i++) {
    email += partesNome[i].charAt(0).toLowerCase();
  }

  email += `${partesNome[tam - 1]}@empresa.com.br`.toLowerCase()
  resp.innerText = email;
})