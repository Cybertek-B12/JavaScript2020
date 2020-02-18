

var map =  new Map();

/*
set(Key, Value): add keys & values to the map
get(key): returns the value
delete(key): delets the key and value
has(Key): verifies 

keys(): returns all the keys
values(): returns all the values

*/

map.set("Madina", 120000);
map.set("Tuhunjon", 100000);

console.log(map);

/*
for of loop:
    for( var [X, Y]  of mapName   )
*/

for(var [key, value] of map  ){
    console.log(key+" salary is "+value+" dollars");
}

console.log(  map.get("Madina"));

map.delete("Madina");

console.log(map);

/*
Keys():
values():
*/

var students = new Map();
students.set("Nurzat", 1);
students.set("Olessya", 2);
students.set("Holy Erhan", 3);

for( var key of students.keys() ){
    console.log(key);
}

console.log("========================================");

for( var value of   students.values() ){
    console.log(value);
}
