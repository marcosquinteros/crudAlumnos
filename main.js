const formulario = document.getElementById("formulario-producto");

formulario.addEventListener("submit", guardarProducto);

function guardarProducto(event) {
  event.preventDefault();

  const codigo = document.getElementById("codigo").value;
  const categoria = document.getElementById("categoria").value;
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  const url = document.getElementById("url").value;

  const producto = {
    codigo,
    categoria,
    nombre,
    precio,
    descripcion,
    url,
  };

  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));
  formulario.reset();
  cargarProductos();
}

// tabla

const tablaProductos = document.getElementById("tabla-productos");
const tbody = tablaProductos.querySelector("tbody");

cargarProductos();

function cargarProductos() {
  tbody.innerHTML = "";

  const productos = JSON.parse(localStorage.getItem("productos")) || [];

  productos.forEach((producto, indice) => {
    const fila = document.createElement("tr");

    const columnaImagen = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = producto.url;
    imagen.alt = producto.nombre;
    imagen.style.width = "100px";
    columnaImagen.appendChild(imagen);
    fila.appendChild(columnaImagen);

    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = producto.nombre;
    fila.appendChild(columnaNombre);

    const columnaPrecio = document.createElement("td");
    columnaPrecio.textContent = producto.precio;
    fila.appendChild(columnaPrecio);

    // const columnaDescripcion = document.createElement("td");
    // columnaDescripcion.textContent = producto.descripcion;
    // fila.appendChild(columnaDescripcion);

    const columnaAcciones = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
      eliminarProducto(indice);
      cargarProductos(); // Recargar la tabla después de eliminar el producto
    });
    columnaAcciones.appendChild(botonEliminar);
    fila.appendChild(columnaAcciones);

    tbody.appendChild(fila);
  });
}

// Paso 4: Función para eliminar un producto del localStorage
function eliminarProducto(indice) {
  // Obtener los productos del localStorage
  const productos = JSON.parse(localStorage.getItem("productos")) || [];

  // Eliminar el producto del arreglo por su índice
  productos.splice(indice, 1);

  // Actualizar el localStorage con el arreglo actualizado
  localStorage.setItem("productos", JSON.stringify(productos));
}

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// cards

const cards = document.querySelectorAll(".cards");

const img = document.createElement("img");
img.setAttribute("src", producto.url);

const nombre = document.createElement("h2");
nombre.textContent(producto.nombre);

const precio = document.createElement("p");
precio.textContent(producto.precio);

const button = document.createElement("button");
button.setAttribute("btn btn-primary");
