var brick = new (function() {
  this.brickRowCount = 3;
  this.brickColumnCount = 12;
  this.brickWidth = 75;
  this.brickHeight = 20;
  this.brickPadding = 10;
  this.brickOffsetTop = 30;
  this.brickOffsetLeft = 30;
  this.bricks = [];

  this.drawBricks = function drawBricks() {
    for (var c = 0; c < this.brickColumnCount; c++) {
      for (var r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status == 1) {
          var brickX =
            c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
          var brickY =
            r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          canvas.ctx.beginPath();
          canvas.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          canvas.ctx.fillStyle = "#0095DD";
          canvas.ctx.fill();
          canvas.ctx.closePath();
        }
      }
    }
  };

  this.populateBricks = function populateBricks() {
    for (var i = 0; i < brick.brickColumnCount; i++) {
      brick.bricks[i] = [];
      for (var r = 0; r < brick.brickRowCount; r++) {
        brick.bricks[i][r] = { x: 0, y: 0, status: 1 };
      }
    }
  };
  
})();
