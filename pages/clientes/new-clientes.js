const arrayComents = [
    {
        name: "Joana Mendes",
        client: "Cond. Comercial ABC - SP",
        coment: "Utilizamos o sistema Getpack há 5 anos e atende ao nosso condomínio completamente. A grande vantagem de utilizar o sistema é o armazenamento de todos os dados e rastreabilidade do processo.",
        img: "../../assets/images/5estrelas.png"
    },
    {
        name: "Raimundo Souza",
        client: "Vitória - ES",
        coment: "  Um dos grandes problemas em nosso condomínio era administrar as milhares de encomendas que chegavam a nossa portaria. Com o GetPack resolvemos todos os problemas relacionados a encomendas e entregas em nosso condomínio",
        img: "../../assets/images/5estrelas.png"
    },
    {
        name: "Magda SIlva",
        client: "Cond. Real State - Curitiba - PR",
        coment: "Recomendo o uso do GetPack para gerenciamento de encomendas. O software é de fácil utilização e o suporte é ótimo.",
        img: "../../assets/images/5estrelas.png"
    }

]

const containerComents = document.querySelector(".div-comentarios");
let arrayLength = arrayComents.length;

for (let i = 0; i < arrayLength; i++) {
    let divComent = document.createElement("div");
    divComent.classList.add("div-comentario-unitario");

    divComent.innerHTML = `
    <p>
    ${arrayComents[i].coment}
    </p> 
    <strong>
    ${arrayComents[i].name}
    </strong>
    <strong>
    ${arrayComents[i].client}
    </strong>
    <img src = ${arrayComents[i].img}>

     `
     divComent.addEventListener("mouseover",(e)=>{
        divComent.style.border = "10px solid rgb(88, 143, 220)";

     });

     divComent.addEventListener("mouseleave", function(e){
        divComent.style.border = "0px";
    });
    

    containerComents.appendChild(divComent)

}


