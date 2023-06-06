/* Consigna
✅ Crear un constructor de productos con una estructura básica (Ej: código, descripción, stock, precio unitario).
✅ Luego, crea una función a través de la cual puedas solicitar datos al usuario para dar de alta un nuevo producto, en base a las propiedades definidas en el constructor anterior.
✅ Con toda la información recopilada, instancia la Clase JS para crear un nuevo producto con la información que recopilaste, y agrega este nuevo producto, a un array de productos.
✅ Utiliza console.table(productos), para obtener un Preview del array, por cada nuevo producto que agregas.
*/
/* Tips
💡 Recopila la información del producto, utilizando el cuadro de diálogo Prompt().
💡 Ten presente que el precio del producto, debe guardarse como un número, y puede contener decimales: (utiliza las funciones acordes para controlar que se guarde correctamente esta información.
💡 Ten presente también que, el código del producto, de ser numérico, se debe guardar como un número entero. Utiliza la función acorde para que así sea
*/

class Producto {
    constructor(id,descripcion, stock, precio){
        this.id = id
        this.descripcion = descripcion
        this.stock = stock
        this.precio = precio
    }
}

const productos = []

const existeId = (id)=>{
    productos.some(elemento=>{
        return elemento.id === id
    })
}

const agregarProducto = (elemento)=>{
    if(existeId(elemento.id)){
        alert("Ya existe un producto con ese ID")
    } else {
        productos.push(elemento)
    }
    console.log(productos)
}


const crearProducto = ()=>{
    alert("Esta creando un producto")
    const id = parseInt(prompt("Por favor ingrese el id del producto"))
    const descripcion = prompt("Por favor ingrese el descripcion del producto")
    const stock = parseInt(prompt("Por favor ingrese el stock del producto"))
    const precio = Number(prompt("Por favor ingrese el precio del producto"))
    const nuevoProducto = new Producto(id,descripcion, stock, precio)
    return nuevoProducto
}

agregarProducto(crearProducto())
agregarProducto(crearProducto())
