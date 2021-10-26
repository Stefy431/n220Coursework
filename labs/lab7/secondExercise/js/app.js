//let billamount = document.getElementById("billAmount"); //was not working up here

function calculateTip() {

    var bill = Number(document.getElementById("billAmount").value);   //getting value as a numerical one
    
    var tip = bill * .18;   //tip is bill * 18%
    var total = bill + tip;  //total amount is bill amount + the tip


    console.log("Tip: " + tip + "Total: " + total);    // logging the code onto the console
}