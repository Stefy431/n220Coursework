function setup() {
    createCanvas(400, 400);
    circle(250, 50, 40);
}
function draw() {
    circle(mouseX, mouseY, math.sinframeCount / 100*100);
}