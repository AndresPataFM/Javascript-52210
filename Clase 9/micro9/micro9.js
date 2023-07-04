// 🔶 Sobre el listado de productos recuperado y visualizado en HTML, incorpora un sistema de filtros para visualizar los productos listados. Deberás lograr que al ingresar sólo una parte del nombre de un producto, este se pueda visualizar.
// 🔶 Incorpora un <input type=search> en el documento HTML, arriba de donde listas los productos, y agrega esta funcionalidad de filtro. Ten presente que el usuario debe escribir y pulsar enter para aplicar el filtro.
// 🔶 Si hay productos coincidentes, deberán ser mostrados en la misma lista desordenada.
// 🔶 Al vaciar la caja de texto, se debe recuperar el listado de todos los productos.
// 🔶 Si no hay productos coincidentes con lo que el usuario escribió en el input type, utiliza Sweet Alert 2 para notificarle que no se encontraron productos coincidentes.

// Tips
// 🔹 No utilices input type text, aprovecha input type search y los eventos teclado e input.

// Micro 8
const lista = document.getElementById("lista")

setTimeout(()=>{
    fetch("./productos.json").then(rta=>{
        return rta.json()
    }).then(rta=>{
        lista.innerHTML= ""
        rta.forEach(element => {
            const li = document.createElement("li")
            li.innerHTML=`${element.nombre} ($${element.precio})`
            lista.appendChild(li)
        });
    })
},3000)