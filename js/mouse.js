var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple"];
let randColor = (a, r, g, b) => {
  if (typeof a != "number") a = 0.7;
  if (typeof r != "number") r = ~~(Math.random() * 255);
  if (typeof g != "number") g = ~~(Math.random() * 255);
  if (typeof b != "number") b = ~~(Math.random() * 255);
  return `rgba(${r},${g},${b},${a})`;
  //let color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  //console.log(color);
  return color;
}

let xyPool = [];
let colorPool = [];
let nowX = 0;
let nowY = 0;
$(document).ready(function () {
  let $blocks = $('.block');
  let $window = $(window);
  let $mousePosition = $("#mousePosition");

  //每0.5秒更換一次顏色
  setInterval(() => {
    colorPool.unshift(randColor());
    colorPool.forEach((color, i) => {
      $("#box" + i).css("color", color);
    })
    colorPool.length = $blocks.length;
  }, 500);

  //每0.033秒取樣一次
  setInterval(() => {
    xyPool.unshift({
      x: nowX,
      y: nowY
    });
    //寫入每個位置
    xyPool.forEach((pos, i) => {
      $("#box" + i).css({
        left: pos.x + "px",
        top: pos.y + "px"
      })
    })
    xyPool.length = $blocks.length;
  }, 33)

  //即時監控滑鼠位置
  $window.mousemove(function (evt) {
    nowX = evt.pageX + 15;
    nowY = evt.pageY + 15;
    $mousePosition.html(nowX + "," + nowY);
  });

  //初始化
  $blocks.each(() => {
    xyPool.push({
      X: 0,
      y: 0
    });
    colorPool.push(randColor());
  });

});
