var txtInput = document.getElementById("txtInput")
var compInput = document.getElementById("compInput")

function calculateAS() {

    var inputit = txtInput.value; 
    let  myArray = inputit.split(","); 

    let sum = 0; 
    let avg = 0

    for(let i=0; i<myArray.length; i++) {
        sum += Number(myArray[i]); 
        avg = sum/myArray.length; 

    }

    

    console.log(avg)

    compInput.innerHTML = "Sum: " + sum + "" + "Average: " + avg; 

    txtInput.value = ""; 

    
}