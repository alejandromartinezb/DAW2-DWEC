// Declaración de elementos
const inputNombre = document.createElement("input");
const inputApellido = document.createElement("input");
inputNombre.type = "text";
inputNombre.placeholder = "Nombre";
inputApellido.type = "text";
inputApellido.placeholder = "Apellido";

const añadir_btn = document.createElement("button");
const eliminar_btn = document.createElement("button");
añadir_btn.innerHTML = "Añadir";
eliminar_btn.innerHTML = "Eliminar";

document.body.appendChild(inputNombre);
document.body.appendChild(inputApellido);
document.body.appendChild(añadir_btn);
document.body.appendChild(eliminar_btn);

const contenedorNombres = document.createElement("div");
document.body.appendChild(contenedorNombres);

const contenedorApellidos = document.createElement("div");
document.body.appendChild(contenedorApellidos);

const nombres = document.createElement("p");
const apellidos = document.createElement("p");
nombres.innerHTML = `<strong>Nombre</strong>`;
apellidos.innerHTML = `<strong>Apellidos</strong>`;

contenedorNombres.appendChild(nombres);
contenedorApellidos.appendChild(apellidos);


const error = document.createElement("p");
error.innerHTML = "Error: Debes especificar ambos campos.";
error.style.visibility = "hidden";
document.body.appendChild(error);

const error1 = document.createElement("p");
error1.innerHTML = "Error: Ese nombre no está en la lista."
error1.style.visibility = "hidden";
document.body.appendChild(error1);



// funcionalidades
añadir_btn.addEventListener("click", () => {
    if (inputNombre.value == "" && inputApellido.value == "") {
        error.style.visibility = "visible";
        return;
    }

    error.style.visibility = "hidden";

    const conjuntoNombres = contenedorNombres.querySelectorAll("p");
    const conjuntoApellidos = contenedorApellidos.querySelectorAll("p");
    let existeNombre = false;
    let existeApellido = false;

    conjuntoNombres.forEach(nombre => {
        if (nombre.innerText == inputNombre.value) {
            existeNombre = true;
        }
    });

    conjuntoApellidos.forEach(apellido => {
        if (apellido.innerText == inputApellido.value) {
            existeApellido = true;
        }
    });

    if (existeNombre && existeApellido) {
        error1.style.visibility = "visible";
        return;
    }

    error1.style.visibility = "hidden";

    let nuevoNombre = document.createElement("p");
    nuevoNombre.innerHTML = inputNombre.value;
    let nuevoApellido = document.createElement("p");
    nuevoApellido.innerHTML = inputApellido.value;

    contenedorNombres.appendChild(nuevoNombre);
    contenedorApellidos.appendChild(nuevoApellido);
});

eliminar_btn.addEventListener("click", () => {
    if (inputNombre.value == "" && inputApellido.value == "") {
        error.style.visibility = "visible";
        return;
    }


    error.style.visibility = "hidden";

    const conjuntoNombres = contenedorNombres.querySelectorAll("p");
    const conjuntoApellidos = contenedorApellidos.querySelectorAll("p");
    let nombreParaBorrar;
    let apellidoParaBorrar;

    conjuntoNombres.forEach(nombre => {
        if (nombre.innerText == inputNombre.value) {
            nombreParaBorrar = nombre;
        }
    });

    conjuntoApellidos.forEach(apellido => {
        if (apellido.innerText == inputApellido.value) {
            apellidoParaBorrar = apellido;
        }
    });


    if (nombreParaBorrar && apellidoParaBorrar) {
        nombreParaBorrar.remove();
        apellidoParaBorrar.remove();
    } else {
        error1.style.visibility = "visible";
        return;
    }
    error1.style.visibility = "hidden";
});

