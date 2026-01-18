// a) Generar elementos
const titulo = document.createElement("div");
document.body.append(titulo);
titulo.innerHTML = "<h1>LOTERÍA PRIMITIVA.</h1>";

const contenedor_numeros = document.createElement("div");
document.body.append(contenedor_numeros);
contenedor_numeros.classList.add("contenedor_numeros");

const contenedor_intento = document.createElement("div");
document.body.append(contenedor_intento);
contenedor_intento.classList.add("contenedor_intento");


const contenedor_aciertos = document.createElement("div");
document.body.append(contenedor_aciertos);

// Dibujar números
for (let i = 1; i < 50; i++) {
    const numero = document.createElement("div");
    contenedor_numeros.append(numero);
    numero.classList.add("numero");

    numero.textContent = i;

}

const sorteo_btn = document.createElement("button");
sorteo_btn.textContent = "Realizar sorteo";
contenedor_intento.append(sorteo_btn);

const MAX_SELECCION = 6;
const MIN_NUMERO = 1;
const MAX_NUMERO = 49;

// b) Marcar haciendo click
contenedor_numeros.addEventListener('click', (event) => {
    // Recoger elemento clickado
    const clickedElement = event.target;

    // Discernir entre boton con numero y contenedor padre
    if (clickedElement.classList.contains('numero')) {
        // Node List con los botones seleccionados
        const seleccionados = contenedor_numeros.querySelectorAll('.numero.selected');

        // Controlador de seleccionados
        if (clickedElement.classList.contains('selected')) {
            clickedElement.classList.remove('selected');
        } else if (seleccionados.length < MAX_SELECCION) {
            clickedElement.classList.add('selected');
        } else {
            alert(`Solo puedes seleccionar ${MAX_SELECCION} números.`);
        }
    }
});

// Función para generar 6 números aleatorios únicos
function generarSorteo() {
    const numerosSorteo = [];
    while (numerosSorteo.length < MAX_SELECCION) {
        const randomNum = Math.floor(Math.random() * (MAX_NUMERO - MIN_NUMERO + 1)) + MIN_NUMERO;
        if (!numerosSorteo.includes(randomNum)) {
            numerosSorteo.push(randomNum);
        }
    }
    return numerosSorteo;
}

// c) Funcionalidad del botón del sorteo
sorteo_btn.addEventListener('click', () => {
    const seleccionados = contenedor_numeros.querySelectorAll('.numero.selected');

    if (seleccionados.length !== MAX_SELECCION) {
        alert(`Por favor, selecciona exactamente ${MAX_SELECCION} números antes de sortear.`);
        return;
    }

    // Limpia resultados anteriores
    contenedor_intento.querySelectorAll('.sorteo_num').forEach(el => el.remove());
    contenedor_aciertos.textContent = '';

    // Llamada a la función que genera el sorteo
    const numerosSorteo = generarSorteo();
    let aciertos = 0;
    const numerosSeleccionadosTexto = Array.from(seleccionados).map(el => el.textContent);
    console.log(numerosSeleccionadosTexto);

    // Muestra los números del sorteo y cuenta aciertos
    numerosSorteo.forEach(num => {
        const numSorteoDiv = document.createElement('div');
        numSorteoDiv.textContent = num;
        numSorteoDiv.classList.add('sorteo_num'); // Clase nueva para estilo y controlar limpieza
        contenedor_intento.append(numSorteoDiv);

        if (numerosSeleccionadosTexto.includes(String(num))) {
            aciertos++;
        }
    });

    // Muestra el número de aciertos
    contenedor_aciertos.textContent = `Has tenido ${aciertos} aciertos.`;
});