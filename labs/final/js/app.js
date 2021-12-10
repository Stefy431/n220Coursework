//start of getting all the inputs from the html 
var userguess = document.getElementById("colorinput"); 
var output = document.getElementById("output"); 
var something = document.getElementById("someThing"); 
var square = document.getElementById("square"); 
var results = document.getElementById("results")

//colors available only in lower case
var colors = ["green", "red", "yellow", "pink", "purple", "blue", "black", "brown", "orange", "grey", "Red", "Blue", "Yellow", "Purple"];
var coolguesses = []; 
var numbofwintries = "";  //number of wins that the user has
var wrongguess = "";  //number of losses that the user has. 

guess = '' //guess made in he function check first color that will then go to another function
var clearout = '' //function to set off the timer. 


function checkFirstColor() {
    i = Math.floor(Math.random() * colors.length)  //random event

    var compguess = colors[i];  //actual random event 
    var userguessvs = userguess.value;   //get the value of the input 
    guess = compguess;   //set this as the value to transfer elsewhere

   // for(x=0; x<colors.length; x++) {
        if(compguess == userguessvs) {
            output.innerHTML = "You Win";
            numbofwintries = numbofwintries +1; 
    
            //results.innerHTML = "Number of wins: " + numbofwintries + "" + "Number of losses: " + wrongguess; 
            
    
    
            timeThing()
             
        }
        /*else if (userguessvs != colors[x]) {
            coolguesses.push(userguessvs); 
            console.log(coolguesses); 
            output.innerHTML = "cool guesses so far that are not on my color list:" + coolguesses[coolguesses.length]
        } */
         else if (userguessvs == null) {  //when the user doesn't put anything
            output.innerHTML = "please enter a color!" 
            timeThing()
        
        }
        else {
            output.innerHTML = "Not Quite! ";  //when its not right
            something.innerHTML = "Click the square to reveal the answer."; 
            wrongguess = wrongguess +1; 
            userguessvs = ""; 
            //console.log(results.innerHTML = "Number of wins: " + numbofwintries + "" + "Number of losses: " + wrongguess)
            console.log(wrongguess); 
            timeThing()
        
        }
        
    //}
    
}

function revealedColor() {
    square.style.backgroundColor = guess;
    console.log(guess)
    timeThing()
}



function timeThing() {
    clearout = setTimeout(clearGme, 3000);
  }

function clearGme() {
   square.style.backgroundColor = "#000"
   something.innerHTML = "Play again :)"

}




