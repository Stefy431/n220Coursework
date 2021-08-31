var abc = 1000;
var xyz = 500;

function setup() {
    createCanvas(abc, abc);
    background(128, 221, 242)
}

function draw() {
    fill(242, 236, 128);
    ellipse(xyz, xyz, 100, [100]);
    fill(242, 164, 128)
    strokeWeight(5);
    ellipse(500, 575, 80, [80]);
    ellipse(430, 540, 80, [80]);
    ellipse(430, 470, 80, [80]);
    ellipse(485, 420, 80, [80]);
    ellipse(550, 460, 80, [80]);
    ellipse(560, 520, 80, [80])
    fill(81, 156, 85);
    strokeWeight(2)
    
    rect(500, 610, 10, 250)

    line(500, 720, 550, 600)
}
