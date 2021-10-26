/*Create a number guessing name, using an input and a button to gather a number.
The number to be guessed should be a hard-coded whole number between 1 and 20.
Tell the user if the number is too high, equal to, or too low than a number you have hard-coded in your application.
Remove the text in the input when the user clicks the button. */ 


let guessNumber = document.getElementById("guessNumber"); 
let txtUser = document.getElementById("txtUser"); 




function guessIt() {  

    let y = guessNumber.value;    // user number guess
    
    var x = Math.floor(Math.random() * 20 + 1);   //computer guess
    
    let txtUser = document.getElementById("txtUser");   //placing this here for now

    if(y == x) {    //is number is exact
  
        txtUser.innerHTML = "perfect "; 

    } else if( y < x) {  //if number is lower

        txtUser.innerHTML = "too low "; 
    } else {  //every thing else aka greater

        txtUser.innerHTML = "too high "; 
    }
    
    guessNumber.value = "";  //clear the value

    
}





