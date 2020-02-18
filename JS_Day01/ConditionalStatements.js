/*
if statement: 100% same with java

ternary: 100% same with java

switch statement: 85% same with java

*/

if(9 > 10){
    console.log("Hello");
} else if( 11> 12){
    console.log("NiHao");
}else{
    console.log("Hola");
}

var  str = (9 > 10) ? "Hello" : ( 11> 12) ? "NiHao" : "Hola";

console.log(str);


// boolean, decimals, long java deos not accept in switch statement

var bool = 5.5;
switch(bool){   // accepts any data type
   case true:
        console.log("true");
        break;
    case 5.5: 
        console.log("False");
        break;
    default:
        console.log("Maybe");
}