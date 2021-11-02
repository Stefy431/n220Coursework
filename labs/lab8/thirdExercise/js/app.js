
let txtUserInput = document.getElementById("txtUserInput"); 
let result = document.getElementById("result")

function replaceHash() {
    let stringg = txtUserInput.value;  //the value of the user input
    let stringgafter = stringg.replace(/#/g,"");  //replacing the string with nothing aka clean up

    result.innerText = stringgafter; //showing on  page the result

}