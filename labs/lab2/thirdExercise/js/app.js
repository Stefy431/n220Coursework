var diam = 1; 

function setup() {
    createCanvas(900, 900);
    background(66, 135, 245)
}

function draw() {

    diam += 1;

    if(diam >= 200) {
        diam = 1; 
    }

    circle(450, 450, diam)

    console.log(diam);
}