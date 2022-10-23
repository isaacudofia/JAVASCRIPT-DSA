//BINARY SEARCH SEARCHES FOR TARGET FROM A "SORTED ARRAY"

//runtime complexity O(log n)
//space complexity O(1)

//Disadvantages:
//Not efficient for small data set
//It needs to be sorted

//Advantages:
//Efficient for large data set

const binearSearch = (arr, search) => {
  let lb = 0;
  let ub = arr.length - 1;

  while (lb <= ub) {
    let mid = Math.floor((ub + lb) / 2);
    if (search === arr[mid]) {
      return mid;
    }
    if (arr[mid] < search) lb = mid + 1;
    else ub = mid - 1;
  }

  return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //ARRAY NEEDS TO BE SORTED FOR BINARY SEARCH RULE 1

const findNumber = 9; //SEARCH VALUE HERE

const checkIndex = binearSearch(array, findNumber);

if (checkIndex == -1) {
  console.log(`Search not found 👎`);
} else {
  console.log(`found 👍`);
  console.log(`Search at index: ${checkIndex}`);
}
