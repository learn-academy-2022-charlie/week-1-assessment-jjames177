// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudocode
// Create a function
// Name the function boiling point
// Determine if the argument is below, at, or above the boiling point using an if statement
// Return a string 
// String interpolation

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (number) => {
    if (number > 212) {
        return `${number} is above boiling point`
    } else if (number === 212) {
        return `${number} is at boiling point`  
    } else {
        return `${number} is below boiling point`
    }
}


console.log(boilingPoint(temp1)) //Output = 42, is below boiling point
console.log(boilingPoint(temp2)) //Output = 350, is above boiling point
console.log(boilingPoint(temp3)) //Output = 212, is at boiling point




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudocode
// name a variable to combine myNumbers1 and myNumbers2
// use .concat to combine myNumbers 1 and myNumbers2
//use .length to calculate the number of indexes in set array.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var combinedArrays = myNumbers1.concat(myNumbers2)

console.log(combinedArrays.length) // Output = 10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

// Pseudocode
// create a variable
// name variable myCohort
// implement .split to make an array of letters
// use .reverse to reverse the order of which the array is in 
// to combine the newly reversed string into an array im going to use .join
// i'm going to console.log(splitLetters.join('')) to see if it works

const currentCohort = "Charlie 2022"

const myCohort = "Charlie 2022"
var splitLetters = myCohort.split('')
splitLetters.reverse();

console.log(splitLetters.join('')) // Output = 2202 eilrahC




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudocode
// use a for loop iterate
// i will use modulo to test if each number is either odd or even
// implement if/else conditional statements


const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {
    if(myArray [i] % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
Output = odd, even, odd, even, odd, even

//  Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//Pseudocode
// create a function 
// function name will be smallerNumbers
// this function will have two parameters
// parameters is named number1 and number 2



// Set one:
const number1 = 58
const number2 = 100 

// Set two:
const number3 = 27
const number4 = 24

const smallerNumbers = (number1, number2) => {
    if(number1 > number2) {
        return number1 - number2
    } else if(number1 === number2) {
        return 0
    } else {
        return number2 - number1
    }
}
console.log(smallerNumbers(number1, number2))  // Output = 42

console.log(smallerNumbers(number3, number4)) // Output = 3

