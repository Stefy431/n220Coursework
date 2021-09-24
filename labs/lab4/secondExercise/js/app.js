var nothing = [];
function setup() {
    createCanvas(800,800);
    background("red")
}
function draw() {

    for (var i=0; i<nothing.length; i++) {
    
        rect(nothing[i][0], nothing[i][1], 20, 20);   //start with empty array, which connects to the mousePressed function

        nothing[i][1] += 5;   //frame rate is 5? has a weird trail that i have to fix
    }
}

function mousePressed() {
    nothing.push([mouseX,mouseY])   //starts with empty array but everytime it pushes the mouse it adds to the array, 
}

console.log(nothing)  //to check the console, should start with empty array