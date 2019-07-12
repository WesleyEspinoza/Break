const paddle = new Paddle()
const brick = new Brick()
const ball = new Ball()
const game = new Game()
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
    yPosition += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}

var canvasPos = getPosition(canvas);
canvas.addEventListener("mousemove", setMousePosition, false);



function setMousePosition(e) {
  paddle.paddleX = e.clientX - canvasPos.x - paddle.paddleWidth / 2;
  paddle.drawPaddle(ctx, canvas);
}



brick.populateBricks();

function collisionDetection() {
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
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brick.drawBricks(ctx);
  paddle.drawPaddle(ctx, canvas);
  ball.drawBall(ctx);
  collisionDetection();
  game.drawScore(ctx);
  game.drawLives(ctx, canvas);

  console.log(ball.x, ball.dx, canvas.width, ball.radius, ball.x, ball.dx, ball.radius)

  if(ball.x + ball.dx > canvas.width-ball.radius || ball.x + ball.dx < ball.radius) {
    console.log('???????')
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

  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
}

draw()
