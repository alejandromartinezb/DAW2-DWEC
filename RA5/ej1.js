// Pasarela: contenedor principal
const pasarela_div = document.createElement("div");
document.body.append(pasarela_div);

pasarela_div.classList.add("estilo_pasarela");

const mensajes = document.createElement("div");
document.body.append(mensajes);

mensajes.innerText = "Notificaciones";
mensajes.classList.add("mensajes");

// Visualizador de combinación
const visualizador = document.createElement("div");
pasarela_div.append(visualizador);

visualizador.classList.add("input", "borde_inset");

// offset
const blank = document.createElement("span");
pasarela_div.append(blank);
blank.id = "offset";

// Función para mezclar los botones
function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Funcionalidad del botón
function añadirValor(numero) {
    visualizador.innerText += numero;
}
// Botones de números
const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
mezclar(array_num);

for (let i = 0; i < array_num.length; i++) {
    const numero = array_num[i];
    const boton_div = document.createElement("div");
    pasarela_div.append(boton_div);

    boton_div.innerText = numero;
    boton_div.classList.add("boton", "borde_outset");


    // Funcionalidad
    boton_div.addEventListener("click", () => {
        añadirValor(numero);
    });

}

// Clear
const clear = document.createElement("div");
pasarela_div.append(clear);
clear.innerText = "C";

clear.classList.add("clear", "borde_outset");


function borrarUltimoNumero() {
    visualizador.innerText = visualizador.innerText.slice(0, -1);
}


clear.addEventListener("click", borrarUltimoNumero);

// Validar
const validar = document.createElement("div");
pasarela_div.append(validar);
validar.innerText = "VALIDAR";

validar.classList.add("validar", "borde_outset");

const password = /^9999$/;

function validacion(password, intento) {
    if (intento.length != 4) {
        mensajes.innerText = "La contraseña debe tener 4 dígitos.";
        visualizador.innerText = "";
    } else if (password.test(intento)) {
        mensajes.innerText = "¡Éxito! Has accedido a la cuenta.";
        visualizador.innerText = "";
    } else {
        mensajes.innerText = "Código erróneo. Vuelve a intentarlo.";
        visualizador.innerText = "";
    }
}

validar.addEventListener("click", () => {
    validacion(password, visualizador.innerText)
});