var collision = new (function() {
  this.collisionDetection = function collisionDetection() {
    for(var c=0; c<brick.brickColumnCount; c++) {
      for(var r=0; r<brick.brickRowCount; r++) {
        var b = brick.bricks[c][r];
        if(b.status == 1) {
          if(ball.x > b.x && ball.x < b.x+brick.brickWidth && ball.y > b.y && ball.y < b.y+brick.brickHeight) {
            ball.dy = -ball.dy;
            b.status = 0;
            game.score++;
            if(game.score == brick.brickRowCount*brick.brickColumnCount) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            }
          }
        }
      }
    }

  if(ball.x + ball.dx > canvas.myCanvas.width-ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {
    ball.dx = -ball.dx;
  }
  if(ball.y + ball.dy < ball.ballRadius) {
    ball.dy = -ball.dy;
  }
  else if(ball.y + ball.dy > canvas.myCanvas.height-ball.ballRadius) {
    if(ball.x > paddle.paddleX && ball.x < paddle.paddleX + paddle.paddleWidth) {
      ball.dy = -ball.dy;
    }
    else {
      game.lives--;
      if(game.lives <= 0) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        ball.x = canvas.myCanvas.width/2;
        ball.y = canvas.myCanvas.height-30;
        ball.dx = 3;
        ball.dy = -3;
        paddle.paddleX = (canvas.myCanvas.width-paddle.paddleWidth)/2;
      }
    }
  }
};
})();