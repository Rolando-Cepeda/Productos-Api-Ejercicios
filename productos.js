(function () {
	localStorage.clear();
})();

// Función que nos trae los productos de la API
const traerProductosApi = () => {
	fetch("https://fakestoreapi.com/products?limit=10")
		.then(respuesta => respuesta.json())
		.then(datos => mostrarProductos(datos))
		.catch(error => console.error("Error al cargar los productos: ", error));
};

// Función que nos MOSTRARÁ en pantallá todos los productos
const mostrarProductos = productos => {
	productos.forEach(producto => {


		// Creamos el contenido del producto:
		let nombreProducto = document.createElement("h2");
		nombreProducto.textContent = producto.title; // Título del producto
		let precioProducto = document.createElement("p");
		precioProducto.innerHTML = `<strong>Precio:</strong> € ${producto.price}`; // Precio del producto
		let descripcionProducto = document.createElement("p");
		descripcionProducto.textContent = producto.description;// Descripción del producto
		let categoriaProducto = document.createElement("p");
		categoriaProducto.textContent = producto.category; // Categoría del producto.
		let imagenProducto = document.createElement("img");// Imagen del producto
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

		// Creamos el BOTÓN en donde hará click el usuario
		let botonSeleccionar = document.createElement("button");
		botonSeleccionar.textContent = "Seleccionar producto";
		botonSeleccionar.style.marginTop = "20px";
		botonSeleccionar.addEventListener("click", () => {
			guardarSeleccion(); // LLama a la función que se ha creado para guardar la selección
			alert(`Has selecionado: ${producto.title}`);
		});



		//Creamos el elemento de LISTA (list item) para cada producto
		const lista = document.createElement("li");


		//Añadimos el contenido de los productos en la lista que creamos antes
		lista.appendChild(nombreProducto);
		lista.appendChild(precioProducto);
		lista.appendChild(descripcionProducto);
		lista.appendChild(imagenProducto);
		lista.appendChild(ratingProducto);
		lista.appendChild(botonSeleccionar);


		// Añadimos el elemento LISTA a la lista de productos de HTML
		let listaProductos = document.getElementById("lista_productos");
		listaProductos.appendChild(lista);
	});
};

// Función que guardará la selección en localStorage
const guardarSeleccion = producto => {
	let productoSeleccionado = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
	productoSeleccionado.push(producto);
	localStorage.setItem("productosSeleccionados", JSON.stringify(productoSeleccionado));

};

// LLamamos a la función para mostrar los productos en pantalla.
traerProductosApi();