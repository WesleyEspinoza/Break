var canvas = new (function() {

  this.myCanvas = document.getElementById("myCanvas");
  this.ctx = myCanvas.getContext("2d");
  this.x = myCanvas.width / 2;
  this.y = myCanvas.height - 30;
  this.getPosition = function getPosition(el) {
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
  };
})();