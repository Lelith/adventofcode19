// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function divideOrSubstract(number, count){
    
    // this is our goal and also eliminates the trivial cases
    if(number === 0)
    {
        return count;
    } 
    // to detect if a number is even or odd we can use modulor operator %
    else if(number%2) {
       count += 1+  divideOrSubstract(number-1, count);
    } else {
       count += 1 + divideOrSubstract(number/2, count);
    }
 
    return count;   
}

function solution(S) {
    /*   As S is a string it will become difficult to use mathematical operations. therefore first step is to convert it back into a integer
    */
    let stepsNeeded = 0;
    const inputNumber = parseInt(S, 2);
    stepsNeeded = divideOrSubstract(inputNumber, stepsNeeded);
    return stepsNeeded;
}
