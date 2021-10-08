function setup() {
    createCanvas(500, 500)

}
let circlecircle = {
    x: 50, 
    y: 50, 
    velox: 1, 
    veloy: 1, 
    color: "red", 
    update: function() {
        fill(this.color)
        circle(this.x, this.y, 75);
        this.x += this.velox;
        this.y += this.veloy; 
    } 
}


function draw() {
    circlecircle.update(); 
}