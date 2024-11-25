const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
const listaSeleccionados = document.getElementById("productos_seleccionados");

productosSeleccionados.forEach(producto => {
	//Creamos el elemento de LISTA (list item) para cada producto
	let itemSeleccionado = document.createElement("li");

	//Creamos el contenido del producto
	let nombreProducto = document.createElement("h2");
	nombreProducto.textContent = producto.title;
	let precioProducto = document.createElement("p");
	precioProducto.innerHTML = `<strong>Precio:</string> € ${producto.precio}`;
	let descripcionProducto = document.createElement("p");
	descripcionProducto.textContent = producto.description;
	let categoriaProducto = document.createElement("p");
	categoriaProducto.textContent = producto.category;
	let imagenProducto = document.createElement("img");
	imagenProducto.src = producto.image;
	imagenProducto.alt = producto.title;
	imagenProducto.style.width = "100px";
	// Añadir el rating
	let ratingProducto = document.createElement("p");
	ratingProducto.innerHTML = `
		<strong>Rating:</strong> ${producto.rating.rate} 
		<br>
		<strong>Reseñas:</strong> ${producto.rating.count}
	`;

	itemSeleccionado.appendChild(nombreProducto);
	itemSeleccionado.appendChild(precioProducto);
	itemSeleccionado.appendChild(descripcionProducto);
	itemSeleccionado.appendChild(imagenProducto);
	itemSeleccionado.appendChild(ratingProducto);

	listaSeleccionados.appendChild(itemSeleccionado)
});