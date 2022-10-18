const array = [9, 2, 6, 5, 4, 1];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let temp = i;
    let j = i - 1;
    while (j >= 0 && array[temp] < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(insertionSort(array));
