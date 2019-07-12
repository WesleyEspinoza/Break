class Ball {
  constructor(x = 200, y = 300, radius = 10) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = -2;
    this.dy = -2;
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
