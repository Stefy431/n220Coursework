function setup() {
    createCanvas(400, 400)
}

function draw() {

    for(i=0; i<=5; i++) { // makes 5 squares, increments by one until it reaches 5
        for(y=0; y<i; y++) {  // when y is less than i, until it is inaccurate it will increment by one, otherwise the whole thing would be a square  
            rect(y *30, i *30 , 25, 25)   //times 30 is so it is bigger than 1
            fill('red')
        }   
    }

}