let inputs = document.querySelectorAll("input");
let inputsHelper = document.querySelectorAll(".helper-text")

const inputValues = {
    name: "input-name",
    email: "input-email",
    phone: "input-phone"
}

const inputsHelperMessages = {
    name: "Seu username precisa ter 3 ou mais caracteres",
    email: "Precisa inserir um email válido e que contenha '@' e '.com'",
    phone: "Seu número de telefone precisa ter 9 ou mais números"

}

const events = ["blur", "change"]

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

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener(events[i], (e) => {

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
    
            if (inputValue.length < 9) {
                inputsHelper[i].innerText = inputsHelperMessages.phone
                estilizarInputIncorreto(inputs[i], inputsHelper[i])
            } else {
                estilizarInputCorreto(inputs[i], inputsHelper[i]);
              

            }

        }


    })

}

