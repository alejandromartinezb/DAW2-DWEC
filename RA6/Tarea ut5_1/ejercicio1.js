// 1
const titulo = document.getElementById("titulo");
titulo.innerHTML = "Alejandro Martínez Bravo";

// 2
const articulo2 = document.querySelectorAll("article")[1];
let imagen = articulo2.querySelector("img");
imagen.src = "http://127.0.0.1:5500/DWEC/RA6/Tarea%20ut5_1/noticia5.jpg";

// 3
const articulos = document.querySelectorAll("article");
const ultimo_articulo = articulos[articulos.length - 1];
ultimo_articulo.style.visibility = "hidden";

// 4, 5 y 6
let n = 0;
articulos.forEach(articulo => {
    n++;
    let cabecera1 = articulo.querySelector("div");
    cabecera1.innerText = n + " - " + cabecera1.innerText

    // 5
    cabecera1.classList.add("cabecera");

    // 6
    let divs = articulo.querySelectorAll("div");
    divs.forEach(div => {
        console.log(div);
        div.innerText = div.innerText.replace("Servicio Murciano de Salud","S.M.S");
    });
});