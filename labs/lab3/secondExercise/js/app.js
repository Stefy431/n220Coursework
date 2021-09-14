function setup() {
    createCanvas(400, 400)
}

function draw() {

    for(i=0; i<=5; i++) {
        for(y=0; y<i; y++) {
            rect(y *30, i *30 , 25, 25)
        }   
    }

}