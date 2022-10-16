// MAXIMUM VALUE IN AN ARRAYs

const A = [2, 10, 50, 30, 5, 7, 15, 35, 33, 40]

let max = A[0]
for(let i = 1; i < A.length; i++){
    if(A[i] > max){
        max = A[i]
    }
}

console.log(max);
