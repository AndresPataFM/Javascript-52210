// 🔸 Incorpora el siguiente archivo JSON al proyecto del desafío “productos.json”. 
// 🔸 Utiliza fetch para leer el archivo y guardar la información de este en un array llamado productos.
// 🔸 Utiliza una función asincrónica para leer los datos del archivo y guardarlos en el array.
// 🔸 Con todos estos datos, crea una lista HTML desordenada en el documento HTML, y agrega de forma dinámica el nombre del producto y su precio, encerrando este último dato dentro de paréntesis y anteponiendo al precio el símbolo $. 
// 🔸 Utiliza para recorrer los productos el método forEach() del array productos.

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