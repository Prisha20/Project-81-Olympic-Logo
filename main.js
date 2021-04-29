canvas = document.getElementById("canvasproject");

ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "pink"
ctx.lineWidth = 5;
ctx.rect(100, 100, 800, 600);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue"
ctx.lineWidth = 8;
ctx.arc(330, 350, 80, 750, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange"
ctx.lineWidth = 8;
ctx.arc(420, 440, 80, 750, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black"
ctx.lineWidth = 8;
ctx.arc(510, 350, 80, 750, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth = 8;
ctx.arc(600, 440, 80, 750, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red"
ctx.lineWidth = 8;
ctx.arc(690, 350, 80, 750, 0, 2 * Math.PI);
ctx.stroke();