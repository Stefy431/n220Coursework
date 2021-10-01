function setup() {

    var thisdiv = document.createElement("div");  //creating the div

    thisdiv.style.width = "100px"; //width
    thisdiv.style.height = "100px" //height

    thisdiv.style.backgroundColor = "red"; 

    thisdiv.onmouseover = "thisdiv.style.backgroundColor = 'black'"; 
    thisdiv.onmouseout = "thisdiv.style.backgroundColor = 'blue'"; 

    console.log(thisdiv); 
}