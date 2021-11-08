const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let numberOfPoints = 4;

let A,B,C,D,l;
let background = new GraphBackGround();
A = new Point(200, 200, 20, "red", true);
B = new Point(300,200,20, "blue", true);
C = new Point(10,10,15,"white", false);
D = new Point(30,10,15,"white", false);

l = new LinearFunction(1,10);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    A.draw();
    B.draw();

    l.intercept = A.y - l.slope * A.x;
    l.slope = (A.y - B.y) / (A.x - B.x);
    C.x = 0;
    C.y = l.y(0);
    D.x = width;
    D.y = l.y(width);

    context.beginPath();
    context.moveTo(C.x, C.y);
    context.lineTo(D.x , D.y);
    context.closePath();
    context.stroke();

    C.draw();
    D.draw();
}