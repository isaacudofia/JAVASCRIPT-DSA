const A = [2, -1, 0, 5, 7, -8, 3, 1, 4]
let max = A[0]

A.map((i)=>{
   if(A[i] < max){
    max = A[i]
   }
})

console.log(max)