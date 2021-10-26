let billamount = document.getElementById("billAmount"); 

function calculateTip() {

    let bill = billamount.value; 

    let tiptotal = (bill*(18/100)); 
    let tiptotal = tiptotal; 

    let totaleverything = bill + tiptotal

    
    
    console.log(totaleverything)

    console.log("Tip: " + tiptotal + "Total: " + totaleverything); 
}