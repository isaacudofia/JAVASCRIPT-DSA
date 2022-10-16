//FIBONACCI SEQUENCE IS THE SUM OF THE LAST TWO NUMBER WHEN GREATER THAN ONE

const fibonnacci =(n)=>{
   const fib = [0,1]
   for(let i = 2; i <=n; i++){
    fib[i] = fib[i-1] + fib[i-2]
   }
   return fib
}

console.log(fibonnacci(7))

//BIG O = O(n)