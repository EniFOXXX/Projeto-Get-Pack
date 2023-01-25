// Abrir e Fechar modal
var modal = document.getElementById("my-modal");

var btn = document.getElementById("my-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Validar Inputs

let inputs = document.querySelectorAll("input");

const spanValues = {
  email: "email-span",
  password: "password-span"
};

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("blur", (e) => {

    let spans = document.querySelectorAll("span")

    let value = e.target.value;

    if (!value) {
      input.classList.toggle("error");
      if (spans[i].id === "email-span") {
        spans[i].innerText = "O campo e-mail não pode ser vazio"
      } else {
        spans[i].innerText = "O campo password não pode ser vazio"

      }
    } else {
      input.classList.toggle("correct");
      spans[i].innerText = ""
    }
  })
}


