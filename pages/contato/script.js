let inputs = document.querySelectorAll("input");
let inputsHelper = document.querySelectorAll(".helper-text")

console.log(inputs)
console.log(inputsHelper)


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
    inputs[i].addEventListener("blur", (e)=>{
        let valor = e.target.value
        if(!valor){
            inputsHelper[i].innerText = "Seu username precisa ter 3 ou mais caracteres";
            estilizarInputIncorreto(inputs[i], inputsHelper[i])
        }else{
            estilizarInputCorreto(inputs[i], inputsHelper[i]);

        }
    })
    
}


inputs.forEach(input => {

    input.addEventListener("blur", (e)=>{
        let valor = e.target.value;

        if(!valor){
            inputsHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
            estilizarInputIncorreto(input, inputsHelper)
        }else{
            estilizarInputCorreto(input, inputsHelper);

        }
        
    })
    
});