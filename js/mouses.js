let colors = [];
let mouse = [];
let newX = 0;
let newY = 0;
let x = 0;
let y = 0;

$(document).ready(function () {
  let $mousePosition = $("#mousePosition");
  let $window = $(window)
  //滑鼠位置
  $window.mousemove((move) => {
    newX = move.pageX;
    newY = move.pageY;
    $mousePosition.html(newX + "," + newY);
  });
  setInterval(() => {
    mouse.unshift({
      x = newX,
      y = newY
    });
    mouse.forEach((a, i) => {
      $("#box" + i).css({
        left: a.newX + "px",
        top: a.newY + "px"
      });
    });
    mouse.length = $blocks.length;
  }, 100);



});