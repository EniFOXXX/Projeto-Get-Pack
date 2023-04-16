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

function styleInputCorrect(input, span) {

  if (span.id === spanValues.email) {
    span.innerText = ""
    openModal(input)
  }
  if (span.id === spanValues.password) {
    span.innerText = ""
    openModal(input)
  }
}

function styleInputIncorrect(input, span) {
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
let modal = document.getElementById("my-modal");

let btn = document.getElementById("my-btn");

let span = document.getElementsByClassName("close")[0];

let textModal = document.querySelector("p");

span.onclick = function () {
  modal.style.display = "none";
}

function openModal(input) {
  if (input.id === "email") {
    if (!input.value.includes("@") || !input.value.includes(".com")) {
      modal.style.display = "block";
      textModal.innerText = "Email deve conter '@' e também '.com' entre seus caracteres"
      input.classList.add("error");
    } else {
      modal.style.display = "none";
      input.classList.remove("error");
      input.classList.add("correct");

    }
  }
  if (input.id === "password") {
    if (input.value.length < 8) {
      modal.style.display = "block";
      textModal.innerText = "Password deve conter mais que 8 caracteres";
      input.classList.add("error");
      togglePassword.style.color = "#fff";
    } else {
      modal.style.display = "none";
      input.classList.remove("error");
      input.classList.add("correct");

    }
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

      styleInputIncorrect(input, spans[i])
    } else {

      styleInputCorrect(input, spans[i])
    }

  })
}

function getCheckedValue() {
  var checkbox = document.querySelector("#logincheck");
  if (checkbox.checked) {
    console.log(checkbox.checked)
    return checkbox.value;
  }
  return null;
}


// função para validar Login 

function handleLogin(e) {
  e.preventDefault();
  //como não existe back-end fiz e como já foi criado todas as validações, aqui coloquei apenas uma validação para enviar os dados
  var checkedValue = getCheckedValue();

  { checkedValue ? window.alert("Dados enviados com Sucesso !!") : window.alert("Você deve aceitar os termos para efetuar Login !!") }
}

const form = document.querySelector("form");
form.addEventListener("submit", handleLogin);



