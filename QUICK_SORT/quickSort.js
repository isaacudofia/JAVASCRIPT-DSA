//QUICKSORT MOVES SMALLER ELEMENTS TO LEFT OF A PIVOT. RECURSIVE DIVIDE ARRAY IN 2 PARTITIONS
//SPACE COMPLEXITY = O(log(n)) DUE TO RECURSION
//RUNTIME COMPLEXITY = BEST CASE (0(n log(n)))
//                     AVERAGE CASE (0(n log(n)))
//                     WORST CASE (O(n^2)) if already sorted

const array = [2, 9, 1, 6, 5, 4];

const quickSort = (array) => {
  if (array.length < 2) return array;
  let pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) leftArray.push(array[i]);
    else rightArray.push(array[i]);
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

console.log(quickSort(array));
