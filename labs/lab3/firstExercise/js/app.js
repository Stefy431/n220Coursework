let i = 0;

function setup() {
    createCanvas(900, 900)
}


function draw() {



for(let i=0; i<25; i++)   //has 25 circles, increments by one starting at 0
    //noFill()
    //circle(i *50, 450, 30)

    if (i % 3 ==0 && i % 5 ==0) {     //this has to go first because it has two requirements, i tried putting it third but wouldn't show up 
        fill('blue')
        rect(i*50, 450, 20, 20)
    } else if (i % 5 === 0) {   // there has to be 3 equal signs so that it 
        fill('green')
        rect(i*50, 450, 20, 20)
    } else if (i % 3 === 0) {  //if it is divisible by 3, fill in purple and make it a circle 
        fill('purple')
        circle(i*50, 450, 30)
    } else {
        noFill()
        circle(i*50, 450, 30)

    }

 
    
    /*if (i % 3 === 0) {
        fill('purple')
        circle(i*50, 450, 30) */
}
  


