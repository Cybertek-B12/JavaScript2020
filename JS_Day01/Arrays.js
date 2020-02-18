var numbers = [ 1,  2, 3, 3.5 ,  "Muhtar",  true,  '$'];
// index:       0   1  2  3         4         5     6
console.log( numbers);

console.log(numbers[10]);

 var name1 = numbers[4];

 console.log(name1);

 /*
 sort(): sorts in accending
 push(value): add method 
 pop(): LIFO
 Shift(): FIFO
 unshift(value): inserts the value to index 0 
 length: returns the length 

 */

 var nums = [9,8,7,6,5,4,3,2,1];
 nums.sort();  // ascii table
nums.push(100);
 console.log(nums);

 console.log(nums.pop());
 console.log(nums);

 console.log(nums.shift()); 
 console.log(nums);

 nums.unshift(1);
 console.log(nums);

 console.log(nums.length);