function setup() {
    createCanvas(400, 400)
}

function draw() {

    for(i=0; i<50; i++) {
        circle(200, 200, i*5)
    }
    noFill()
}