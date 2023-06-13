// 🟠 Eventos 🟠
// Cosas que les sucede al HTML a la cual podemos reaccionar
// https://developer.mozilla.org/es/docs/Web/Events
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events


// 🔶 Modificar eventos de un nodo 🔶
// Como agregarle/modificar eventos de un nodo

"click"
// 🔹 addEventListener
// función de orden superior
// Primer parametro evento
// Segundo parametro función
let boton1 = document.getElementById("boton1")
boton1.addEventListener("click", ()=>{
    alert("tocaste el boton1")}
)
const alerta = ()=>{
    alert("tocaste el boton1")
} 
// boton1.addEventListener("click", alerta)
// console.log(boton1)

// 🔹 onevento
let boton2 = document.getElementById("boton2")

const listaEmoji = ["💜", "🧡", "💚"]
boton2.onclick = function (){
    // alert("hola, soy el boton 2")
    const listaBoton = document.querySelector("#listaBoton")
    listaBoton.innerHTML=""
    listaEmoji.forEach(emoji=>{
        listaBoton.innerHTML+=`<li>${emoji}</li>`
    })
}
// 🔹 Atributo HTML
// No, malo, feo, no lo usen.

// 🔶 Comunes 🔶

// 🔹 Mouse 🔹
// ◽ click
// ◽ mousemove

// 🔹 Teclado 🔹
// ◽ onkeyup
// ◽ onkeydown
// const espio = document.getElementById("keylogger")
// espio.addEventListener("keydown", (event)=>{
//     console.log(event.target.value)
// })

// 🔹 Change 🔹
// onchange

// 🔹 Input 🔹
// ◽ oninput
// ◽ onsubmit