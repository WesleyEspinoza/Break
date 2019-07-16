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

  collisionDetection(brick, ball, paddle, game, canvas) {
    for(let c=0; c<brick.brickColumnCount; c++) {
      for(let r=0; r<brick.brickRowCount; r++) {
        let b = brick.bricks[c][r];
        if(b.status === 1) { // 1 == '1' true / 1 === '1' false 
  
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

    if(ball.x + ball.dx > canvas.width-ball.radius || ball.x + ball.dx < ball.radius) {
      ball.dx = -ball.dx;
    }
  
    if(ball.y + ball.dy < ball.radius) {
      ball.dy = -ball.dy;
    }
  
    else if(ball.y + ball.dy > canvas.height-ball.radius) {
      if(ball.x > paddle.paddleX && x < paddle.paddleX + paddle.paddleWidth) {
        ball.dy = -ball.dy;
      }
  
      else {
        lives--;
        if(!lives) {
          alert("GAME OVER");
          document.location.reload();
        }
  
        else {
          ball.x = canvas.width/2;
          ball.y = canvas.height-30;
          ball.dx = 3;
          ball.dy = -3;
          paddle.paddleX = (canvas.width-paddle.paddleWidth)/2;
        }
      }
  
    }

  }

}
