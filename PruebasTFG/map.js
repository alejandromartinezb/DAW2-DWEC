const waypoints = [];


var map = L.map('map').setView([37.61, -0.983], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);





function onMapClick(e) {
    const waypoint = { lat: e.latlng.lat, lng: e.latlng.lng };
    waypoints.push(waypoint);

    const markerIndex = waypoints.length - 1;

    L.marker(e.latlng).addTo(map)
        .bindPopup(`<a href="https://www.google.com/maps/place/${e.latlng.lat},${e.latlng.lng}" target="_blank">Navegación</a>
        <br> <a class="remove-waypoint" data-index="${markerIndex}" href="#">Eliminar punto</a>`)
        // Añadir dataset al link que elimina waypoints
        .openPopup();
}


document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("remove-waypoint")) {
        const markerIndex = element.dataset.index;
        const waypoint = waypoints[markerIndex];
        // Eliminar waypoint

        // Buscar qué layer es el waypoint que tengo seleccionado para borrarlo
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                const latlng = layer.getLatLng();

                if (latlng.lat == waypoint.lat && latlng.lng == waypoint.lng) {
                    map.removeLayer(layer);
                    waypoints[markerIndex] = null;
                }


            }
        })


    }
})

map.on('click', onMapClick);