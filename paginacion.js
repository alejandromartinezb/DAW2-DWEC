const btn_inicio = document.createElement("button");
btn_inicio.innerText = "Volver"

btn_inicio.style.top = "20px";

btn_inicio.style.right = "20px";

btn_inicio.style.position = "absolute";

btn_inicio.addEventListener("click", () => {
    window.location.href = "/DWEC/index.html";
});

document.body.appendChild(btn_inicio);