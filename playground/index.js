function factorial(number) {
  if (number < 1) {
    return 0;
  }
  return number === 1 ? 1 : number * factorial(number - 1);
}

function calcSum(myArray) {
  const arrayLength = myArray.length;
  if (arrayLength < 1) {
    return 0;
  } if (arrayLength === 1) {
    return myArray[0];
  }
  return myArray[0] + calcSum(myArray.slice(1, arrayLength));
}

try {
  // const factorialNumber = factorial(-1);
  const summedNumber = calcSum([4, 6, 2]);

  // console.log(factorialNumber);
  console.log(summedNumber);
} catch (e) {
  console.log('Error', e.stack);
}
