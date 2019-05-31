let btn =  document.querySelector("button")
let body = document.querySelector ("body")

btn.addEventListener("click", hacerClick)
function hacerClick(){
    let div = document.createElement("div")
    let p = document.createElement("p")
    let btn_nuevo = document.createElement("button")

    p.innerText="Lorem Ipsum"
    btn_nuevo.innerText="Borrar"
    btn_nuevo.addEventListener("click", borrarElemento)

    function borrarElemento() {
        document.body.removeChild(div)
    }

    div.appendChild(p)
    div.appendChild(btn_nuevo)
    document.body.appendChild(div)

}