var xcoord = 0;
var ycoord = 250;


function setup() {
    createCanvas(800, 600)
    background('red')
}



function draw() {
    
    xcoord +=5;

    if (xcoord >= 800) {
        xcoord=0;
    }

    circle(xcoord, ycoord, 100)
    
    


       
    

}

