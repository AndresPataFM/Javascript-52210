// 🟠 Arrays 🟠 
// Son un tipo de dato que sirve para almacenar valores en forma de lista. Sería como una colección de variables. A su vez, en Js son objetos.

// 🔶 Declaración 🔶
// Para declarar un array a la variable se le declaran una serie de "variables internas" dentro de [] separadas por comas. A esas variables internas se las llaman elementos. Se puede o no agregar una coma al último elemento.

const nombre = "Andrés";
const funcion = ()=>console.log("Saludos")

const array1 = [
    "hola",
    123,
    true,
    null,
    {prop1: "hola"},
    [1,2,3],
    nombre,
    funcion
];

const array2 = [123, "array en linea", false];


// 🔶 Indices 🔶
// En los arrays y la mayoría de programación, se cuenta desde 0. El primer elemento del array esta en el ínidice 0

const array1LaRevancha = [
    "hola", //0
    123, //1
    true, //2
    undefined, //3
    {prop1: "hola"}, //4
    [1,2,3], //5
    nombre, //6
    funcion //7
];

// 🔶 Acceder a un elemento específico 🔶
// para acceder a un elemento específico del array, uno tiene que utilizar el nombre del array, corchetes y l índice
// nombreArray[indice]

array1[0]; //hola
console.log("array1[0]",array1[0])

for (let i = 0; i < 8; i++) { 
    const elemento = array1[i];
    console.log("Indice:",i)
    console.log("Elemento:",array1[i])
}

// llamandolo de esa manera uno puede reasignar el valor del elemento si lo desea (Inclusivve si se utilizo const)

console.log("Modifico array1[0]")
array1[0] = "chau"
console.log("array1[0]",array1[0]) // "chau"

// 🔶 Propiedades 🔶

// 🔸 length 🔸
// Los arrays tienen todos una propiedad llamada length, esta indica cuantos elementos tiene el array. logicamente, al menos que haya algo raro con el array este suele ser igual a "indice del ultimo elemento"+1

array1.length // 9

// 🔶  Métodos "simples"  🔶
// Todos los arrays tienen metodos propios, estos se pueden encontrar aca: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// Nota: en funciones de orden superior vemos varios de los más avanzados

// Este es el array que se va a utilizar para los métodos:

const testing1 = ["💙", "💚", "💜"]
const testing2 = ["💙", "💚", "💜"]
const testing3 = ["💙", "💚", "💜"]
const testing4 = ["💙", "💚", "💜"]
const testing5 = ["💙", "💚", "💜"]
const testing6 = ["💙", "💚", "💜"]
const testing7 = ["💙", "💚", "💜"]
const testing8 = ["💙", "💚", "💜"]
const testing9 = ["💙", "💚", "💜"]

// 💥 significa que se modifica el array inicial
// 💖 significa que el array incial se mantiene igual

// ✅ significa que el/los parámetros son necesarios
// ⭕ significa que el/los parámetros pueden utilizarse o no
// ❌ no se usan los parámetros


// 🔸 Agregar elementos 🔸
// El parámetro es el elemento a agregar

// 🔹 💥Unshift✅ 🔹
// Agrega un elemento al principio del array

testing1.unshift("🧡")
console.log("unshift", testing1)

// 🔹 💥Push✅ 🔹
// Agrega un elemento al final del array

testing2.push("🧡")
console.log("push", testing2)

// 🔹 Porque no agregar elementos con array[indice] 🔹 
// Si quedan indices sin elementos entre el indice agregado, se consideran undefined

// 🔸 Quitar elementos 🔸
// No utiliza parámetros

// 🔹 💥Shift❌ 🔹
// Quita un elemento al principio del array

testing3.shift()
console.log("shift", testing3)

// 🔹 💥Unshift❌ 🔹
// Agrega un elemento al principio del array

testing4.pop()
console.log("pop", testing4)

// 🔹 Delete y porque no utilizarlo 🔹 
// El delete borra el elemento del array sin moverlo, dejando un undefined que puede causar problemas

// 🔸 💖Join⭕ 🔸
// RETORNA la combinación los elementos del array en un string 

testing5.join("-")
console.log("join", testing5)
console.log('testing5.join("-")', testing5.join("-"))
console.log('testing5.join("")', testing5.join(""))

// 🔸 💖Indexof✅ 🔸
// Busca el indice del PRIMER elemento que sea estrictamente igual (===) al parámetro y retorna el nro del indice de ser enontrado, sino retorna -1. Utliza -1 para ser consistente con el tipo de dato del return.

testing6.indexOf("💙")
console.log("indexOf", testing6)
console.log('testing6.indexOf("💙")', testing6)
console.log('testing6.indexOf("🧡")', testing6)

// 🔸 💖Includes✅ 🔸
// Se fija si el parametro es estrictamente igual a algún elemento del array y retorna un booleano

testing7.includes("💙")
console.log("includes", testing7)
console.log('testing7.includes("💙")', testing7)
console.log('testing7.includes("🧡")', testing7)

// 🔸 💥Sort⭕ 🔸
// Ordena el array en orden ascendiente según el orden de los carácteres/números en UTF-16 ( https://www.fileformat.info/info/charset/UTF-16/list.htm ). Revisa los carácteres en orden sucesiva por lo que un 12, quedaría antes de un 3 al ser sorteado. No usa parámetro.

testing8.sort()
console.log("sort", testing8)

// 🔸 💥Reverse❌ 🔸
// invierte el orden del array

testing9.reverse()
console.log("reverse", testing9)

// 🔹 Los Strings son arrays y por lo tanto también son objetos 🔹
// Este tiene todo lo mismo que un array pero a la vez tiene más métodos (como varios que utilizamos): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
