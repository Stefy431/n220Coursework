

function revealAnswer(clicked) {
    revealedquestion = document.getElementById("revealedquestion")
   
    if(clicked == "nothing") {
        revealedquestion.innerHTML = "Correct"; 
    } else {
        revealedquestion.innerHTML = "incorrect"; 
    }
}