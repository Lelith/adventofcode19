function quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const lessThan = array.filter((number) => number < pivot);
  const moreThan = array.filter((number) => number > pivot);
  return quicksort(lessThan).concat(pivot).concat(quicksort(moreThan));
}

try {
  const myArray = [10, 4, 15, 2];
  const sortedArray = quicksort(myArray);
  console.log(sortedArray);
} catch (error) {
  console.log(error.stack);
}
