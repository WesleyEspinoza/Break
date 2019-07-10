var paddle = new (function() {
  this.paddleHeight = 10;
  this.paddleWidth = 75;
  this.paddleX = 0;
  this.drawPaddle = function drawPaddle() {
    canvas.ctx.beginPath();
    canvas.ctx.rect(
      this.paddleX,
      canvas.myCanvas.height - this.paddleHeight - 10,
      this.paddleWidth,
      this.paddleHeight
    );
    canvas.ctx.fillStyle = "#0095DD";
    canvas.ctx.fill();
    canvas.ctx.closePath();
  };
})();
