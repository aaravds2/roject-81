canvas = document.getElementById("olympic_symbol");

ctx = canvas.getContext("2d");

var colors = ["Blue", "Yellow", "Black", "Green", "Red"];

color = colors[0];

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke;
canvas.addEventListener("mouseclick", mouse_click);
function mouse_click(e) 
{

    console.log(color);
    mouse_x = e.clientX - client.offsetLeft;
    mouse_y = e.clientY - client.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y)

}
function circle(mouse_x, mouse_y)
{

    color = document.getElementById(colors).value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.arc(mouse_x, mouse_y, 60 ,0 , 2*Math.PI); 
    ctx.stroke;

}
var a =  