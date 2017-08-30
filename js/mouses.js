let colors = [];
let mouse = [];
let newX = 0;
let newY = 0;
let x = 0;
let y = 0;

let randomColor = (r, g, b, a) => {
  if (typeof a != "number") a = 0.7;
  if (typeof r != "number") r = ~~(Math.random() * 255);
  if (typeof g != "number") g = ~~(Math.random() * 255);
  if (typeof b != "number") b = ~~(Math.random() * 255);
  return `rgba(${r},${g},${b},${a})`;
  return color;
}

$(document).ready(function () {
  let $mousePosition = $("#mousePosition");
  let $window = $(window);
  let $blocks = $(".block");

  //每.5秒新增一個顏色進入陣列
  setInterval(() => {
    colors.unshift(randomColor()); //推送顏色到陣列首的位置
    colors.forEach((color, i) => {
      $("#box" + i).css("color", color);
    })
    colors.length = $blocks.length;
    //將顏色陣列長度 = block物件的數量(多餘的移除)
  }, 500);

  //滑鼠位置
  $window.mousemove((move) => {
    newX = move.pageX + 15;
    newY = move.pageY + 15;
    $mousePosition.html(newX + "," + newY);
  });
  //每.033秒寫入位置進入陣列內
  setInterval(() => {
    mouse.unshift({ //推送鼠標位置到陣列首的位置
      x: newX,
      y: newY
    });
    //將陣列的每個位置都寫入物件裡面
    mouse.forEach((a, i) => {
      $("#box" + i).css({
        left: a.x + "px",
        top: a.y + "px"
      });
    });
    mouse.length = $blocks.length;
    //將滑鼠座標陣列長度 = block物件的數量(多餘的移除)
  }, 33);

  //初始化
  $blocks.each(() => {
    mouse.push({
      X: 0,
      y: 0
    });
    colors.push(randomColor());
  });

  //顯示時間
  function current() {
    var d = new Date(), str = '';
    str += d.getFullYear() + '年'; //獲取當前年份 
    str += d.getMonth() + 1 + '月'; //獲取當前月份（0——11） 
    str += d.getDate() + '日';
    str += d.getHours() + '時';
    str += d.getMinutes() + '分';
    str += d.getSeconds() + '秒';
    return str;
  }
  setInterval(function () { $("#nowTime").html(current) }, 1000);

});