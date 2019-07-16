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


// brick.populateBricks(['#f54242', '#9042f5']); challange 3

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// const randomColors = [];

// for(let i=0; i < brick.brickColumnCount*brick.brickRowCount; i++){
//   randomColors.push(getRandomColor())
// }

// brick.populateBricks(randomColors) challange 4


brick.populateBricks(['#f54242', '#f56342', '#f59042', '#f5bc42', '#f5ef42', '#c5f542', '#42f54b', '#42f5b3', '#42f5ef', '#4293f5', '#424bf5', '#9042f5']);


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brick.drawBricks(ctx);
  paddle.drawPaddle(ctx, canvas);
  ball.drawBall(ctx);
  game.drawScore(ctx);
  game.drawLives(ctx, canvas);
  game.collisionDetection(brick, ball, paddle,  game, canvas)

  console.log(ball.x, ball.dx, canvas.width, ball.radius, ball.x, ball.dx, ball.radius)

  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
}

draw()
