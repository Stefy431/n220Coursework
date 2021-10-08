function setup() {
    createCanvas(400, 400)
    background("#03fc5a")
}
    let square1 = {   //object
        x: 50,    //x value
        y: 50,    //y value
        color: "green",    //color
        update: function() {    
            fill(this.color)
            square(this.x, this.y, 100)
            this.x +=1;
            this.y +=1; //

        }
    }


function draw() {
    square1.update();     //update function
}