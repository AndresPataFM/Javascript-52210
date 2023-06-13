const pImportant = document.getElementById("important")
// console.log(pImportant)

const estilados = document.getElementsByClassName("estilado")
// console.log(estilados)

const query1 = document.querySelector("p")
// console.log(query1)

// vean el "." para la clase
const query2 = document.querySelector(".estilado")
// console.log(query2)

// vean el "#" para id
const query3 = document.querySelector("#important")
// console.log(query3)

// combo
const query4 = document.querySelector("div.estilado")
// query4.innerHTML=`
// <ol>
// <li>Ingredientes</li>
// <li>Cocinar</li>
// <li>Comer</li>
// </ol>
// `
// console.log("innerHTML:",query4.innerHTML)
console.dir(query4)

const queryAll1 = document.querySelectorAll("p")
// console.log("queryAll1",queryAll1)

const queryAll2 = document.querySelectorAll(".estilado")
// console.log("queryAll2",queryAll2)

const queryAll3 = document.querySelectorAll("#important")
// console.log("queryAll3",queryAll3)

const queryAll4 = document.querySelectorAll("div.estilado")
// console.log("queryAll4",queryAll4)

const nuevo = document.createElement("div")
// console.log(nuevo)

// console.log(query4)
// query4.appendChild(nuevo)
// console.log(query4)

query4.addEventListener("click", (event)=>{
    event.preventDefault()
    alert("no me toques")
})