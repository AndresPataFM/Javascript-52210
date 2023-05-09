// 🟠 CONTROL DE FLUJOS 🟠
// Darle a la maquina la habilidad de tomar decisiones

// 🔶 IF STATEMENT 🔶 
/*
La forma más sencilla de tomar decisiones

if(argumento){
    ~código a ejecutar;
};

si el argumento es verdadero, se ejecuta el código interno, de lo contrario, no
*/
// 🔸 Ejemplos 🔸
// Un banco muestra alerta a quienes tengan saldo negativo
// let saldo = Number(prompt("Ingrese su saldo"))
// if(saldo<0){
//     alert("Tenes saldo negativo")
// }


// 🔶 IF ELSE STATEMENT 🔶 
/*
Permite tomar una acción cuando el argumento es falso

if(argumento){
    ~código 1;
} else {
    ~código 2;
};

si el argumento es verdadero, se ejecuta el código 1, de lo contrario, se ejecuta el código 2
*/
// 🔸 Ejemplos 🔸
// El portero te deja entrar al boliche o no dependiendo de tu edad.

// let edad = parseInt(prompt("Ingrese su edad"))
// if(edad>17){
//     alert("bienvenido/a")
// } else {
//     alert(`Con ${edad} no puede ingresar. Vuelva al ser mayor de edad.`)
// }
// let edad = Number(prompt("Ingrese su edad"))
// if(edad>=18){
//     alert("bienvenido/a")
// } else {
//     alert(`Con ${edad} no puede ingresar. Vuelva al ser mayor de edad.`)
// }

// 🔶 ELSE IF STATEMENT 🔶
/*
Esto nos permite aclopar un if detras de un else 

if (argumento1){
    ~código 1;
} else if(argumento2){
    ~código 2;
};

si el argumento 1 es verdadero, se ejecuta el código 1 y frena la ejecución del if. De lo contrario, si el argumento 2 es verdadero y el argumento 1 es falso, se ejecuta el código 2. Sino no se ejecuta nada.

A este le podemos acoplar un else al final

if (argumento1){
    ~código 1;
} else if(argumento2){
    ~código 2;
} else {
    ~código 3;
};

El else final solo va a ejecutarse si ambos argumentos son falsos

EN ESTE CASO, NUNCA SE EJECUTA EL CÓDIGO 3
if(argumento1){
    ~código 1;
} else { 
    ~código 2;
} else if(argumento2){
    ~código 3;
};

*/
// 🔸 Ejemplos 🔸
// Le queres ofrecer algo para tomar a un amigo

// let eleccion = prompt("Que queres para tomar").toLowerCase()

// // if(eleccion==="coca"){
// //     alert("Aca tenes tu coca")
// // } else if(eleccion==="jugo"){
// //     alert("Toma tu jugo")
// // } else if(eleccion==="agua"){
// //     alert("Aca tenes un vaso de agua")
// // } else {
// //     alert("No tengo eso, toma agua")
// // }

// if(eleccion==="coca"||eleccion==="jugo"||eleccion==="agua"){
//     alert(`Aca tenes ${eleccion}`)
// } else {
//     alert("No tengo eso, toma agua")
// }


// 🔶 SWITCH 🔶
/* 
Un Switch es una manera avanzada de hacer un else if con un else al final en la que se compara un mismo valor contra varios valores distintos utilizando === con funcionalidades agregadas.

    Se utilizan las palabras reservadas:
    switch: declara que hacemos un switch
    case x: declaramos el caso en el que el valor vale x
    break: frenamos la ejecución del switch
    default: sería el caso equivalente al else final de un else if

switch(elemento){
    case argumento1:
        // código 1
        break; ➡️ opcional
    case argumento2:
        // código 2
        break; ➡️ opcional
    ...
    case argumentoFinal:
        // código Final
        break; ➡️ opcional
    default:
        // código que se ejecuta si el resto es falso o si el caso anterior no tiene break
};
En el caso que un argumento sea verdadero, se ejecuta el código de este hasta frenarse con un break, en el caso en el que ningún argumento sea falso, 

*/
// 🔸 Ejemplos 🔸
// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nomrbe dado, decirle a que cuarto/piso ir
// let nombre = prompt("Ingrese su nombre").toLowerCase()
// switch(nombre){
//     case "andres":
//     case "agustin":
//         alert("Tu cuarto es el 1A");
//         break;
//     case "noel":
//         alert("Tu cuarto es el 1B");
//         break;
//     case "julian":
//         alert("Tu cuarto es el 2A");
//         break;
//     case "sebastian":
//         alert("Tu cuarto es el 2B");
//         break;
//     case "mariana":
//         alert("Tu cuarto es el 2B");
//         break;
//     default:
//         alert("Usted no vive aqui")
// }

// NOTA:UNO PUEDE ANIDAR TODOS LOS VISTOS ACA