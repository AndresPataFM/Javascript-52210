// Simular el portal de un profesor de escuela

let ingreso = false

function login( intentos, maximaCantidadIntentos){
    // nuestro log in
    const contrasenia = "123"
    const profesor = "andres"
    alert(`Tiene ${maximaCantidadIntentos} intentos posibles de ingresar, este es su intento ${intentos+1}`)
    let profesorIngresado = prompt("Ingrese su nombre")
    let profesorLower = profesorIngresado.toLocaleLowerCase()
    let constraseniaIngresada = prompt("ingrese la contrasenia")
    if((profesor === profesorLower)&&(contrasenia===constraseniaIngresada)){
        alert("Bienvenido")
        ingreso=true
        return true
    } else {
        alert(`Le quedan ${maximaCantidadIntentos-(intentos+1)} intentos`)
    }
}

function loginLoop(intentos, maximaCantidadIntentos){
    do{
    if(login(intentos, maximaCantidadIntentos)){
        break //frena el loop si ingresa
    } 
    intentos++
} while(intentos<maximaCantidadIntentos)
}
function calcularPromedio (){
    // calcula el promedio de todos los alumnos
    let agregarAlumno = true
    let alumnos = 0
    let sumaTotal = 0
    while(agregarAlumno){
        //  alumnos = alumnos+1
        let nota = prompt(`Ingrese la nota del alumno ${alumnos+1}`)
        let notaProcesada = Number(nota)
        if(isNaN(notaProcesada) || nota === null){
            alert("Por favor ingrese un número")
            continue
        }
        alumnos++
        sumaTotal += notaProcesada
        agregarAlumno = confirm("Hay más alumnos?")
        // sumaTaotal = sumaTotal + nota
    }
    alert(`El promedio total de los ${alumnos} alumnos es: ${(sumaTotal/alumnos)}`)
    return sumaTotal/alumnos
}

const examen = ()=>{
    alert("Bienvenido al exámen de matemáticas")
    let nota = 0
    const corrector= (num1, num2,operacion, rtaAlumno)=>{
        switch(operacion){
            case "+":
                if(num1+num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "-":
                if(num1-num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "*":
                if(num1*num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "/":
                if(num1/num2===rtaAlumno) {
                    nota += 2
                }
            default: console.log("ERROR")
        }
        
    }
    // esto puede ser su propia funcion que llamo 5 veces
    let preg1 = Number(prompt("Cuánto es 5*8"))
    corrector(5,8, "*", preg1)
    let preg2 = Number(prompt("Cuánto es 3+4"))
    corrector(3,4, "+", preg2)
    let preg3 = Number(prompt("Cuánto es 13*2"))
    corrector(13,2, "*", preg3)
    let preg4 = Number(prompt("Cuánto es 100/4"))
    corrector(100,4, "/", preg4)
    let preg5 = Number(prompt("Cuánto es 10-3"))
    corrector(10,3, "-", preg5)

    alert(`Su nota es: ${nota}/10`)
    return nota
}



const preguntaSeleccion=()=>{
    let eleccion = prompt("Que desea hacer: \n 1 - Calcular promedio \n 2 - Tomar un examen")
    return Number(eleccion)
}
const selector=(eleccion)=>{
    switch(eleccion){
        case 1:
            // calcular promedio
            calcularPromedio()
            break
        case 2:
            // tomar un examen
            examen()
            break
        default:
            alert("ingreso un valor inválido")
    }
}

const inicializar = ()=>{
    let intentos = 0
    const maximaCantidadDeIntentos = 3
    do{
        login(intentos, maximaCantidadDeIntentos)
        if(ingreso){break}
        intentos++
    } while(intentos<3)

    if(ingreso){
        let loop = true
        do{
            selector(preguntaSeleccion())
            loop = confirm("¿Desea continuar?")
        } while(loop)
    }
}

inicializar()