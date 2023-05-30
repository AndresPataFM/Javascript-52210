// INCORPORAR OBJETOS
/* 
crea al menos un objeto (incorporando propiedades y su constructor) para controlar el funcionamiento de tu simulador. Incluye también, al menos, un método.
Instancia e invoca este objeto en algún momento donde el usuario realice alguna acción.
================
Algunos objetos a identificar pueden ser: Producto, Persona, Libro, Auto, Comida, Bebida, Tarea, etc. 
Ejemplo: Puedes crear un objeto que reciba un producto y las cantidades a comprar de este y que, mediante un método, calcule el total de unidades por el precio unitario, devolviendo el importe a pagar.
*/

// COMPLEMENTARIO
/* 
Genera un array de objetos con la estructura de objeto mencionada. Por otro lado, crea un objeto Producto(), que reciba mediante su constructor el array de objetos.
El objeto Producto() debe tener un método llamado totalDeCompra(), que recorra el array recibido mediante el constructor, multiplique la cantidad de cada producto por el precio unitario de este y acumule el subtotal en una variable. Esta variable será retornada por este método con el precio final que debe pagarse por ese total de productos y cantidades a comprar.
El array de productos debe tener al menos cuatro productos, y debe variar las cantidades de cada uno de estos, como también el precio unitario.
El valor retornado por el método, debe tener hasta 2 decimales (Ej: 1345.49)
================
Crea un objeto que reciba a través de su constructor, un array de objetos que contenga {producto, precioUnitario, cantidad}.
Te dejamos a continuación un ejemplo del array de objetos. Puedes usarlo como modelo, pero debes cambiar el nombre de los productos, las cantidades y el precio unitario.

const carrito = [
    {producto: “Macbook Air M2”, precioUnitario: 159900, cantidad: 2},
    {producto: “Magic Mouse”, precioUnitario: 39900, cantidad: 1},
    {producto: “iPad Air”, precioUnitario: 89790, cantidad: 1}
]

*/

const productos = []
const carrito = {
    totalDeCompra:0,
    productosEnCarrito: [],
    calcularTotal: function(){
        this.totalDeCompra = 0
        for(let i=0; i<this.productosEnCarrito.length;i++){
            this.totalDeCompra+= this.productosEnCarrito[i].precio
        }
    },
}



class Producto{
    constructor(nombre, id, precio){
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}

const crearProducto = (nombre, id, precio)=>{
    productos.push(new Producto(nombre, id, precio))
    console.log(productos)
}

const moverProdACarrito = (productoID, arrayProductos)=>{
    for(let i=0;i<arrayProductos.length; i++){
        let prodActual = arrayProductos[i]
        if(prodActual.id === productoID){
            carrito.productosEnCarrito.push(prodActual)
            break;
        }
    }
}

const inflacion = ()=>{
    for(let i=0;i<productos.length; i++){
        let prodActual = productos[i]
        prodActual.precio = prodActual.precio*1.2
    }
    console.log(productos)
}


crearProducto("gaseosa", 1, 500)
crearProducto("alfajor", 2, 250)
crearProducto("chupetin", 3, 150)
crearProducto("chicles", 4, 400)

// moverProdACarrito(1, productos)
// moverProdACarrito(1, productos)
// moverProdACarrito(1, productos)
// moverProdACarrito(1, productos)