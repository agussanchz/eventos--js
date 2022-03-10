//DOM - EVENTOS

class Productos{
	constructor(nombre, precio, categoria){
		this.nombre = nombre
		this.precio = precio
		this.categoria = categoria
	}
}
 
const productoA = new Productos("iPhone 7 plus", 300, "telefono")
const productoB = new Productos("iPhone X", 400, "telefono")
const productoC = new Productos("Watch Serie 6", 500, "reloj")
const productoD = new Productos("Watch Se", 250, "reloj")

const listaProductos = [productoA, productoB, productoC, productoD]

let categoriaProducto = prompt(`Ingrese la categoria que quiera ver: \n 1-telefono \n 2-reloj`)

const listaSegunCategoria = listaProductos.filter(x => x.categoria == categoriaProducto)

for (const producto of listaSegunCategoria){
	let contenedor = document.createElement("div")

	contenedor.innerHTML = `<h3>Producto: ${producto.nombre}</h3>
							<p>Precio: $US ${producto.precio}</p>
							<b>Categoria: ${producto.categoria}</b>`

	document.body.appendChild(contenedor)
}

