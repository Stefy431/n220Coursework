var diam = 1; 

function setup() {
    createCanvas(900, 900);
    background(66, 135, 245) //background 
}

function draw() {

    diam += 1;

    if(diam >= 200) {    //when diam reaches 200, goes back to one; 
        diam = 1; 
    }

    circle(450, 450, diam)   //diam is the global variable

    console.log(diam);  //just checking the number of diam
}