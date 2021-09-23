
function setup() {
    createCanvas(900,900)
}

function draw() {

    var colors = ["#a6a832", "#ffa3e0", "#6e6142"]; 

    for(let i=0; i<colors.length; i++) {
        fill(colors[i]);
        rect(20 + 30*i, 150, 25, 25);
        
    }
}
