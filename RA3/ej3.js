document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContar");
  const contadorSpan = document.getElementById("contador");

  // Cargamos el contador desde localStorage o lo inicializamos a 0
  let contador = Number(localStorage.getItem("contador")) || 0;
  contadorSpan.textContent = contador;

  btn.addEventListener("click", () => {
    if (Number.isSafeInteger(contador)) {
      contador++;
      localStorage.setItem("contador", contador);
      contadorSpan.textContent = contador;
    } else {
      alert("Ya no se pueden realizar más clicks");
    }
  });
});
