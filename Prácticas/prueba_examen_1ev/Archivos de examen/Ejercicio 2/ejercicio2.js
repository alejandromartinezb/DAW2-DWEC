let articulos = [
    { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
    { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
    { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
    { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
    { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
    { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
    { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
    { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
    { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
    { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
    { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
    { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
    { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
    { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
    { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
    { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
    { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
    { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
    { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
    { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
]

function filtrarTipo(articulos, tipo, precio_max) {
    let array_resultado = [];
    for (const articulo of articulos) {
        if (articulo.tipo == tipo && articulo.precio <= precio_max) {
            array_resultado.push(articulo);
        }
    }
    return array_resultado;
}

function inicioMayus(articulos) {
    let array_resultado = [];
    let descipcion_minus = "";
    let nueva_descripcion = "";
    for (const articulo of articulos) {
        descipcion_minus = articulo.descripcion.toLowerCase();
        nueva_descripcion = descipcion_minus.charAt(0).toUpperCase() + descipcion_minus.slice(1);
        // articulo.descripcion = nueva_descripcion;
        array_resultado.push({
            codigo: articulo.codigo,
            descripcion: nueva_descripcion,
            precio: articulo.precio,
            tipo: articulo.tipo
        });
    }

    return array_resultado;
}

function filtrarDescripcion(articulos, cadena) {
    let regex = new RegExp(cadena, "i"); // "i" = ignore case

    return articulos.filter(articulo => regex.test(articulo.descripcion));

}

function calcularPrecioMedio(articulos, tipo) {
    // let resultado = [{ "cantidad": 0, "preciomedio": 0 }];
    let precio_total = 0;
    let precio_medio = 0;
    let cantidad = 0;
    for (const articulo of articulos) {
        if (tipo == articulo.tipo) {
            precio_total += articulo.precio;
            cantidad++;
        }
    }
    precio_medio = precio_total / cantidad;

    let resultado = [{ "cantidad": cantidad, "preciomedio": precio_medio }];
    return resultado
}

function ordenarObjetos(articulos, orden = "asc") {
    return articulos.toSorted((a, b) => {
        console.log(a,b);
        if (orden === "asc") {
            return a.precio - b.precio; // menor a mayor
        } else if (orden === "desc") {
            return b.precio - a.precio; // mayor a menor
        } else {
            console.warn("El valor de 'orden' debe ser 'asc' o 'desc'");
            return 0;
        }
    });
}



console.log(filtrarTipo(articulos, "Electrónica", 100));
console.log(inicioMayus(articulos));
console.log(filtrarDescripcion(articulos, "inal"));
console.log(calcularPrecioMedio(articulos, "Electrónica"));
console.log(ordenarObjetos(articulos));