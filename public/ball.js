var ball = new (function() { 
  this.ballRadius = 10;
  this.dx = 3;
  this.dy = -3;

  this.drawBall = function drawBall() {
    canvas.ctx.beginPath();
    canvas.ctx.arc(canvas.x, canvas.y, this.ballRadius, 0, Math.PI * 2);
    canvas.ctx.fillStyle = "#0095DD";
    canvas.ctx.fill();
  };
})();