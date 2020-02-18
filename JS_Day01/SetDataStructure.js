
    var set  =  new Set();

    /*
    add(Values): add the value to the set
    delete(Value): deletes
    clear(): removes everything
    has(Value): contains

    values():
    */

    set.add(10);
    set.add(10);
    set.add(10);
    set.add("Yusuf");
    set.add("Mizgin");
    set.add('$');
    set.add(true);

    console.log(set);

    set.delete(10);
    console.log(set);

    set.delete("Yusuf");
    console.log(set);

  //  set.clear();
    console.log(set);

   var bool1 =  set.has("Mizgin");
   console.log(bool1);

   console.log("==============================================");

   /*

for of loop: similer to for each loop
    for( var varname   of  set.values()  ){

    }
   */

for( var each  of   set.values()   ){
    console.log(each);
}

console.log("==============================================");
var students = ["Nurullah", "Shirin", "Sukran", "Nurzat", "Sumeyya"];

for(var eachStudent of students.values() ){
    console.log(eachStudent);
}







