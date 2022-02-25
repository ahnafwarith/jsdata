/* 
Falsy:
false
0
undefined
null
NaN
-------------
Truthy:
true
any number except 0 (positive or negative)
any string
array, even empty array
object, even empty object
 */
let x = [];
console.log(x)
if (x) {
    console.log("variable is truthy")
}
else {
    console.log('variable is falsy');
}