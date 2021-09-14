function setup() {
    createCanvas(400, 400);
    
}

function mousePressed() {
    if (radius <= 100) {
        radius = radius + 5;
    }
}
function draw() {
    fill(0);
    circle(mouseX, mouseY, radius);
}