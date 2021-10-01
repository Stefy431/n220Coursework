function setup() {
    
  for(var i=0; i<=100; i++){

    var manydiv = document.createElement("div") // square div

    manydiv.style.width = "20px";  //width 
    manydiv.style.height = "20px";  //height

    var first = Math.floor(Math.random() * 100);  //randomizing the variables for the different colors
    var second = Math.floor(Math.random() * 100);
    var third = Math.floor(Math.random() * 100);

    

    manydiv.style.float = "left" //float left

    manydiv.style.background = "rgb(" + first + "," + second + "," + third + ")"; //put in the different colors that are randomized

    document.body.appendChild(manydiv); //append the child aka add everything to screen. 

    
  }


}   