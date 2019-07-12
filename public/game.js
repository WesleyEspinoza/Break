class Game {
  constructor(score = 0, lives = 3) {
    this.score = 0;
    this.lives = 3;
  }

  drawScore(ctx) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + this.score, 8, 20);
  };

  drawLives(ctx, canvas) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
  };

}
