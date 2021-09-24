function setup() {
    createCanvas(1000,1000)  //canvas setup
}

function draw() {

    var colors = [ "red", "white", "blue"];  //array with different colors

    for(let i=0; i<colors.length; i++) {   //loop required
        fill(colors[i]);    //fill in with color
        circle( 150, 20 + 30*i, 25); //circle that goes vertical with different colors 
        
    }
}
