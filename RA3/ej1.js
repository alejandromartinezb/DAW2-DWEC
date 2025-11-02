// Esperamos a que el DOM esté cargado para añadir eventos
document.addEventListener("DOMContentLoaded", () => {

    // enlazamos boton de js al del html por id
    const btnVentana = document.getElementById("abrirVentana");

    // Capturamos el clic en el botón
    btnVentana.addEventListener("click", () => {

        const nuevaVentana = window.open("", "nuevaVentana", "width=600,height=400");

        const fechaHoy = new Date();
        const dia = fechaHoy.getDate();
        const mes = fechaHoy.getMonth() + 1;  // Los meses empiezan desde el 0
        const año = fechaHoy.getFullYear();

        // Calculamos los días hasta fin de año
        const finAño = new Date(año, 11, 31); // 11 es diciembre, día 31
        const milisegundosPorDia = 1000 * 60 * 60 * 24;
        const diasRestantes = Math.floor((finAño - fechaHoy) / milisegundosPorDia);

        // Escribimos en la ventana nueva
        nuevaVentana.document.body.innerHTML =
            `<h2>Hoy es ${dia}/${mes}/${año} y faltan ${diasRestantes} días para fin de año</h2>`
            ;
    });

});
