var collision = new (function() {
  this.collisionDetection = function collisionDetection() {
    for (var c = 0; c < brick.brickColumnCount; c++) {
      for (var r = 0; r < brick.brickRowCount; r++) {
        var b = brick.bricks[c][r];
        if (b.status == 1) {
          if (
            canvas.x > b.x &&
            canvas.x < b.x + brick.brickWidth &&
            canvas.y > b.y &&
            canvas.y < b.y + brick.brickHeight
          ) {
            ball.dy = -ball.dy;
            b.status = 0;
            game.score++;
          }
        }
      }
    }
  
    if (canvas.y + ball.dy < ball.ballRadius) {
      ball.dy = -ball.dy;
    } else if (canvas.y + ball.dy > canvas.myCanvas.height - ball.ballRadius) {
      if (canvas.x > paddle.paddleX && canvas.x < paddle.paddleX + paddle.paddleWidth) {
        ball.dy = -ball.dy;
      } else {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
      }
    }
  
    if (canvas.x + ball.dx > canvas.myCanvas.width - ball.ballRadius || canvas.x + ball.dx < ball.ballRadius) {
      ball.dx = -ball.dx;
    }
    if (canvas.y + ball.dy > canvas.myCanvas.height - ball.ballRadius || canvas.y + ball.dy < ball.ballRadius) {
      ball.dy = -ball.dy;
    }
  };
})();