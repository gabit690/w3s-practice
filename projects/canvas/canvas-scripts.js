function dibujarCara(lienzoContexto, radio) {

    lienzoContexto.beginPath();

    lienzoContexto.arc(0, 0, radio, 0, 2 * Math.PI);
  
    lienzoContexto.fillStyle = "white";
    
    lienzoContexto.fill();
    
    let gradienteBorde = lienzoContexto.createRadialGradient(0, 0 ,radio * 0.9, 0, 0, radio * 1.05);
    
    gradienteBorde.addColorStop(0, '#bb5a5a');
    
    gradienteBorde.addColorStop(0.5, 'white');
    
    gradienteBorde.addColorStop(1, '#bb5a5a');
    
    lienzoContexto.strokeStyle = gradienteBorde;
    
    lienzoContexto.lineWidth = radio * 0.1;
    
    lienzoContexto.stroke();
    
    lienzoContexto.beginPath();
    
    lienzoContexto.arc(0, 0, radio * 0.1, 0, 2 * Math.PI);
    
    lienzoContexto.fillStyle = "#333";
    
    lienzoContexto.fill();
  
}

function dibujarNumeros(lienzoContexto, radio) {

  let angulo;

  let numero;

  lienzoContexto.font = radio * 0.15 + "px arial";

  lienzoContexto.textBaseline = "middle";

  lienzoContexto.textAlign = "center";

  for (numero = 1; numero <= 12; numero++) {

    angulo = numero * Math.PI / 6;

    lienzoContexto.rotate(angulo);

    lienzoContexto.translate(0, -radio * 0.85);

    lienzoContexto.rotate(-angulo);

    lienzoContexto.fillText(numero.toString(), 0, 0);

    lienzoContexto.rotate(angulo);

    lienzoContexto.translate(0, radio * 0.85);

    lienzoContexto.rotate(-angulo);

  }

}

function dibujarManecilla(lienzoContexto, posicion, largo, ancho, color) {

  lienzoContexto.beginPath();

  lienzoContexto.strokeStyle = color;

  lienzoContexto.lineWidth = ancho;

  lienzoContexto.lineCap = 'round';

  lienzoContexto.moveTo(0, 0);

  lienzoContexto.rotate(posicion);

  lienzoContexto.lineTo(0, -largo);

  lienzoContexto.stroke();

  lienzoContexto.rotate(-posicion);

}

function dibujarHora(lienzoContexto, radio) {

  let tiempoActual = new Date();

  let horas = tiempoActual.getHours() % 12;

  let minutos = tiempoActual.getMinutes();

  let segundos = tiempoActual.getSeconds();

  let posicionSegundos = segundos * Math.PI / 30;

  dibujarManecilla(lienzoContexto, posicionSegundos, radio * 0.9, radio * 0.01, 'blue');

  let posicionMinuto = (minutos * Math.PI / 30) + (segundos * Math.PI / (30 * 60));

  dibujarManecilla(lienzoContexto, posicionMinuto, radio * 0.7, radio * 0.04, 'green');

  let posicionHora = (horas * Math.PI / 6) + (minutos * Math.PI / (6 * 60)) + (segundos * Math.PI / (360 * 60));

  dibujarManecilla(lienzoContexto, posicionHora, radio * 0.4, radio * 0.07, 'red');

}

function dibujarReloj() {

  dibujarCara(lienzoContexto, radio);

  dibujarNumeros(lienzoContexto, radio);

  dibujarHora(lienzoContexto, radio);

}

const lienzo = document.getElementById('lienzo');

const lienzoContexto = lienzo.getContext('2d');

let radio = lienzo.height / 2;

lienzoContexto.translate(radio, radio);

radio *= 0.8;

setInterval(dibujarReloj, 1000);