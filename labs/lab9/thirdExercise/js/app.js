let txtInput = document.getElementById("txtInput"); 
let resultsOf = document.getElementById("resultsOf"); 

function doThing() {
    let userinput = txtInput.value; 
    let myArray = userinput.split(","); 

    let checkfor = 1

    for(i=0; i<myArray.length; i++) {
        if(myArray[i] == checkfor) {
            resultsOf.innerHTML = "winner"; 
        } else {
            resultsOf.innerHTML = "Not a winner"; 
        }
    }
}