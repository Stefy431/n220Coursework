xcoord = 0
ycoord = 0

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(0)
    xcoord = 400 - mouseX
    ycoord = 400 - mouseY 

    circle(xcoord, ycoord, 50)

    fill('orange')


    //xcoord = -mousex + 400
    //ycoord = -mousey + 400
}