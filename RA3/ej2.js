function comprimir(cadena) {
  if (/\d/.test(cadena)) {
    throw new Error("La cadena no puede contener números");
  }

  // Reemplazamos espacios por '?'
  cadena = cadena.replace(' ', '?');

  let resultado = "";
  let contador = 1;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i + 1]) {
      contador++;
    } else {
      // Si el caracter se repite más de una vez, lo indicamos con su contador
      resultado += (contador > 1 ? contador : "") + cadena[i];
      contador = 1; // Reiniciamos el contador
    }
  }

  return resultado;
}

/**
 * Función para descomprimir una cadena en el formato comprimido.
 * Convierte '?' en espacios.
 */
function descomprimir(cadena) {
  let resultado = "";
  let regex = /(\d+)?([a-zA-Z?])/g;
  let match;

  while ((match = regex.exec(cadena)) !== null) {
    let veces = parseInt(match[1]) || 1;
    let caracter = match[2];
    resultado += caracter.repeat(veces);
  }

  // Convertimos '?' de nuevo en espacio
  resultado = resultado.replace(/\?/g, ' ');

  return resultado;
}

// DOM y eventos
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputCadena");
  const result = document.getElementById("resultado");
  const btnComprimir = document.getElementById("btnComprimir");
  const btnDescomprimir = document.getElementById("btnDescomprimir");

  btnComprimir.addEventListener("click", () => {
    try {
      result.textContent = comprimir(input.value);
    } catch (e) {
      alert(e.message);
    }
  });

  btnDescomprimir.addEventListener("click", () => {
    try {
      result.textContent = descomprimir(input.value);
    } catch (e) {
      alert(e.message);
    }
  });
});
