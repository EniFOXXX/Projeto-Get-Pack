// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

//  toogle password
const togglePassword = document.querySelector('#toggle-password');
const password = document.querySelector('#password');


togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});


// functions of input validations

function estilizarInputCorreto(input, span) {

  if (span.id === spanValues.email) {
    span.innerText = ""
    openModal(input.value)
  }
  if (span.id === spanValues.password) {
    span.innerText = ""
  }

  input.classList.remove("error");
  input.classList.add("correct");
  togglePassword.style.color = "#fff"
}

function estilizarInputIncorreto(input, span) {
  if (span.id === spanValues.email) {
    span.innerText = "O campo e-mail não pode ser vazio"
  }
  if (span.id === spanValues.password) {
    span.innerText = "O campo password não pode ser vazio"
  }
  input.classList.add("error");
  input.classList.remove("correct");
  togglePassword.style.color = "#fff"
}

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

function openModal(input) {
  if (!input.includes("@") && !input.includes(".com")) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }

}

// Validar Inputs

let inputs = document.querySelectorAll(".input-value");
let inputCheckbox = document.querySelector("#logincheck");

const spanValues = {
  email: "email-span",
  password: "password-span"
};

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("blur", (e) => {

    let spans = document.querySelectorAll("span");

    let value = e.target.value;

    if (!value) {

      estilizarInputIncorreto(input, spans[i])
    } else {

      estilizarInputCorreto(input, spans[i])
    }


  })
}

