

var operator = "";
var first = "";
var second = ""
var check = false

function appendToDisplay(num){
    if(check){
        document.querySelector('.panel p').innerHTML = "";
        check = false
    }
    if(document.querySelector('.panel p').innerHTML.length < 8){
        document.querySelector('.panel p').innerHTML += num;
        if(!operator){
            first = document.querySelector('.panel p').innerHTML;
        }
        else{
            second = document.querySelector('.panel p').innerHTML;
        }
    }
}

function clearDisplay(){
    document.querySelector('.panel p').innerHTML = "";
    operator = "";
    first = "";
    second = "";
    check = false;
}

function addOperator(opp){
    /*
    if (opp.localeCompare("+") == 0){
        document.querySelector("#addition").style.borderStyle = "solid";
    document.querySelector("#addition").style.borderColor = "red";
     }
     else if (opp.localeCompare("-") == 0){
        document.querySelector("#subtraction").style.borderStyle = "solid";
        document.querySelector("#subtraction").style.borderColor = "red";
     }
     else if (opp.localeCompare("/") == 0){
        document.querySelector("#division").style.borderStyle = "solid";
        document.querySelector("#division").style.borderColor = "red";
     }
     else if (opp.localeCompare("*") == 0){
        document.querySelector("#multiplication").style.borderStyle = "solid";
        document.querySelector("#multiplication").style.borderColor = "red";
     }
    */

    operator = opp;
    check = true

}
function calculate(){
 second = document.querySelector('.panel p').innerHTML;
 first = parseInt(first);
 second = parseInt(second);
 document.querySelector('.panel p').innerHTML = "";
 if (operator.localeCompare("+") == 0){
    document.querySelector('.panel p').innerHTML = 1.0*first + second;
 }
 else if (operator.localeCompare("-") == 0){
    document.querySelector('.panel p').innerHTML = 1.0*first - second;
 }
 else if (operator.localeCompare("/") == 0){
    console.log(parseInt(first)/ parseInt(second));
    document.querySelector('.panel p').innerHTML = parseInt(first)/ parseInt(second);
 }
 else if (operator.localeCompare("*") == 0){
    document.querySelector('.panel p').innerHTML = 1.0* first * second;
 }
 /*
 if(document.querySelector('.panel p').innerHTML.length > 8){
    var hi = parseInt(document.querySelector('.panel p').innerHTML)
    hi.toFixed(8)
    document.querySelector('.panel p').innerHTML = hi;
 }
 */
 first = document.querySelector('.panel p').innerHTML;
 second = ""
 operator = "";
}

function signFlip(){

}