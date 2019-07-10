var game = new (function(){
  this.score = 0
  this.gameSpeed = 10

  this.drawScore = function drawScore() {
    canvas.ctx.font = "16px Arial";
    canvas.ctx.fillStyle = "#0095DD";
    canvas.ctx.fillText("Score: "+this.score, 8, 20);
  };

})();