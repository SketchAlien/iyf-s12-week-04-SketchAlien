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
console.log("--- Exercise 3: Comparison & Logical Operators ---");
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