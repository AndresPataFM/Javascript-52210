// Actividad 01:
// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'))
// let texto = prompt('INGRESE TEXTO A REPETIR');

if(!isNaN(cantidad)){
    for (let index = 0; index < cantidad; index++) {
        console.log(texto);
    }
}
// indice++
// indice = indice+1

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// =========================================================

// Actividad 02:
// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (lados > 3) {
//         alert("Eso no es un triangulo")
//         break;
//     }
//     alert(`lado ${index} del triangulo`);
// }

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?

// =========================================================

// Actividad 01:
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
// número es par o impar.

// let nro = parseInt(prompt("Ingrese un Nro."))

// if(!isNaN(nro)){
//     let resto = nro % 2
//     if(nro===0){
//         alert("Es Par")
//     } else if(resto===0){
//         alert(`El nro ${nro} es par`)
//     } else {
//         alert(`El nro ${nro} es impar`)
//     }
// } else {
//     alert ("ingreso un dato incorrecto")
// }

// =========================================================

// Actividad 02:
// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

let condicion = true

while(condicion){
    let nro = parseInt(prompt("Ingrese un Nro."))

    if(!isNaN(nro)){
        let resto = nro % 2
        if(nro===0){
            alert("Es Par")
        } else if(resto===0){
            alert(`El nro ${nro} es par`)
        } else {
            alert(`El nro ${nro} es impar`)
        }
    } else {
        alert ("ingreso un dato incorrecto")
    }
    condicion = confirm("Desea testear otro nro?")
}