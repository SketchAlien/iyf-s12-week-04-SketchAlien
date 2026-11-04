// Task 7.1 Variable Declarations
let myName = "SketchAlien";
let myAge = 39;
const myBirthYear = 1987;

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof true);

let score = 100;
score = 150;
console.log("Score:", score);

const PI  = 3.14159;
console.log("PI:", PI);

//Exercise: Variable Practice
let name = "SketchAlien";
let age = 22;
let isStudent = true;
let myFavoriteColors = ["blue", "black", "red"];
let today = new Date();

console.log(`My name is ${name}.`);
console.log(`I am age ${age} years old.`);
console.log(`Student: ${isStudent}`);
console.log(`my favorite colors are: ${myFavoriteColors.join(",")}`);
console.log(`Today is: ${today.toDateString()}`);

// Task 7.2 Data Types
// Exercise 1: Number Operations

console.log("--- Exercise 1: Number Operations ---");

let a = 10;
let b = 3;

console.log("Addition:", a + b);  
console.log("Subtraction:", a - b);  
console.log("Multiplication:", a * b);  
console.log("Division:", a / b);  
console.log("Modulus:", a % b);  
console.log("Exponentiation:", a ** b); 

//Exercise 2: String Operations

let firstName = "Sketch"; 
let lastName = "Alien";

// Concatenation

let fullName = firstName + " " + lastName;

// Template literals

let greeting = `Hello, ${firstName}!`;

let message = `${firstName} has ${firstName.length} letters.`;

//String methods

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Sketch"));

// Exercise 3: Comparison & Logical Operators

console.log(5 > 3);   
console.log(5 < 3);   
console.log(5 === 5); 
console.log(5 == "5"); 
console.log(5 !== 3); 
console.log(true && true);  
console.log(true || false); 
console.log(!true);         

//Challenge

let myCurrentAge = 39; 
let ageInDays = myCurrentAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2024 + (100 - myCurrentAge); 

console.log(`My age in days is approximately: ${ageInDays}`);
console.log(`My age in hours is approximately: ${ageInHours}`);
console.log(`I will turn 100 in the year: ${yearTurn100}`);

// Task 7.3: Functions

// Exercise 1: Function Declarations

function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

//Exercise 2: Functions

// 1. calculateArea
function calculateArea(width, height) {

    return width * height;

}

console.log("Area of 5x10:", calculateArea(5, 10));

// 2. celsiusToFahrenheit

function celsiusToFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

console.log("25C to F:", celsiusToFahrenheit(25));

// 3. isEven

function isEven(number) {

    return number % 2 === 0;

}

console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));

// 4. getInitials

function getInitials(fullName) {

    let parts = fullName.split(" ");

    return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();

}

console.log("Initials of 'Sketch Alien':", getInitials("Sketch Alien"));

// 5. reverseString

function reverseString(str) {

    return str.split("").reverse().join("");

}

console.log("Reverse 'hello':", reverseString("hello"));

// Build calculateTip

function calculateTip(bill, tipPercent = 15) {

    return bill * (tipPercent / 100);

}

console.log("Tip on 100 (default 15%):", calculateTip(100));
console.log("Tip on 200 (20%):", calculateTip(200, 20));