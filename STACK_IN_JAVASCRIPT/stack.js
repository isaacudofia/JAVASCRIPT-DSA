// STACK IN JAVASCRIPT LAST-IN-FIRST-OUT (LIFO)

const A = []


A.push("Isaac")
A.push("David")
A.push("Paul")
A.push("Josh")

const index1 = A.indexOf("Josh") 
const index2 = A.indexOf("Paul")

console.log(index1);
console.log(index2);

const pop1 =A.pop()
const pop2=A.pop()

console.log(pop1);
console.log(pop2);

const index3 = A.indexOf(pop1) 
const index4 = A.indexOf(pop2)

console.log(index3);
console.log(index4);

console.log(A);
