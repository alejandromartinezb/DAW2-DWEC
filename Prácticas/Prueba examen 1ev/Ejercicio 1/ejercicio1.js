function solicitarIdioma() {
    let idioma = localStorage.getItem("idiomaGuardado");

    if (!idioma) { // Pregunta si no está guardado
        while (true) {
            let entrada = prompt("Seleccione un idioma: EN (Inglés) o ES (Español").trim().toUpperCase();

            // Validación de la entrada

            if (entrada == "EN" || entrada == "ES") {
                localStorage.setItem("idiomaGuardado", entrada);
                idioma = entrada;
                alert("Idioma guardado: " + entrada);
                break;
            }
            else {
                alert("Error: Introduzca 'EN' o 'ES'.");
            }
        }

    } else {
        alert("Bienvenido de nuevo. Idioma preferido: " + idioma);

    }
    if (idioma === "ES") {
        document.querySelector('h1').innerText = "ESTE ES EL EJERCICIO 1";
        document.querySelector('article').innerText = "Este es el contenido del ejercicio 1";
    }
}

window.onload = solicitarIdioma;

const limpiar_btn = document.getElementById("limpiar");
limpiar_btn.addEventListener("click", () => {
    localStorage.clear();
})