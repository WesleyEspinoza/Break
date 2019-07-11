var ball = new (function() {
  this.ballRadius = 10;
  this.x = canvas.myCanvas.width / 2;
  this.y = canvas.myCanvas.height - 30;
  this.dx = 3;
  this.dy = -3;

  this.drawBall = function drawBall() {
    canvas.ctx.beginPath();
    canvas.ctx.arc(this.x,  this.y, this.ballRadius, 0, Math.PI * 2);
    canvas.ctx.fillStyle = "#0095DD";
    canvas.ctx.fill();
  };
})();
