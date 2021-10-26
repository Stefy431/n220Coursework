/*Create a number guessing name, using an input and a button to gather a number.
The number to be guessed should be a hard-coded whole number between 1 and 20.
Tell the user if the number is too high, equal to, or too low than a number you have hard-coded in your application.
Remove the text in the input when the user clicks the button. */ 


let guessNumber = document.getElementById("guessNumber"); 
let txtUser = document.getElementById("txtUser"); 




function guessIt() {  

    let y = guessNumber.value;
    
    var x = Math.floor(Math.random() * 20 + 1);
    
    let txtUser = document.getElementById("txtUser"); 

    if(y == x) {

        txtUser.innerHTML = "perfect "; 

    } else if( y < x) {

        txtUser.innerHTML = "too low "; 
    } else {

        txtUser.innerHTML = "too high "; 
    }
    
    y = ""; 

    
}





