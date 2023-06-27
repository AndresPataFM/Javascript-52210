// 🟠 Timers

// 🔶 Crear

// setTimeout(codigo, tiempoMs)
// console.log('hola')
// const trabajar = (string)=>console.log(string)
// setTimeout(()=>{trabajar('trabajando')}, 10000)
// setTimeout(()=>trabajar('trabajando rapido'), 1000)
// console.log('chau')

// setInterval(codigo, tiempoMs)
// setInterval(()=>{console.log("tenes tiempo?"), 1000})
// 🔶 Frenar

// clearTimeout(id)

// clearInterval(id)

// 🟠 Try-Catch-Finally
// permite ejecutar código que pueda dar excepciones (errores) sin romper nuestro código. Es síncrono
// ◽ try : palabra reservada que indica que se va a tratar de ejecutar un bloque de código. Este si o si debe de ser seguido por un bloque de código a tratar de ejecutar y un bloque catch y/o un bloque finally.
// ◽ catch(excepcion) : si se realiza una excepción en el bloque try, se ejecuta el bloque de código que le sigue a catch. Recibe como parametro al excepción que se ejecuto en try.
// ◽ finally : seguido por un bloque de código que se ejecuta sí o si, independientemente si sucedio una excepción o no.

/* 

try {
    // codigoTry
} catch (excepcion) {
    // codigoCatch
} finally {
    // codigoFinally
}

*/
/* try{
    console.log("trabajando")
    // undefined.hola //error
    console.log("trabajando2")
} catch(err){
    console.error("Sucedio este error:",err)
} finally {
    console.log("terminamos")
} */
/* try{
    console.log("Inicio")
    undefined.asdasd
    setTimeout(()=>{console.log('trabajando')}, 1000)
} catch(err){
    console.log("Utilizar datos locales")
    console.error("Sucedio este error:",err)
} finally {
    console.log("terminamos")
}  */

// 🟠 async-await
// genera una función asincrónica en la cual se pueden esperar asyncronicamente a datos dentro de su scrope.
// ◽async : para la función
/* 
async function nombre(){}
const nombre2 = async()=>{}
*/
// ◽await: es capaz de esperar el resultado de promesas y se utiliza solo cuando esta se resuelve


// 🟠 promesas
// son funciones objeto asíncronas de js
// ◽ Promise(función(resolve, reject)): constructor de promesas
// ◽ resolve(elemento): retorna exitosamente el elemento.
// ◽ reject(elemento): retorna el error elemento.
// ◽ .then(respuesta): se puede cocatenar al llamado de la promesa
// ◽ .catch(error): recibe el error de la promesa, se cocatena a esta.

const prometo = new Promise((resolve)=>{
    return resolve("Promesa exitosa")
})

async function pedidoApi(){
    const datos = await prometo
    console.log(datos)
}
setTimeout(pedidoApi, 3000)
// const numero = Number(prompt("Ingrese un número"))
// const prometo = new Promise((resolve, reject)=>{
//     if(numero===2){
//         return resolve("Es 2")
//     } else {
//         reject("eso no es 2")
//     }
// })

// prometo.then(respuesta=>{
//     console.log(respuesta)
// }).catch((error)=>{
//     console.log("Error",error)
// })

// 🟠 fetch
// una promesa que obtiene datos de un link
// fetch(link)
// normalmente se le hace:
/* 
fetch(link)
.then((respuesta)=>{
    respuesta.json() //suele ser un json
})
*/
// fetch("./miniproyecto3/products.json").then(respuesta=>{
//     return respuesta.json()
// }).then(respuesta2=>{
//     console.log(respuesta2)
//     respuesta2.forEach(element => {
//         console.log(element)
//     });
// })
// 🟠 cors

// con mockapi: https://mockapi.io/

const producto = {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:450, stock:32, description:"Antipulgas felino Frontline Plus"}

const mockapiURL = "https://6448556450c25337443d67bc.mockapi.io/api/products"
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        // redirect: "follow",
        // referrerPolicy: "no-referrer", 
        body: JSON.stringify(data), // El mismo tipo de data declarado en el header
    });
    return response.json(); // parsea json
}

// post
// postData(mockapiURL, producto, "POST").then((data) => {
//     console.log(data);
// });

// get
async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "GET"
    });
    return response.json(); // parsea json
}
// getData(mockapiURL).then((data) => {
//         console.log(data);
// });

// PUT
const productosModificado = {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:9, description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)"}
async function putData(url = "", data = {}, id) {
    // Default options are marked with *
    const response = await fetch(url+"/"+id, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // El mismo tipo de data declarado en el header
        id: id,
    });
    return response.json(); // parsea json
}
// putData(mockapiURL,productosModificado, 1).then((data) => {
//     console.log(data);
// });

// Delete
async function deleteData(url = "", id) {
    // Default options are marked with *
    const response = await fetch(url+"/"+id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    });
    return response.json(); // parsea json
}
// El id Cambia
// deleteData(mockapiURL, 1).then((data) => {
//     console.log(data);
// });