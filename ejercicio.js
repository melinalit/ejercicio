let button =  document.querySelector("button")
let body = document.querySelector("body")

function crearParrafo(){
    Var parrafo = document.createElement("p")
    parrafo.innerText = "Lorem ipsum";

    let nuevoDiv = document.createElement("div")
    body.appendChild(nuevoDiv);

    let boton2 = document.createElement("button")
    boton2.innerText = "Vaciar";

    nuevoDiv.appendChild(boton)
    nuevoDiv.insertBefore(parrafo, boton2)
    
}

boton.addEventListener("click",crearParrafo)

