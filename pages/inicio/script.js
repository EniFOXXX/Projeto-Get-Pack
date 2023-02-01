    const nav = document.querySelectorAll(".nav");
    
  
   console.log(nav)
   
   /*nav.addEventListener("mouseover", function(){
    nav.forEach(x => x.classList.toggle("acesso"))
   })*/
  

  function mostrarMenu(){
        
        nav.forEach(x => x.classList.toggle("acesso")); 
        
        console.log(nav)
        
    }
    
  
    
   function apagarMenu(){
    
    nav.forEach(x => x.classList.toggle("acesso")); 
    
     
      console.log(nav)
    }
    
    
   
   for(let i=0; i<nav.length;i++){
    nav[i].addEventListener("mouseover",mostrarMenu);
    
    console.log(nav)
   }
    
    
   
 

   for(let a=0; a<nav.length;a++){
    nav[a].addEventListener("mouseout",apagarMenu);
    
    console.log(nav)
   }
    
    
    
   
  

    

     



