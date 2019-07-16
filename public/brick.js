class Brick {
  constructor(brickRowCount = 3, brickColumnCount = 12, brickWidth = 75, brickHeight = 20, brickPadding = 10,brickOffsetTop = 30,brickOffsetLeft = 30 ) {
    this.brickRowCount = brickRowCount;
    this.brickColumnCount = brickColumnCount;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.brickPadding = brickPadding;
    this.brickOffsetTop = brickOffsetTop;
    this.brickOffsetLeft = brickOffsetLeft;
    this.bricks = [];
  }
   drawBricks(ctx) {
    const colors = ['#f54242', '#f56342', '#f59042', '#f5bc42', '#f5ef42', '#c5f542', '#42f54b', '#42f5b3', '#42f5ef', '#4293f5', '#424bf5', '#9042f5'];
    for (var c = 0; c < this.brickColumnCount; c++) {
      for (var r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status == 1) {
          var brickX =
            c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
          var brickY =
            r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          // ctx.fillStyle = "#0095DD"; Original
          // ctx.fillStyle = colors[r]; Challenge 1
          // ctx.fillStyle = colors[c]; // Challange 2
          ctx.fillStyle = this.bricks[c][r].color;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  };

  populateBricks(colors) {
    const max = colors.length - 1;
    let counter = 0;

    for (var i = 0; i < this.brickColumnCount; i++) {
      this.bricks[i] = [];
      for (var r = 0; r < this.brickRowCount; r++) {
        if (counter > max) {
          counter = 0
        };
        this.bricks[i][r] = { x: 0, y: 0, status: 1, color: colors[counter] };
        counter ++;
      }
    }
  };

}

