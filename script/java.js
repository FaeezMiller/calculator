 //This function displays values
let output = document.getElementById("display-box");
let allowComa = true ;

function display(anyVal) {
  output.value = output.value + anyVal;
}
 // This function evaluates(eval) the expression and return result
  function myoperations(anyVal){
    output.value = output.value + anyVal;
    allowComa = true;
  }
  
  //This function allows the "." to not return
  function mydot(anyVal){
    if (allowComa===true){
      output.value = output.value + anyVal;
      allowComa = false;
    }
  }
  
  // This function clear all the values
  function clearScreen() {
    output.value = "";
    output.value = output.value + anyVal;
    allowComa = true;
  }


  function calculate() {
  try{
    output.value = eval(output.value)
  }
  catch(err) {
    output.value = "wrong"
  }
}








  
  


