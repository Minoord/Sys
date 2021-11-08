const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


//zijkant dak
context.beginPath();
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.fillStyle = "rgb(255, 0, 255)"; 
context.moveTo(300,100);
context.lineTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.fill();
context.closePath();
context.stroke();

//voorkant dak
context.beginPath();
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.fillStyle = "#009999"; 
context.moveTo(700,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.fill();
context.closePath();
context.stroke();

//voorkant muur
context.beginPath();
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.fillStyle = "#009999";
context.moveTo(800,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.fill();
context.closePath();
context.stroke();

//voorkant muur
context.beginPath();
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.fillStyle = "#009999";
context.moveTo(600,400);
context.lineTo(600,600);
context.lineTo(200,500);
context.lineTo(200,300);
context.fill();
context.closePath();
context.stroke();