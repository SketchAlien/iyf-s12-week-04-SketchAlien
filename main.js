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

// CalculateTip

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

fruits.push("grape");       
fruits.unshift("mango");   
console.log("Updated fruits:", fruits);
fruits.pop();              
fruits.shift();              

console.log("Fruits after removing first and last:", fruits);

//Task 8.1: Array Methods

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

//Task 8.2: Object Basics

// Creating an object 

const myProfile = {

    firstName: "Sketch",

    lastName: "Alien",

    age: 39, 

    isStudent: true,

    hobbies: ["drawing", "coding", "gaming"],

    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties

console.log("First name:", myProfile.firstName);       // Dot notation
console.log("Last name:", myProfile["lastName"]);      // Bracket notation
console.log("City:", myProfile.address.city);          // Nested object

// Modifying properties

myProfile.age = 39; // Change age

myProfile.phone = "0746 22 55 32"; 

delete myProfile.isStudent;

console.log("Updated profile:", myProfile);

//Task 8.2: Object Methods

const mathCalc = {

    add: function(a, b) {

        return a + b;

    },

    // Shorthand method syntax

    subtract(a, b) {

        return a - b;

    },

    // Arrow function

    multiply: (a, b) => a * b

};

console.log("Object Add (5+3):", mathCalc.add(5, 3));
console.log("Object Subtract (10-4):", mathCalc.subtract(10, 4));
console.log("Object Multiply (6*6):", mathCalc.multiply(6, 6));
console.log("--- Task 8.2: Object Iteration ---");

const scores = {

    math: 95,
    english: 88,
    science: 92
};

// Get keys

console.log("Keys:", Object.keys(scores));  

// Get values

console.log("Values:", Object.values(scores));

// Get entries

console.log("Entries:", Object.entries(scores));

// Loop through

console.log("Looping through scores:");

for (const [subject, score] of Object.entries(scores)) {

    console.log(`${subject}: ${score}`);

}


// Task 8.3: Array of Objects

const studentList = [

    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }

];

// 1. Get all student names

const studentNames = studentList.map(student => student.name);

console.log("1. Names:", studentNames);

// 2. Get students with grade > 80

const highAchievers = studentList.filter(student => student.grade > 80);

console.log("2. High Achievers:", highAchievers);

// 3. Find the student named "Charlie"

const charlie = studentList.find(student => student.name === "Charlie");

console.log("3. Found Charlie:", charlie);

// 4. Calculate average grade

const avgGrade = studentList.reduce((total, student) => total + student.grade, 0) / studentList.length;

console.log("4. Average Grade:", avgGrade);

// 5. Get CS majors only

const csMajors = studentList.filter(student => student.major === "CS");

console.log("5. CS Majors:", csMajors);

// 6. Sort by grade (highest first) - We use [...studentList] to avoid mutating the original array

const sortedByGrade = [...studentList].sort((a, b) => b.grade - a.grade);

console.log("6. Sorted by Grade:", sortedByGrade);

// 7. Check if any student has grade > 90

const hasTopStudent = studentList.some(student => student.grade > 90);

console.log("7. Has a top student (>90)?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)

const allPassing = studentList.every(student => student.grade >= 60);

console.log("8. Are all students passing?", allPassing);


// Task 8.4: JSON — Data as Text

console.log("--- Task 8.4: JSON ---");

const jsonText = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';


// 1. Text -> object (Parsing)

const parsedStudent = JSON.parse(jsonText);

console.log("Parsed Math Grade:", parsedStudent.grades.math); 


// 2. Object -> text (Stringifying)

const backToText = JSON.stringify(parsedStudent, null, 2);

console.log("Stringified Object:\n", backToText);
console.log("Type of backToText:", typeof backToText); // string
console.log("--- Task 8.4 Exercise: Posts ---");

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse it into an array

const postsArray = JSON.parse(postsJson);

// 2. Keep only published posts

const publishedPosts = postsArray.filter(post => post.published);

// 3. Sort them by likes, highest first

const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);

// 4. Map them to strings like "Week 4 recap (30 likes)"

const formattedPosts = sortedPosts.map(post => `${post.title} (${post.likes} likes)`);

console.log("Formatted Posts:", formattedPosts);

// 5. JSON.stringify the filtered array back to text

const finalJson = JSON.stringify(sortedPosts, null, 2);

console.log("Final JSON String:\n", finalJson);


// Mini-Project: Student Grade Tracker

const gradeTracker = {

    students: [],

    // 1. Add a new student

    addStudent(name, grades) {

        this.students.push({ name: name, grades: grades });
    },

    // 2. Get a student by name

    getStudent(name) {

        return this.students.find(student => student.name === name) || null;
    },

    // 3. Calculate a student's average

    getStudentAverage(name) {

        const student = this.getStudent(name);

        if (!student) return "Student not found";


        const gradesArray = Object.values(student.grades);

        const sum = gradesArray.reduce((total, grade) => total + grade, 0);

        return (sum / gradesArray.length).toFixed(2); // Rounds to 2 decimal places

    },

    // 4. Get class average for a subject

    getSubjectAverage(subject) {

        let total = 0;

        let count = 0;

        for (const student of this.students) {

            if (student.grades[subject] !== undefined) {

                total += student.grades[subject];

                count++;

            }

        }

        if (count === 0) return "No grades for this subject";

        return (total / count).toFixed(2);

    },

   

    // 5. Get top performer

    getTopStudent() {

        if (this.students.length === 0) return null;

        let topStudent = this.students[0];
        let highestAvg = parseFloat(this.getStudentAverage(topStudent.name));

        for (const student of this.students) {

            const avg = parseFloat(this.getStudentAverage(student.name));

            if (avg > highestAvg) {

                highestAvg = avg;

                topStudent = student;
            }

        }

        return topStudent;

    },

    // 6. Get students needing help (average < 70)

    getStrugglingStudents() {

        return this.students.filter(student => {

            const avg = parseFloat(this.getStudentAverage(student.name));

            return avg < 70;

        });

    },

    // 7. Get letter grade

    getLetterGrade(score) {

        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";

    },

    // 8. Generate report card

    generateReportCard(name) {

        const student = this.getStudent(name);

        if (!student) return "Student not found";

        let report = `--- Report Card for ${student.name} ---\n`;

        for (const [subject, score] of Object.entries(student.grades)) {

            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;

        }

        report += `Overall Average: ${this.getStudentAverage(name)}\n`;

        return report;

    }

};

// Test your implementation

gradeTracker.addStudent("SketchAlien", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Wanjiku", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Brian", { math: 60, english: 65, science: 58 });

console.log("SketchAlien's Average:", gradeTracker.getStudentAverage("SketchAlien")); // 91.67
console.log("Math Subject Average:", gradeTracker.getSubjectAverage("math")); // 75.67
console.log("Top Student:", gradeTracker.getTopStudent());
console.log("Struggling Students:", gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("SketchAlien"));

// Daily Challenges

// Day 1: FizzBuzz

function dailyFizzBuzz() {

    for (let i = 1; i <= 100; i++) {

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

}


console.log("FizzBuzz function is ready (uncomment to run).");

// Day 2: Reverse a String

function reverseText(str) {

    return str.split("").reverse().join("");

}

console.log("Reverse 'hello':", reverseText("hello"));

//Day 3: Find Largest Number

function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {

            largest = arr[i];

        }

    }

    return largest;

}

console.log("Largest in [10, 5, 25, 8]:", findLargest([10, 5, 25, 8]));

const findLargestReduce = (arr) => arr.reduce((max, current) => current > max ? current : max, arr[0]);

console.log("Largest using reduce:", findLargestReduce([10, 5, 25, 8]));

//Day 4: Remove Duplicates 

function removeDuplicates(arr) {

    return [...new Set(arr)];

}

console.log("No duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//Day 5: Palindrome Checker

function isPalindrome(str) {

    // Remove spaces and make lowercase

    const cleanStr = str.toLowerCase().replace(/\s/g, "");

    // Compare with its reverse

    return cleanStr === cleanStr.split("").reverse().join("");

}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false
console.log("Is 'A man a plan a canal Panama' a palindrome?", isPalindrome("A man a plan a canal Panama")); // true