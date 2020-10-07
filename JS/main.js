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

function dosquare() {
  //Get the canvas element
  var dd3 = document.getElementById("d1"); //d1 is reference to canvas element

  //Get the slider element, then its value.
  var sizeinput = document.getElementById("sldr"); //sldr is ID for slider element
  var size = sizeinput.value; //value of the slider element and store it in the variable size.

  //Canvas Cotext
  var ctx = dd3.getContext("2d");
  ctx.clearRect(10, 10, dd3.width, dd3.height); //Important to put it above the fillStle and fillRect, the code won't work otherwise.
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, size, size);
}

function dosquarre() {
  //Get the slider element, then its value.
  var sliderinput2 = document.getElementById("sldrr");
  var len = sliderinput2.value;

  //Get the canvas element and context
  var canvas = document.getElementById("d1");
  var context = canvas.getContext("2d");

  /* Use the context.fillStyle and context.fillRect methods. Try making the position of the second square dependent on the first, such as specifying that the x-coordinate be the length plus a number, or the length times a factor. (Note that if you use the ‘+’ operator with variables JavaScript has decided are strings (words or text), you need to use parseInt to convert the string to an integer.) */
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "yellow";
  context.fillRect(10, 10, len, len);
  context.fillRect(parseInt(len) + 20, 10, len, len);
  context.fillRect(len * 3, 10, len, len);
}
