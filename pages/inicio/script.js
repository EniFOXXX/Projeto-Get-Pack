    const nav = document.querySelectorAll(".nav");

  

   nav.forEach(function(nav){
    
    nav.addEventListener("mouseover",()=>{
      nav.classList.toggle("acesso"); 
      console.log(nav)
    })
   })
   

   nav.forEach(function(nav){
    
    nav.addEventListener("mouseout",()=>{
      nav.classList.toggle("acesso"); 
      console.log(nav)
    })

   })
   
   
   
   
   
   
   
   
    
    
   
  

    

     



