/*
java:
    Access-modifier  specifier  return-type  methodName(Parameter){
        
    }

javascript: 
    function functionName(parameter){

    }

*/

function addTwoNum(num1, num2){
    console.log(num1+num2);
}

addTwoNum(10, 20);

function reverseSTR(str){
   if(typeof str == "string") {
        var result ="";
        for(var i = str.length -1; i >= 0; i--){
            result = result.concat(""+str.charAt(i));
        }
        console.log(result);

    } else{
            console.log("No string is given");
    }
}

reverseSTR(123);


// typeof: returns the data type name
var num1 = "Cybertek";
console.log(typeof num1);

var bool2 = true;
console.log(typeof bool2);  // b

console.log("=====================================");

function MultiplyTwoNum(num1, num2){
    var result = num1*num2;
    return result;
}

var total = MultiplyTwoNum(10,20);

console.log(total);




