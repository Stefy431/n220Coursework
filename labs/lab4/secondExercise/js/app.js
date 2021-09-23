var rectxxyy = [];
function setup() {
    createCanvas(800,800);
    background("red")
}
function draw() {

    for (var i=0; i<rectxxyy.length; i++) {
        fill(rectxxyy[i][2])
        rect(rectxxyy[i][0], rectxxyy[i][1], 100, 100);

        rectxxyy[i][1] += 1; 
    }
}

function mousePressed() {
    rectxxyy.push([mouseX,mouseY, random(255)])
}

console.log(rectxxyy)