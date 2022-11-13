async function llamarApi() {
    const respuesta = await fetch(`https://apis.datos.gob.ar/georef/api/ubicacion?lat=${coordenadas.lat}&lon=${coordenadas.lng}`)
    
    return await respuesta.json()
    
}
async function imprimirRespuesta() {
    const respuesta = await llamarApi()
    console.log(respuesta)
}

const coordenadas = { lat: -34.64249470113648, lng: -58.48436841372024}


const elemento = document.getElementById("map")
if (elemento != null) {
    const mapa = new google.maps.Map(elemento,     {
        zoom: 18,
        center: coordenadas,
        mapTypeId: "terrain",
      })


    const latNueva = coordenadas.lat - 0.00002
    const lngNueva = coordenadas.lng - 0.00002

    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: mapa,
        center: {lat: latNueva, lng: lngNueva},
        radius: 200,
      });
    

    imprimirRespuesta()
}



