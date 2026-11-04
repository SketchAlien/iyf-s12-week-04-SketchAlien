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


// Task 7.4: Control Flow

//Exercise 1: If/Else Statements

function getGrade(score) {

    if (score >= 90) {

        return "A";

    } else if (score >= 80) {

        return "B";

    } else if (score >= 70) {

        return "C";

    } else if (score >= 60) {

        return "D";

    } else {

        return "F";

    }

}

console.log("Grade for 85:", getGrade(85));
console.log("Grade for 55:", getGrade(55));

//Exercise 2: Switch Statements

function getDayName(dayNumber) {

    switch (dayNumber) {

        case 0:

            return "Sunday";

        case 1:

            return "Monday";

        case 2:

            return "Tuesday";

        case 3:

            return "Wednesday";

        case 4:

            return "Thursday";

        case 5:

            return "Friday";

        case 6:

            return "Saturday";

        default:

            return "Invalid day";

    }

}

console.log("Day 3:", getDayName(3));
console.log("Day 9:", getDayName(9));


//Exercise 3: Loops

// 1. Print numbers 1-10 (I'm doing 1-10 instead of 1-100 to save console space!)

let loopNumbers = "";

for (let i = 1; i <= 10; i++) {

    loopNumbers += i + " ";

}

console.log("Numbers 1-10:", loopNumbers);

// 2. Print only even numbers 1-50

let evenNumbers = "";

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {

        evenNumbers += i + " ";

    }

}

console.log("Even numbers 1-50:", evenNumbers);

// 3. FizzBuzz (1-20 for testing)

console.log("FizzBuzz (1-20):");

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");

    } else if (i % 3 === 0) {

        console.log("Fizz");

    } else if (i % 5 === 0) {

        console.log("Buzz");

    } else {

        console.log(i);

    }

}

// 4. Triangle of stars

console.log("Star Triangle:");

let starTriangle = "";

for (let i = 1; i <= 5; i++) {

    starTriangle += "*".repeat(i) + "\n";

}

console.log(starTriangle);


// Mini-Project: Calculator


function calcAdd(a, b) {

    return a + b;

}

function calcSubtract(a, b) {

    return a - b;

}

function calcMultiply(a, b) {

    return a * b;

}

function calcDivide(a, b) {

    if (b === 0) {

        return "Error: Cannot divide by zero";

    }

    return a / b;

}

function calculate(num1, operator, num2) {

    switch (operator) {

        case "+":

            return calcAdd(num1, num2);

        case "-":

            return calcSubtract(num1, num2);

        case "*":

            return calcMultiply(num1, num2);

        case "/":

            return calcDivide(num1, num2);

        case "%":

            return num1 % num2;

        case "**":

            return num1 ** num2;

        default:

            return "Invalid operator";

    }

}

// Tests

console.log("10 + 5 =", calculate(10, "+", 5));

console.log("10 - 5 =", calculate(10, "-", 5));

console.log("10 * 5 =", calculate(10, "*", 5));

console.log("10 / 5 =", calculate(10, "/", 5));

console.log("10 / 0 =", calculate(10, "/", 0));

console.log("10 % 3 =", calculate(10, "%", 3));

console.log("2 ** 3 =", calculate(2, "**", 3));


// Lesson 8, Task 8.1: Arrays

console.log("--- Task 8.1: Array Basics ---");

// Creating arrays

const fruits = ["apple", "banana", "orange"];

const numbers = [1, 2, 3, 4, 5];

const mixed = ["hello", 42, true, null];

// Accessing elements

console.log("First fruit:", fruits[0]);

console.log("Number of fruits:", fruits.length);

// Modifying arrays

fruits.push("grape");        // Add to end

fruits.unshift("mango");     // Add to start

console.log("Updated fruits:", fruits);

fruits.pop();                // Remove from end

fruits.shift();              // Remove from start

console.log("Fruits after removing first and last:", fruits);

console.log("--- Task 8.1: Array Methods ---");

// forEach - do something with each element

console.log("Doubled numbers (forEach):");

numbers.forEach(num => console.log(num * 2));

// map - transform each element

const doubled = numbers.map(num => num * 2);

console.log("Mapped doubled array:", doubled);

// filter - keep elements that pass a test

const filteredNumbers = numbers.filter(num => num % 2 === 0);

console.log("Filtered even numbers:", evenNumbers);

// find - get first element that passes test

const firstEven = numbers.find(num => num % 2 === 0);

console.log("First even number found:", firstEven);

// reduce - combine all elements

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum of numbers (reduce):", sum);

// includes - check if element exists

console.log("Does it include 3?", numbers.includes(3));

console.log("--- Task 8.1: Build (Array Methods) ---");

// 1. Double all numbers

const doubledNumbers = numbers.map(num => num * 2);

console.log("1. Doubled:", doubledNumbers);

// 2. Filter out negative numbers

const mixedNumbers = [5, -2, 8, -10, 0];

const positiveNumbers = mixedNumbers.filter(num => num >= 0);

console.log("2. No negatives:", positiveNumbers);

// 3. Find first number > 10

const numbersOver10 = [2, 5, 12, 18, 4];

const firstOver10 = numbersOver10.find(num => num > 10);

console.log("3. First > 10:", firstOver10);

// 4. Calculate product of all numbers

const product = [2, 3, 4].reduce((total, num) => total * num, 1);

console.log("4. Product of 2, 3, 4:", product);