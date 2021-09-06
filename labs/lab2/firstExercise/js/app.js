

function setup() {
    createCanvas(400, 300)
}

function draw() {
    circle(mouseX, mouseY, 20)

    if(mouseX < 200) {
        fill('red')
    } else {
        fill('blue')
    }
}