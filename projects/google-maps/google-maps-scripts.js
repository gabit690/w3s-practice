  
function iniciarMapa(){

  let fiuba = new google.maps.LatLng(-34.617529, -58.368317);
  let casaRosada = new google.maps.LatLng(-34.6080556, -58.3702778);
  let obelisco = new google.maps.LatLng(-34.6037389, -58.3815704);
  let lunaPark = new google.maps.LatLng(-34.6021614, -58.3684158);
  
  let propiedadesMapa = {
    center: fiuba,
    zoom: 14
  };
  
  let mapa = new google.maps.Map(document.getElementById('mapa'), propiedadesMapa);
  
  // Marca de Mapa
  let marcaCentroDeMapa = new google.maps.Marker({
    position: fiuba,
    animation: google.maps.Animation.BOUNCE,
  });
  
  marcaCentroDeMapa.setMap(mapa);

  // Información en marca

  let info = new google.maps.InfoWindow({
    content: "FIUBA"
  });

  info.open(mapa, marcaCentroDeMapa);

  // Polilínea

  let destinoPolilinea = [fiuba, obelisco, lunaPark];

  let camino1 = new google.maps.Polyline({
    path: destinoPolilinea,
    strokeColor: "#0000FF",
    strokeOpacity: 0.5,
    strokeWeight: 3,
    editable: false
  });

  camino1.setMap(mapa);

  // Polígono

  let destinoPoligono = [fiuba, casaRosada, lunaPark, fiuba];

  let camino2 = new google.maps.Polygon({
    path: destinoPoligono,
    strokeColor: "#00FF00",
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor:"#00FFFF",
    fillOpacity:0.4,
    editable: false
  });

  camino2.setMap(mapa);

  // Circulo

  let rango = new google.maps.Circle({
    center: fiuba,
    radius: 500,
    strokeColor: "#FF00FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor:" #FF00FF",
    fillOpacity: 0.4,
    editable: false
  });

  rango.setMap(mapa);

}