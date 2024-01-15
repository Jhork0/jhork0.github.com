// let links = document.querySelectorAll("a");

// links.forEach(function(link){
//     console.log(link)
// });

let links = document.querySelectorAll(".close") 
// seleccionamosla clase close 
 links.forEach(function(link){
    link.addEventListener("click", function(ev){
         ev.preventDefault();
         //prevenimos que se salga directamente de la pagina
         let content = document.querySelector(".content");
         
         content.classList.remove("animate__fadeInDown");
         content.classList.remove("animate__animated");
        
        // removemos las clases de la animacion 

         content.classList.add("animate__fadeOutUp");
         content.classList.add("animate__animated")
         
         // añadimos una nueva animacion

         setTimeout(function(){
            location.href = "/";
        },600)
        // añadimos un timer para quese  vea la animacion y posteriormente regresamos a la  pagina principal gracias a la funcion href
            
         return false;
     })
}) 
    

// let iconos = document.querySelectorAll("i");

// iconos.forEach(function(icono){
//     icono.classList.remove("fa-solid");
//    icono.classList.add("fa-star");
    
// })

// let celdas = document.querySelectorAll("td")

// celdas.forEach(function(celda){
//     celda.addEventListener("click", function(celda){
//         console.log(this)
//     })
//     });
    