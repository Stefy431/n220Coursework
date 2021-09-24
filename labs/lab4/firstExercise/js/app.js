
function setup() {
    createCanvas(900,900)
}

function draw() {

    var colors = ["#a6a832", "#ffa3e0", "#6e6142"];  //ice cream colors

    for(let i=0; i<colors.length; i++) {   //for loop to be less than the amount of variables in the array
        fill(colors[i]);    //fill in the color of the array 
        rect(20 + 30*i, 150, 25, 25);    //times the i so it appears bigger on the screen 
        
    }
}
