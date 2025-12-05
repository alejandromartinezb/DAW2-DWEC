// 1
const newH1 = document.createElement("h1");
newH1.innerHTML = "ALEJANDRO MARTÍNEZ BRAVO"
document.body.appendChild(newH1);

// 2 y 3
const contenedorPrincipal = document.createElement("div");
datos.forEach(articulo => {
    let nombre = document.createElement("div");
    let descripcion = document.createElement("div");
    let precio = document.createElement("div");
    let imagen = document.createElement("img");

    nombre.innerHTML = `<strong>${articulo.nombre}</strong>`;
    descripcion.innerHTML = articulo.descripcion;
    precio.innerHTML = articulo.precio + " €";
    imagen.src = articulo.imagen;

    let contenedorArticulo = document.createElement("div");
    contenedorArticulo.appendChild(nombre);
    contenedorArticulo.appendChild(descripcion);
    contenedorArticulo.appendChild(precio);
    contenedorArticulo.appendChild(imagen);

    contenedorPrincipal.appendChild(contenedorArticulo);
});

document.body.append(contenedorPrincipal);

// 4, añadir CSS para apariencia
contenedorPrincipal.classList.add("container");