// Crea una función que reciba dos parámetros numéricos y un tercer parámetro correspondiente al operador aritmético. 
// La función debe retornar el resultado de la operación entre estos dos números.
// Crea una segunda función que utilice prompt() y le pida dos números al usuario. 
// Luego, crea un tercer prompt() que le pida al usuario el operador aritmético necesario para realizar la operación matemática.
// Esta misma función debe constatar que los 2 primeros valores ingresados sean números, y que el tercer valor ingresado sea un símbolo aritmético.
// Si todo está OK, deberá llamar a la primera función pasándole todos estos parámetros, y esperando que la función le retorne el resultado de la operación aritmética



function validarNros(num1, num2){
    const tipoNum1 = typeof num1;
    const tipoNum2 = typeof num2;
    const nrosInvalidos = tipoNum1!=='number' || tipoNum2!=='number'
    return nrosInvalidos
}

function calculadora(num1, num2, operacion){
    if(validarNros(num1, num2)){
        console.warn("Error: se ingresaron datos que no son números")
        return NaN;
    };
    switch(operacion){
        case "+": // if(operacion === "+"){return num1+num2}
            return num1+num2;
            //no es necesario el break ya que el return lo frena
        case "-":
            return num1-num2;
        case "/":
            return num1/num2;
        case "^":
            return Math.pow(num1, num2)
        case "%":
            return num1%num2;
        default:
            console.warn("Error: operador inválido")
            return;
    };
} ; 

function ejecutarCalculadora(){
    const nro1 = Number(prompt("ingrese el primer número"))
    const nro2 = Number(prompt("ingrese el segundo número"))
    const operador = prompt("ingrese la operación a realizar: \n + \n - \n / \n ^ \n %")
    return calculadora(nro1, nro2, operador)
}

console.log(ejecutarCalculadora())


// ==================================================
// Find the bug
// Actividad 01:
/* 
const precioConIVA = (imp, iva=1.21) => imp * iva;
precioConIVA(importe, IVA) 
 */

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// Actividad 02:
/* 
const valorM2 = 31.83; //valor fijo del seguro por Metro^2
const comision = 1.025; //comisión del 2.5%
const metros2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 => {return m2 * valorM2 * comision };
// const calcularPoliza = m2 => M2 * valorM2 * comision;
const valorPoliza = calcularPoliza(metros2);
console.log("El costo de la póliza es: $", valorPoliza); 
*/
// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?