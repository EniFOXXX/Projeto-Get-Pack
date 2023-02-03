console.log('teste arquivo clientes.js');

let logo1 = document.getElementById("logo1");

// logo1.addEventListener("mouseover", logo1.style.border = "100px");
logo1.addEventListener("mouseover", function(e){
    console.log('mouseover ok');
    // e.target.border = "1px"
    e.target.border = "1px rounded"
});
logo1.addEventListener("mouseleave", function(e){
    console.log('mouseleave ok');
    e.target.border = "0px"

});

// logo1.style.border = "100px";
// logo1.style.borderColor = "blue";
// console.log(logo1.style)
