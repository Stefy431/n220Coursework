let txtNumber = document.getElementById("txtNumber");
let results = document.getElementById("results"); 
let result = ""; 

function divisibleBy() { //updating the inner html based on results of the other function
    divisibleBySeven() //calling the other function
    if (result==true) {
        results.innerHTML = "true" //if it is divisible by 7
    } else {
        results.innerHTML = "false" //if its not divisible by 7
    }

    console.log(results)

    

}

function divisibleBySeven() {
    let numb = txtNumber.value;  //getting user input
 
    if(numb%7 ==0) {  //if its divisible
        result = true;  
    } else { //if its not
        result = false; 
    }

    return result;  //returning global variable 
}