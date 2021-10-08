let squarePet = document.getElementById("squarePet");  //get element id 

let pet = {
        name: "toady",
        energy: 5, 
        happiness: 5,
        age: 2,  
    }
/*var squarePet = document.createElement("div")  //tried making div here but it does not display
    squarePet.style.width ="100px"; 
    squarePet.style.height ="100px"; 
    squarePet.style.backgroundColor = "red" */

document.getElementById("squarePet").innerHTML =
"name: " + pet.name + " " + "happiness: " + pet.happiness + " " + "energy: " + pet.energy; //printing the pets info
    
      
function clickedHappiness() {
  // Increase pet happiness
  pet.happiness += 5; //increase by 5
  //updatepetinfoHtml();  //updating the html document
  document.getElementById("squarePet").innerHTML = "name: " + pet.name + " " + "happiness: " + pet.happiness + " " + "energy: " + pet.energy;   //updating pet info
}
      
function clickedEnergy() {
// increase pet energy 
  pet.energy += 5;  //increase by 5
  document.getElementById("squarePet").innerHTML = "name: " + pet.name + " " + "happiness: " + pet.happiness + " " + "energy: " + pet.energy;  //updating pet info
      
}


     

//document.getElementById("squarePet").innerHTML = "Pet Energy: " + pet.energy; 
//document.getElementById.innerHTML = "Pet Happiness: " + pet.happiness; 



      

