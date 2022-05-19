// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))


// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will give back an output of 10
// b) Verify and explain: My answer is correct because strings have a property of length and the characters in the string can be accounted for by its placement which is called the index.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: I believe that it will give back the output of "o" 
// b) Verify and explain: My initial answer was correct because the strings are indexed which means that when i count the characters they start from zero and move forward. For this example "Hello World" will give 0 when console logged.
 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This will give an answer of "Ruby" because arrays are zero indexed. 
// b) Verify and explain: Each element are numbered always starting at 0 and increase each element by one.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I believe the output is going to be "SATURDAY" "SUNDAY"
// b) Verify and explain: After multiple attempts of using the terminal i keep getting an error and i have been stuck on this one. 
// TypeError: weekendDays.toUpperCase is not a function
//     at Object.<anonymous> (/Users/learnacademy/Desktop/week-1-assessment-jjames177/coding-concepts.js:48:25)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Module._load (node:internal/modules/cjs/loader:827:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47

// Node.js v18.0.0



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I believe that it will return with 3.
// b) Verify and explain: I was wrong after console.log it returned "number". I know its a primitive data type that returns number.
