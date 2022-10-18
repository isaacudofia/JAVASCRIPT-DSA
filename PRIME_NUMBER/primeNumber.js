//CHECK IF A NUMBER IS A PRIME NUMBER

const primeNumber = (n) => {
  if (n <= 1) return n + " is not a prime number";
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return n + " is not a prime number";
  }
  return n + " is a prime number";
};

console.log(primeNumber(7)); //PRIME NUMBERS
console.log(primeNumber(15)); // NOT A PRIME NUMBERS
