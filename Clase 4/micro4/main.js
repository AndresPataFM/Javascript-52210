// Define un array vacío con el nombre de productos.
// Crear una función para cargar elementos (productos) en un array. 
// La función debe evaluar si el elemento existe previamente en el array, y allí cargarlo, o no (avisando al usuario que ya existe el elemento).

// Ampliado 

// Utiliza los cuadros de diálogo Prompt() y Confirm().
// Se debe aplicar el método indexOf() o includes() para ver si el elemento a agregar existe o no. 
// Si no existe, entonces se deberá utilizar el método .push() para añadirlo.
// Si el elemento existe, se deberá notificar al usuario que no se puede agregar porque ya existe..
// Puedes agregar otro tipos de validaciones para asegurarte de que la información a agregar sea consistente (ej: que el usuario no agregue espacios en blanco, contenido vacío, etcétera).
// Crea esto dentro de while(), y pregunta al usuario mediante el uso de confirm() si desea seguir agregando elementos al array. 
// Solo cuando pulse cancelar, allí se deberá cortar la ejecución del alta de productos en array.

const productos = []

const evaluadorDeExistencia = (array, elemento)=>{
    // si existe: indice del elemento
    // si no existe: -1
    return array.indexOf(elemento)
}

const agregarProductos = (producto)=>{
    const existeEnArray = evaluadorDeExistencia(productos, producto)

    if(existeEnArray===-1){
        productos.push(producto)
    } else {
        alert("Ese producto ya existe")
    }
}

const mostrarProductos = ()=>{
    let productosString = "Sus productos son: "
    productosString+=productos.join(", ") + "."
    // productos = productos + ...
    return productosString
}

const loopEjecucion = ()=>{
    let decidoAgregar = confirm("¿Desea agregar un producto a la tienda?")
    while(decidoAgregar){
        let prod = prompt("Nombre del producto").toLowerCase()
        agregarProductos(prod)
        decidoAgregar = confirm("¿Desea agregar otro producto a la canasta?")
    }
    const productosLista = mostrarProductos()
    alert(productosLista)
}

loopEjecucion()

// ======= Mini desafio ========
// Detector de palindromos

