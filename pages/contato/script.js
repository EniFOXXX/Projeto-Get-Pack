let inputs = document.querySelectorAll("input");
let inputsHelper = document.querySelectorAll(".helper-text");
let textArea = document.querySelector("textarea");
let button = document.querySelector("button[type='submit']");

const inputValues = {
    name: "input-name",
    email: "input-email",
    phone: "input-phone"
}

const inputsHelperMessages = {
    name: "Seu username precisa ter 3 ou mais caracteres",
    email: "Precisa inserir um email válido e que contenha '@' e '.com'",
    phone: "Valor incorreto, precisa ser somente números e ter 11 ou mais digitos"

}

const events = "change"

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");

}

const inputLength = inputs.length;

for (let i = 0; i < inputLength; i++) {
    inputs[i].addEventListener(events, (e) => {

        let inputValue = e.target.value

        if (!inputValue || inputValue.length < 3 && inputs[i].id === inputValues.name) {
            inputsHelper[i].innerText = inputsHelperMessages.name
            estilizarInputIncorreto(inputs[i], inputsHelper[i])
        } else {
            estilizarInputCorreto(inputs[i], inputsHelper[i]);

        }

        if (inputs[i].id === inputValues.email) {

            if (inputValue.includes("@") && inputValue.includes(".com") && !inputValue.includes("@.com")) {
                estilizarInputCorreto(inputs[i], inputsHelper[i]);

            } else {
                inputsHelper[i].innerText = inputsHelperMessages.email
                estilizarInputIncorreto(inputs[i], inputsHelper[i])
            }
        }

        if (inputs[i].id === inputValues.phone) {

            var regexPhone = /[^0-9.]/;

            if (inputValue.length < 11 || regexPhone.test(inputValue)) {
                inputsHelper[i].innerText = inputsHelperMessages.phone
                estilizarInputIncorreto(inputs[i], inputsHelper[i])
            } else {
                estilizarInputCorreto(inputs[i], inputsHelper[i]);
            }
        }
    })
}

// função para enviar o formulário após todas as validações
button.addEventListener("click", (e)=>{
    e.preventDefault()
})



