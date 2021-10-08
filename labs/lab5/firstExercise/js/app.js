var wid = 100
var heig = 100

function setup() {

    var boxxx = document.createElement("div");

    boxxx.style.width = wid + "px"; 
    boxxx.style.height = heig + "px"; 
    boxxx.style.background = "#34eb86"
    boxxx.onclick = function() {boxIncrease()};

   /*function boxIncrease() } {
       //boxxx.width.onclick = wid += 10;
       //boxxx.height.onlick = heig + .1
   }
   */
 

    document.body.appendChild(boxxx); 
    console.log(boxxx)

}