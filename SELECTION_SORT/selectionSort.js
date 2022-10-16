//SELECTION SORT
//Worst Case Time Complexity is: O(N2)
//Average Case Time Complexity is: O(N2)
//Best Case Time Complexity is: O(N2)
//Space Complexity: O(1)

//ADVANTAGE OF SELECTION SORT
//1. 
//2.

//DISADVANTAGE OF SELECTION SORT
//1.
//2.

const array = [9, 1, 22, 10, 15, 2, 8, 3, 7, 4, 6, 5]

console.log(array); //UNSORTED ARRAY

const selectionSort=(arr)=>{
   for(let i = 0; i < arr.length; i++){
    let min = i

    for(let j = i + 1; j < arr.length; j++){
       if(arr[j] < arr[min]){
           min = j
       }
    }

    let tempStorage = arr[i]
    arr[i] = arr[min]
    arr[min] = tempStorage
   }

   console.log(arr);  //SORTED ARRAY AFTER USING SELECTION SORT
}

selectionSort(array)
