const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


const listaProductos = document.getElementById("lista-de-productos"); // Cambié getElementsByName a getElementById
const inputFiltro = document.querySelector("#inputFiltro"); // Cambié '.input' a '#inputFiltro' para usar el id correcto
const botonDeFiltro = document.querySelector("button");


function mostrarProductos(productos) {
 
  listaProductos.innerHTML = ''; // Limpia la lista antes de agregar productos filtrados

  // Crear los elementos de producto y agregarlos a la lista
  productos.forEach(producto => { // Utilicé forEach para recorrer el array de productos
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img); // Establecí la imagen del producto
    imagen.setAttribute('alt', producto.nombre); // Añadí el atributo alt para mejorar la accesibilidad

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);
    listaProductos.appendChild(divProducto); // Agregué el producto al contenedor de productos
  });
}


mostrarProductos(productos); // Esto muestra todos los productos al cargar la página

const filtrado = (productos, texto) => {
  // Filtra los productos que coinciden con el tipo o color basado en el texto ingresado
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};


botonDeFiltro.onclick = function() {
  const textoFiltro = inputFiltro.value.toLowerCase(); // Convertí el texto a minúsculas para comparación insensible a mayúsculas/minúsculas
  const productosFiltrados = filtrado(productos, textoFiltro); // Filtré los productos según el texto ingresado
  mostrarProductos(productosFiltrados); // Mostré los productos filtrados
};