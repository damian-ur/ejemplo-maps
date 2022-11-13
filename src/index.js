var elemento = document.getElementById("map");
if (elemento != null) {
    var mapa = new google.maps.Map(elemento, {
        zoom: 4,
        center: { lat: 37.09, lng: -95.712 },
        mapTypeId: "terrain"
    });
    var cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: mapa,
        center: { lat: 37.09, lng: -95.712 },
        radius: 200
    });
}
