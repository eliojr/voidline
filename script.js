const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const statistics = document.getElementById('statistics');
const ctxs = statistics.getContext('2d');

function showTime() {
  document.getElementById('currentTime').innerHTML = "Created by Elio <br>"
	document.getElementById('currentTime').innerHTML += new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function teste(){
  ctxs.textAlign = 'center';
  ctxs.textBaseline = 'middle';
  ctxs.font = 'bold 64px Poppins'; // Define a fonte e o tamanho
  ctxs.fillStyle = 'blue';  // Define a cor de preenchimento (para texto sólido)
  ctxs.strokeStyle = 'red'; // Define a cor do contorno (para texto com borda)
  ctxs.fillText("TIME", 220, 40); // (texto, posição X, posição Y)
  ctxs.fillText("00:00", 220, 110); // (texto, posição X, posição Y)
  
  ctxs.fillText("SCORE", 220, 240); // (texto, posição X, posição Y)
  ctxs.fillText("000000", 220, 310); // (texto, posição X, posição Y)
  
  ctxs.fillText("LINES", 220, 440); // (texto, posição X, posição Y)
  ctxs.fillText("0", 200, 510); // (texto, posição X, posição Y)
  
  ctxs.fillText("LEVEL (0-10)", 220, 640); // (texto, posição X, posição Y)
  ctxs.fillText("0", 220, 720); // (texto, posição X, posição Y)
  
  ctxs.fillText("NEXT", 220, 900); // (texto, posição X, posição Y)
}

teste();