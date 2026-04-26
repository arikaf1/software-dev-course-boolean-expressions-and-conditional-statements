/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// Program A

// Error Type: Syntax Error (missing closing quote and parenthesis)
console.log("Welcome to the bootcamp");

// Fix: Added closing quote and parenthesis
// Verification: This now prints → Welcome to the bootcamp

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// Program B

//Error Type: Runtime / Data Type Issue ("eight" is a string, not a number)
let numbers = [2, 4, 8]; // Fix: changed "eight" → 8

for (let i = 0; i < numbers.length; i++) {
    let doubled = numbers[i] * 2;
    console.log(doubled);
}

// Verification Output:
// 4
// 8
// 16


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// Program C

//Error Type: Logic Error (returns are reversed)
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; //Fix: NOT prime
        }
    }
    return true; //Fix: IS prime
}

console.log(isPrime(7)); // true
