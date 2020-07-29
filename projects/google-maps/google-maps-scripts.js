  
function iniciarMapa() {

  let fiuba = new google.maps.LatLng(-34.617529, -58.368317);
  let casaRosada = new google.maps.LatLng(-34.6080556, -58.3702778);
  let obelisco = new google.maps.LatLng(-34.6037389, -58.3815704);
  let lunaPark = new google.maps.LatLng(-34.6021614, -58.3684158);
  
  // Creacion del mapa

  let propiedadesMapa = {
    center: fiuba,
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  
  let mapa = new google.maps.Map(document.getElementById('mapa'), propiedadesMapa);

  // Marca de Mapa

  let marcaCentroDeMapa = new google.maps.Marker({
    position: fiuba,
    map: mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  
  // Polilínea

  let destinoPolilinea = [fiuba, obelisco, lunaPark];

  let camino1 = new google.maps.Polyline({
    path: destinoPolilinea,
    strokeColor: "#0000FF",
    strokeOpacity: 0.5,
    strokeWeight: 3,
    editable: false,
    map: mapa
  });

  // Polígono

  let destinoPoligono = [fiuba, casaRosada, lunaPark, fiuba];

  let camino2 = new google.maps.Polygon({
    path: destinoPoligono,
    strokeColor: "#00FF00",
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor:"#00FFFF",
    fillOpacity:0.4,
    editable: false,
    map: mapa
  });

  // Circulo

  let rango = new google.maps.Circle({
    center: obelisco,
    radius: 500,
    strokeColor: "#F0F0F0",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor:" #F0F0F0",
    fillOpacity: 0.4,
    editable: false,
    map: mapa
  });

  // Agregar evento para zoom a la marca del centro

  google.maps.event.addListener(marcaCentroDeMapa, 'click', () => {
    
    let zoomInicial = mapa.getZoom();
    
    mapa.setZoom(18);
    
    let nuevaInfo = new google.maps.InfoWindow({
      content: "FIUBA"
    });

    nuevaInfo.open(mapa, marcaCentroDeMapa);

    window.setTimeout(() => {
      mapa.setZoom(zoomInicial);
    }, 3000);

  });

  // Funcionalidad para poner marcas con sus coordenadas en el mapa.

  function marcarMapa(mapa, posicion) {

    let nuevaMarca = new google.maps.Marker({
      position: posicion,
      map: mapa
    });

    let infoPosicion = new google.maps.InfoWindow({
      content: "Latitud: " + posicion.lat() + "<br>Longitud: " + posicion.lng()
    });

    infoPosicion.open(mapa, nuevaMarca);

  }

  google.maps.event.addListener(mapa, 'click', (event) => {

    console.log(event.latLng);
    
    marcarMapa(mapa, event.latLng);

  });

}