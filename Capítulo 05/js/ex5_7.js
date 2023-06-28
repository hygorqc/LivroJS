const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = frm.inNumero.value;

  let estrela = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrela = estrela + "*"
    } else {
      estrela = estrela + "-"
    }
  }
  resp.innerText = estrela
})