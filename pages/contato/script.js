let inputs = document.querySelectorAll("input");
let inputsHelper = document.querySelectorAll(".helper-text");
let textArea = document.querySelector("textarea");
let button = document.querySelector("button[type='submit']");

const inputObject = {
    name: "input-name",
    email: "input-email",
    phone: "input-phone"
}

const inputsHelperMessages = {
    name: "Seu username precisa ter 3 ou mais caracteres",
    email: "Precisa inserir um email válido e que contenha '@' e '.com'",
    phone: "Valor incorreto, precisa ser somente números e ter 11 ou mais digitos"

}

function styleInputCorrect(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function styleInputIncorrect(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");

}

const inputLength = inputs.length;

for (let i = 0; i < inputLength; i++) {

    inputs[i].addEventListener("change", e => {
        let inputValue = e.target.value;
        switch (inputs[i].id) {
            case inputObject.name:
                if (!inputValue || inputValue.length < 3) {
                    inputsHelper[i].innerText = inputsHelperMessages.name;
                    styleInputIncorrect(inputs[i], inputsHelper[i])
                } else {
                    styleInputCorrect(inputs[i], inputsHelper[i])
                }
                break;
            case inputObject.email:
                if (!inputValue.includes("@") || !inputValue.includes(".com") || inputValue.includes("@.com")) {
                    inputsHelper[i].innerText = inputsHelperMessages.email;
                    styleInputIncorrect(inputs[i], inputsHelper[i]);
                } else {
                    styleInputCorrect(inputs[i], inputsHelper[i]);
                }
                break;
            case inputObject.phone:
                var regexPhone = /^\d{11,}$/;

                if (!regexPhone.test(inputValue)) {
                    inputsHelper[i].innerText = inputsHelperMessages.phone;
                    styleInputIncorrect(inputs[i], inputsHelper[i]);
                } else {
                    styleInputCorrect(inputs[i], inputsHelper[i]);
                }
                break;
        }
    })

}

// função para enviar o formulário após todas as validações

function sendForm() {
    // Example using Fetch API to submit form data to the server
    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.alert("Formulário enviado com sucesso.");
        } else {
          window.alert("Ocorreu um erro ao enviar o formulário.");
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        window.alert("Ocorreu um erro ao enviar o formulário.");
      });
  }

  
button.addEventListener("click", (e) => {
    e.preventDefault()
    let inputName = inputs[0].value;
    let inputEmail = inputs[1].value;
    let inputPhone = inputs[2].value;
    let textMessage = textArea.value;

    if(!inputName || !inputEmail || !inputPhone || !textMessage ){
        window.alert("Para enviar sua Mensagem todos os campos devem ser preenchidos")
    }else{
        // aqui iria a função de conexão com o banco de dados
        window.alert("Formulário enviado com sucesso.");
        sendForm()
    }

})



