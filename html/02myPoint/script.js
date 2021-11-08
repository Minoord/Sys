const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(500,500,30,"yellow");

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    point.y += 1;
    point.draw();
}

