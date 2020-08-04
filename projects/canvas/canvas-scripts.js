function dibujarCara(lienzoContexto, radio) {

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

function dibujarReloj(lienzoContexto, radio) {

  dibujarCara(lienzoContexto, radio);

  dibujarNumeros(lienzoContexto, radio);

  dibujarHora(lienzoContexto, radio);

}



const lienzo = document.getElementById('lienzo');

const lienzoContexto = lienzo.getContext('2d');

let radio = lienzo.height / 2;

lienzoContexto.translate(radio, radio);

radio *= 0.8;

dibujarReloj(lienzoContexto, radio);



//  RECTANGULO
// lienzo1Contexto.fillStyle = 'red';

// lienzo1Contexto.fillRect(150, 0, 150, 100);

// LINEA
// lienzo1Contexto.moveTo(0, 0);

// lienzo1Contexto.lineTo(300, 100);

// lienzo1Contexto.stroke();

// CIRCULO

// lienzo1Contexto.beginPath();

// lienzo1Contexto.arc(150, 100, 50, 0, 2 * Math.PI);

// lienzo1Contexto.stroke();

// GRADIENTES

// const gradienteLineal = lienzo1Contexto.createLinearGradient(0, 0, 200, 0);

// gradienteLineal.addColorStop(0, 'red');

// gradienteLineal.addColorStop(1, 'blue');

// lienzo1Contexto.fillStyle = gradienteLineal;


// const gradienteRadial = lienzo1Contexto.createRadialGradient(75, 50, 5, 90, 60, 100);

// lienzo1Contexto.fillStyle = gradienteRadial;

// gradienteRadial.addColorStop(0, 'red');

// gradienteRadial.addColorStop(1, 'blue');

// lienzo1Contexto.fillRect(20, 20, 150, 80);

// TEXTO

// lienzo1Contexto.font = "30px Arial";

// lienzo1Contexto.fillStyle = 'blue';

// lienzo1Contexto.textAling = "center";

// lienzo1Contexto.fillText("Hello World", 50, 100);

//lienzo1Contexto.strokeText("Hello World", 50, 100);

// IMAGE

// const img = document.getElementById("imagen");

// lienzo1Contexto.drawImage(img, 10, 10);