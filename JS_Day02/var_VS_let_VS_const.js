/*
var vs let vs const:
var vs let:
    var: variable name does not have to be unique
        var is global variable, even if we declear it within the block, we can still use it outside the block

    let: variable Name MUST be unique
            let can be local variables. if it's decleared within block we cannot access it outside block

const: final variable

*/

var a = 100;
var a = "Muhtar";
console.log(a);

let b = "Marufjon";
//let b = "Cybertek";
console.log(b);

console.log("============================================");
if(true){
    let i =100;
    
}

// console.log(i);  // var can never be a local variable 

for(let z = 0; z >=9; z++){

}

//console.log(z);

console.log("=======================================");
const gender = "Female";  // final variable like in java
   // gender = "Male";  // constant variables cannot be changed

console.log(gender);