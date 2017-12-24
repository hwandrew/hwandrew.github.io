/*
  Deals with background display canvas
*/

var canvas, ctx;

function setCanvasSize() {
  canvas = document.getElementById('background');
  ctx = canvas.getContext('2d');

  updateFrame();
}

function updateFrame() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.requestAnimationFrame(updateFrame);

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = setCanvasSize;
