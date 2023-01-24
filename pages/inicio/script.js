let nav = document.querySelectorAll(".nav a");
let y =0
function altcor(){
for(let a=0;a<nav.length;a++){
    nav[a].style.backgroundColor = "rgb(88, 143, 220)"
    nav[a].style.borderRadius = "10px"
    nav[a].style.padding = "5px"
    nav[a].style.transition = "0.8s"
    nav[a].style.color = "white"
    nav[a].style.textAlign = "center"
    nav[a].style.justifyContent = "center"
    nav[a].style.height="25px";
    nav[a].style.width="90px";
    
}
}

function altcor1(){
    for(let a=0;a<nav.length;a++){
    nav[a].style.backgroundColor = ""
    nav[a].style.borderRadius = ""
    nav[a].style.padding = ""
    nav[a].style.transition = ""
    nav[a].style.color = ""
    }

}
for(let i=0;i<nav.length;i++){
    
    nav[i].addEventListener("mouseover",altcor) 
    
     console.log(nav[i])
}


for(let b=0;b<nav.length;b++){
    nav[b].addEventListener("mouseout",altcor1);
    
    }