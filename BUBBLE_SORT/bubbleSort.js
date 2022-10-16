//BUBBLE SORT ALGORITHM
//The bubble sort has a space complexity of O(1).
//This algorithm has a worst-case time complexity of O(n2)

const A = [10, 12, 15, 30, 5]

for(let i = 0 ; i < A.length -1; i++){
  for(let j = 0 ; j < A.length-1-i; j++){

    console.log(`i,j : ${i} ${j} > ${j+1}: ${A[i]} ${A[j]}`)

    if(A[j] > A[j+1]){
        const temp = A[j]
        console.log(temp);
        A[j] = A[j+1]
        A[j+1] = temp
    }
  }
}

console.log(A);