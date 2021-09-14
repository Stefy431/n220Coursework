let i = 0;

function setup() {
    createCanvas(900, 900)
}


function draw() {



for(let i=0; i<25; i++)

    

    circle(i *50, 450, 30)

    if (i % 3 === 0) {
        fill('purple')
    } else if (i % 5 === 0) {
        fill('green')
    } else if (i % 3 ==0 && i % 5 ==0) {
        fill('blue')
    }

    
}
  


