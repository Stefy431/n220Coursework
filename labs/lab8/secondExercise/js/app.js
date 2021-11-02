let givenResults = document.getElementById("givenResults");
let numb = "";

function randomResults() {
makeNumber(); 
givenResults.innerHTML = numb; 

}

function makeNumber() {
    numb = Math.floor(Math.random()*10); 
    return numb; 
}