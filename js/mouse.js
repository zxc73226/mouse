$(document).ready(function () {
  $(window).mousemove(function (evt) {
    var x = evt.pageX;
    var y = evt.pageY;
    console.log(x + "," + y);
    $(".block").each((i, el) => {
      $(el).css("left", x + "px");
      $(el).css("top", y + "px");
    });

    for (var j = 1; j < 8; j++) {
      $("#box" + [j]).each((i, ey) => {
        setTimeout(function () {
          $(ey).css("left", x + "px");
          $(ey).css("top", y + "px");
        }, j * 150);
      });
    }

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    $(".block").css('color', 'rgba(' + r + ',' + g + ',' + b + ',)');

    document.querySelector("#mousePosition").innerHTML = x + "," + y;
  });
  console.log(JSON.parse(document.querySelector("#mousePosition")));
});