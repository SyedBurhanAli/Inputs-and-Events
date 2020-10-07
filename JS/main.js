function dolime() {
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor = "lime";

  // var canvas = dd1.getContext("2d");
  // canvas.fillStyle = "magenta";
  // canvas.fillRect(10, 10, 40, 40);
}

function docolor() {
  var dd2 = document.getElementById("d1");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dd2.style.backgroundColor = color;
}
