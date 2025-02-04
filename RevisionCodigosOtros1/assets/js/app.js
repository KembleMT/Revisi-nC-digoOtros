const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Vinculamos bien las etiquetas o id`s con el html '#name' si es un ID o '.name' si es una clase.
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('#location');

async function displayUser(username) {  // Agregamos async para poder usar await 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Se añadió await response.json() para obtener los datos correctamente.
  const data = await response.json(); 
  console.log(data);

  //Se cambian las comillas simples
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  // Se cambió n.textContent a $n.textContent.
  $n.textContent = `Algo salió mal: ${err}`;
}

// Se cambia la sintaxix para que funcione correctamente displayUser() es una función async, pero .catch(handleError) solo funciona con promesas.
displayUser('stolinski').catch(handleError);
