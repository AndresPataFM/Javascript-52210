// 🟠 Ciclos 🟠
// Permite iterar/repetir un proceso bajo condiciones predefinidas
// Es importantisimo que dicho argumento se vuelva falso eventualmente en el ciclo que repeticiones infinitas rompen a la máquina.

// 🔶 FOR 🔶
/* 
En el for:
    -declaramos/seleccionamos una variable a declarar
    -le ponemos una condición/argumento
    -decimos como se modifica la variable sobre la que iteramos
    -Declaramos un código a ejecutar por iteracion

    for(variable; argumento; modificación){
        ~código a ejecutar;
    };
*/
// 🔸 Ejemplos 🔸

// for(let i=0; i<5; i=i+1){ //i++
//     console.log("Este es i:", i);
// };

// Un for que permite calcular el número X (ingresado por prompt) de la secuencia de fibonacci


// 🔶 WHILE 🔶
/* 
El while es un bucle que repite el código siempre y cuando su argumento sea verdadero

while(argumento){
    ~código a ejecutar;
};

Suele ser más propenso al error ya que el código a ejecutar en si debe volver el argumento falso ya que no fuerza a uno a poner la condición

Ciclo infinito, explota todo (el alert hace que tengamos chance de cerrar antes de que implote del todo)
while(true){
    alert("hola");
};

*/
// 🔸 Ejemplos 🔸

// let saludo = true;
// while(saludo){
//     alert("¡HOLA!😀");
//     saludo = confirm("¿Otro saludo?");
// }

// Una caja de donaciones

// 🔶 DO WHILE 🔶
/* 
El do while es un bucle que repite el código siempre y cuando su argumento sea verdadero, su diferencia con el while es que primero ejecuta el código y luego lo verifica

do{
    ~código a ejecutar;
}while(argumento);

Se suele utilizar cuando se quiere ejecutar el código al menos 1 vez aunque este sea falso

*/
// 🔸 Ejemplos 🔸

// Nunca saludo pero siemrpe despido al menos una vez.

let saludo = false;
let despedida = false;

while(saludo){
    alert("¡HOLA!😀");
    saludo = confirm("¿Otro saludo?");
};
do{
    alert("¡Chau!😥");
    despedida = confirm("¿Otra despedida?");
} while(despedida);

// Log in con X cantidad de intentos