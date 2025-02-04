var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault(); // Cambio e.preventDefault() en lugar de e.prevent()

  var n = formulario.elements[0]; 
  var e = formulario.elements[1]; 
  var na = formulario.elements[2]; 

  var nombre = n.value;
  var edad = e.value;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);


  if (nombre.length === 0) {
    n.classList.add("error"); 
    n.classList.remove("error"); 
  }
  
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); 
  } else {
    e.classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) { //Agrego veririficacion si ambos campos son válidos antes de agregar el invitado
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  // Asignando nacionalidad correcta
  switch (nacionalidad) { // Cambio funcion por switch para que se comprenda mejor 
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    default:
      nacionalidad = "Desconocida"; // Agrego desconocida si no se conoce 
  }

  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); //Cambio 'added' a 'add' para añadir correctamente la clase
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Creo los elementos de la lista 
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Boton borrar
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar"); //Agrego clase al boton 
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Eliminar el invitado
  botonBorrar.onclick = function() {
    elementoLista.remove(); //'elementoLista.remove()' para eliminar el contenedor completo del invitado
  };
};
