function stopWatch() {
    let counter = 0;
    //return a function
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch()
console.log(clock1());
console.log(clock1());
console.log(clock1())