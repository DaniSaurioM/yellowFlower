var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(200, 250);
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.stroke();

// Dibuja los pétalos de la flor con un borde dentro
ctx.fillStyle = "yellow";
var petalCount = 8;
var petalLength = 80;
var petalWidth = 40;
ctx.lineWidth = 1;
ctx.strokeStyle = "orange"; 

function drawPetal(index) {
    if (index < petalCount) {
        var angle = (Math.PI * 2) / petalCount * index;

        // Calcula las coordenadas del punto de inicio del pétalo
        var startX = 200;
        var startY = 200;

        ctx.save();
        ctx.translate(startX, startY);
        ctx.rotate(angle - Math.PI / 2); // Ajusta el ángulo para que los pétalos apunten hacia arriba

 
        // Dibuja el interior del pétalo
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.ellipse(0, -petalLength / 2, petalWidth / 2, petalLength / 2, 0, 0, Math.PI * 2);
        ctx.fill();
         // Dibuja el borde del pétalo
         ctx.stroke();
        ctx.restore();

        // Llama a la función para dibujar el siguiente pétalo con un retraso
        setTimeout(function() {
            drawPetal(index + 1);
        }, 500); // 500 milisegundos de retraso entre pétalos
    } else {
        // Una vez que todos los pétalos se han dibujado, dibuja el centro de la flor
        drawCenter();
    }
}

function drawCenter() {
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.arc(200, 200, 20, 0, Math.PI * 2);
    ctx.fill();
}

// Inicia el dibujo de los pétalos con un pequeño retraso
setTimeout(function() {
    drawPetal(0);
}, 1000); // 1000 milisegundos (1 segundo) de retraso para iniciar

const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');

// Actualiza el contenido del elemento <h1> con el nombre
const greetingElement = document.getElementById('greeting');
if (nombre) {
    greetingElement.textContent = "¡Te doy tu Flor Amarilla " + nombre + ", te quiero!";  // Cambia el mensaje según tus necesidades
    
}