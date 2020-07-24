// Ubicar las piezas de una forma aleatoria al cargar la pagina.

function obtenerValorRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function obtenerArregloDeRandoms(length, min, max) {
  let randoms = [];
  while (randoms.length < length) {
      let candidate = obtenerValorRandom(min, max);
      if (!randoms.includes(candidate)) {
          randoms.push(candidate);
      }
  }
  return randoms;
}

function asignarPiezas() {
  let rutas = [
    "fila-1-col-1.jpg", 
    "fila-1-col-2.jpg", 
    "fila-1-col-3.jpg", 
    "fila-1-col-4.jpg", 
    "fila-2-col-1.jpg", 
    "fila-2-col-2.jpg", 
    "fila-2-col-3.jpg", 
    "fila-2-col-4.jpg", 
    "fila-3-col-1.jpg", 
    "fila-3-col-2.jpg", 
    "fila-3-col-3.jpg", 
    "fila-3-col-4.jpg"
  ];

  let orden = obtenerArregloDeRandoms(12, 0, 11);

  let espacios = document.getElementsByClassName('pieza');

  for (let i = 1; i <= espacios.length; i++) {
    espacios[i - 1].src = rutas[orden[i - 1]];
  }
}

asignarPiezas();

// Activar particulas

particlesJS(
    {
        "particles": {
          "number": {
            "value": 400,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
  );