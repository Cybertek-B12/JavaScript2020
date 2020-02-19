/*

WarmUp:
	1. Write a function for the palindrome test. 
        if the string is plaindrome ==> return true
        otherwise ==> return false
	        
	2. write a function  that can remove the duplicated values from string of text

*/


function plainDromeTest(str){
    var result = "";
    if(typeof str == "string"){
    
        for(var i = str.length -1 ; i >= 0; i-- ){
            result = result.concat(str.charAt(i));
        }
        
        if(result == str){
            return true;
        }
    }

    return false;
}

    console.log( plainDromeTest("anastas mum satsana") );
    console.log( plainDromeTest("Cybertek") );
    console.log(plainDromeTest(123));


console.log("===============================================");
// "AAABBBCCC" ==> "ABC"

function RemoveDuplicates(str){
    var nonDuplicates = "";
    if(typeof str == "string"){

        for(var i = 0; i < str.length; i++){
            if(!nonDuplicates.includes(str.charAt(i)) ){
                nonDuplicates = nonDuplicates.concat(str.charAt(i));
            }
        }
    }

console.log(nonDuplicates);

}

RemoveDuplicates("AAABBBCCC");