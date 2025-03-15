const score = 400 // Define a constant variable 'score' with value 400
// console.log(score); // Log the value of 'score' to the console

const balance = new Number(100) // Create a Number object with value 100
// console.log(balance); // Log the 'balance' object to the console

// console.log(balance.toString().length); // Log the length of the string representation of 'balance'
// console.log(balance.toFixed(1)); // Log 'balance' rounded to 1 decimal place

const otherNumber = 123.8966 // Define a constant variable 'otherNumber' with value 123.8966

// console.log(otherNumber.toPrecision(4)); // Log 'otherNumber' with 4 significant digits

const hundreds = 1000000 // Define a constant variable 'hundreds' with value 1000000
// console.log(hundreds.toLocaleString('en-IN')); // Log 'hundreds' formatted as a locale string for 'en-IN'

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Log the Math object to the console
console.log(Math.abs(-4)); // Log the absolute value of -4
console.log(Math.round(4.6)); // Log the rounded value of 4.6
console.log(Math.ceil(4.2)); // Log the ceiling value of 4.2
console.log(Math.floor(4.9)); // Log the floor value of 4.9
console.log(Math.min(4, 3, 6, 8)); // Log the minimum value among 4, 3, 6, 8
console.log(Math.max(4, 3, 6, 8)); // Log the maximum value among 4, 3, 6, 8

console.log(Math.random()); // Log a random number between 0 and 1
console.log((Math.random() * 10) + 1); // Log a random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); // Log a random integer between 1 and 10

const min = 10 // Define a constant variable 'min' with value 10
const max = 20 // Define a constant variable 'max' with value 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Log a random integer between 10 and 20