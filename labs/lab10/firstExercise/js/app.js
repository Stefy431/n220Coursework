/*Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. 
Each element should change to a different color: one red, one green, and one blue. 
Use a data attribute on the elements to store the color to be changed to.*/ 


/*let squareone = document.createElement("div"); 
let squaretwo = document.createElement("div"); 
let squarethree = document.createElement("div"); 

squareone.style.width = "50px"; 
squareone.style.color = "black"; 

document.body.appendChild(squareone); */


/*var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

div1.style.height = "200px";
div2.style.height = "200px"; 
div3.style.height = "200px";


div1.style.width = "200px";
div2.style.width = "200px"; 
div3.style.width = "200px";

div1.style.backgroundColor = "grey";
div2.style.backgroundColor = "grey";
div3.style.backgroundColor = "grey"; 

document.body.appendChild(div1); 
document.body.appendChild(div2);
document.body.appendChild(div3); */

function colorPicker(hello) {
    var elemnt = document.getElementById(hello.id); 
    elemnt.style.backgroundColor = elemnt.dataset.color;
}





