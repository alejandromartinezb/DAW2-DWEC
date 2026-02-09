const url_rest = "http://api.raulserranoweb.es/rest.php";
const url_imagen = "http://api.raulserranoweb.es/imagenes_art/";

// Recoger los elementos del html
const contenedor = document.getElementById('bicicletas');
const selector = document.getElementById('cat-select');

function cargarBicis(categoria = "") {
    // d) Construimos la URL con el parámetro 'cat' si existe
    const urlFinal = categoria ? `${url_rest}?cat=${categoria}` : url_rest;
    // Ejemplo: .../rest.php?cat=Gravel

    fetch(urlFinal)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            contenedor.innerHTML = ""; // Limpiamos antes de cargar

            data.forEach(bici => {
                // b) Creamos la URL de la imagen con el código del artículo
                const srcImagen = url_imagen + bici.cod;

                // a) Creamos el bloque con la estructura de la imagen
                const div = document.createElement('div');
                div.className = "bici-bloque";
                div.innerHTML = `
                    <img src="${srcImagen}" alt="${bici.nom}" style="width:100%">
                    <p><b>Nombre:</b> ${bici.nom}</p>
                    <p><b>Descripción:</b> ${bici.des}</p>
                    <p><b>Categoría:</b> ${bici.cat}</p>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch(error => console.error('Error al cargar datos:', error));
}


// c) Escuchar cambios en el select
selector.addEventListener('change', (e) => {
    cargarBicis(e.target.value);
});

// Carga inicial (todas)
cargarBicis();
