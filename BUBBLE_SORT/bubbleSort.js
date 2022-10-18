//BUBBLE SORT ALGORITHM
//The bubble sort has a space complexity of O(1).
//This algorithm has a worst-case time complexity of O(n2)

const A = [2, 9, 1, 6, 5, 4];

const bubbleSort = (A) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length - i; j++) {
      let temp;
      if (A[j] > A[j + 1]) {
        temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  return A;
};

console.log(bubbleSort(A));
