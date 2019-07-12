class Paddle {
  constructor(paddleHeight = 10, paddleWidth = 75, paddleX = 0) {
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.paddleX = paddleX;
  }
  drawPaddle(ctx, canvas) {
    ctx.beginPath();
    ctx.rect(
      this.paddleX,
      canvas.height - this.paddleHeight - 10,
      this.paddleWidth,
      this.paddleHeight
    );
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };
}