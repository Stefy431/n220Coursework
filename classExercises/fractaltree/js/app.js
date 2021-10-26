/*function setup() {
    createCanvas(800, 800)

*/
//}
 
//var startx = 200
//var branchy = 650
//function draw() {


/*

    line(startx, 800, 200, branchy)
    line(startx, branchy, 100, 550)

    line(startx, branchy, 300, 550)

    for(let i = 0; i<2; i++) {
        line()
    } 
    
*/


/*let oos = [ 15, 22, 10, 5 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);
  
    translate(200,200);
  background(50);
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]);
  }
}

 

Hardmode

let oos = [ 15, 22, 10, 5 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);

}

function draw() {

  background(50);
  translate(200,200);
  
  if (mouseIsPressed) {
    oos.push(Math.random() * 25);
    
    if(Math.random() < .5 ) {
      ahs.push("#fcba03");
    } else {
      ahs.push("#ed1a80");
    }
  }
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]);
  } */


 /* 
  let meeples = [];
  let meeplesjob = []; 
  

  function addAge() {
    for(let i =0; i<20; i++) {
      meeples.push( {name: "Meeple #"+i, age: Math.floor(Math.random() * 50) })
    }
    meeples[i].age++;

    job = ["teacher", "doctor", "pilot"]; 

    if(meeples.age >= 18) {
      for(let i=0; i<=3; i++) {
        meeplesjob.push( { job: math.floor(math.random() * job[i]) })
    }

    





  }


}
}

*/





let txtInput = document.getElementById("txtInput"); 
let txtInput2 = document.getElementById("txtInput2"); 
let dvOutput = document.getElementById("dvOutput"); 

//let doubleword = []

/*function repeatWord() {

  let word = txtInput.value; 

  let doubleword = (word + word); 
  console.log(doubleword)


}
*/

function repeatWord() {

  let word = txtInput.value; 
  let numb = txtInput2.value; 

  let finalstring = word; 
  for(i=0; i<numb; i++) {
    finalstring = finalstring + word; 
  }

  console.log(finalstring)
}


    



