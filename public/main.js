var canvasPos = canvas.getPosition(canvas.myCanvas);
canvas.myCanvas.addEventListener("mousemove", setMousePosition, false);
function setMousePosition(e) {
  paddle.paddleX = e.clientX - canvasPos.x - paddle.paddleWidth / 2;
  paddle.drawPaddle();
}

brick.populateBricks();

function draw() {
  canvas.ctx.clearRect(0, 0, canvas.myCanvas.width, canvas.myCanvas.height);
  brick.drawBricks();
  paddle.drawPaddle();
  ball.drawBall();
  collision.collisionDetection();
  game.drawScore();
  game.drawLives();

  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
}

draw()
