/* 
Cases to get undefined value, without assigning directly
1. var without assigning a value
2. function without returning main data
3. if value of return in a function is not assigned
4. If parameter of a function is missing, the value of that particular parameter will be undefined
5. property that doesn't exist in an Object
6. In an array, trying to access element with an index that doesn't exist
7. Trying to access element with the index which has been DELETED
*/
let first;
console.log(first)

function add(x, y) {
    sum = x + y
    return;
}
console.log(add(10, 10))

const object = ['ahnaf', 'coding']
console.log(object[2])
