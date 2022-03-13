//DOM - EVENTOS

class Productos{
	constructor(nombre, precio, categoria,imgValor){
		this.nombre = nombre
		this.precio = precio
		this.categoria = categoria
		this.imagen = imgValor
	}
}
 
const productoA = new Productos("iPhone 7 plus", 300, "telefono", "./img/iphone7-8.png")
const productoB = new Productos("iPhone X", 400, "telefono", "./img/iphoneX.png")
const productoC = new Productos("Watch Serie 6", 500, "reloj", "./img/watch-2.png")
const productoD = new Productos("Watch Se", 250, "reloj", "./img/watch-3.png")

const listaProductos = [productoA, productoB, productoC, productoD]

// let categoriaProducto = prompt(`Ingrese la categoria que quiera ver: \n - telefono \n - reloj`)

//const listaSegunCategoria = listaProductos.filter(x => x.categoria == categoriaProducto)

let store = document.querySelector(".store")

let celulares = document.querySelector(".celulares")

celulares.addEventListener("click", mostrar)

function mostrar(){

	for (const producto of listaProductos){
		let contenedor = document.createElement("div")

		contenedor.innerHTML = `<div class="card">
							<h3>Producto: ${producto.nombre}</h3>
							<p>Precio: $US ${producto.precio}</p>
							<img src=${producto.imagen}>
							<button>Comprame!</button></div>`

	store.appendChild(contenedor)
	celulares.remove()
}
}



/*

*/



