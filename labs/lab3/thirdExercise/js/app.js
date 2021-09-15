function setup() {
    createCanvas(400, 400)
}

function draw() {

    for(i=0; i<50; i++) {  //did 50 circles that keep incrementing in size
        circle(200, 200, i*5) //times it by 5 so that it is not close together. 
    }
    noFill()  //so the circles will show up, otherwise would look like one big circle 
}