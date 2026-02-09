const url = 'https://jsonplaceholder.typicode.com/users'; // URL de ejemplo
const tablaBody = document.getElementById('contenido-tabla');
let allUsers = [];


// Función que añade filas a la tabla con los datos de cada usuario
function pintarUsuario(usuario) {
    let htmlFila = `
    <tr id='${usuario.id}'>
          <td class='name'>${usuario.name}</td>
          <td>${usuario.address.street}</td>
          <td>${usuario.address.city}</td>
    </tr>
    `;

    tablaBody.innerHTML += htmlFila;
}


// Petición AJAX para obtener datos JSON
fetch(url)
    .then(response => response.json()) // Convierte la respuesta a objeto JSON
    .then(data => {
        allUsers = data; // Creamos copia para usarla más adelante
        console.log(data); // Para poder ver los datos

        // Llamada a la función que crea una fila por cada usuario
        data.forEach(usuario => {
            pintarUsuario(usuario);
        });

    })
    .catch(error => console.error('Error al cargar datos:', error));


const btn_buscar = document.getElementById("btn-buscar");
btn_buscar.addEventListener("click", () => {
    // Limpiar tabla
    tablaBody.innerHTML = '';

    const cadena = document.getElementById('input-busqueda').value.toLowerCase();

    allUsers.forEach(usuario => {
        if (usuario.name.toLowerCase().includes(cadena)) {
            pintarUsuario(usuario);
        }
    });


});