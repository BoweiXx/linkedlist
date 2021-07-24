let linkedList = require("./linkedlist");

let myList = new linkedList();
console.log(myList);

myList.append(1);
console.log(myList);

console.log(myList.indexOf(1));
//pos, val
myList.insert(1,2);
console.log(myList);

myList.delete(1);
console.log(myList);

console.log(myList.isEmpty());