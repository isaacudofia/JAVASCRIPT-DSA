//Factorial is the product of all positive integer less than or equal to n

const factorial =(n)=>{
  let result = 1
  for(let i = 2; i <=n; i++){
   result *= i
  }
  return result
}

console.log(factorial(5)) // 1*2*3*4*5 = 120
console.log(factorial(4)) // 1*2*3*4 = 24
console.log(factorial(3)) // 1*2*3 = 6

//THE PROBLEM HAS A WORST CASE OF O(n)