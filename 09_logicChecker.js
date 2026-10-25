
/*
As you learned in a previous lesson, booleans are a data type with only true and false values.

A truthy value is a value that evaluates to true in a boolean context. Examples of truthy values are:

Non-empty strings
Non-zero numbers
The boolean true
And other values you'll meet later on.

You can use the Boolean() function to check the truthiness of a value. For example, Boolean("Hello World!") will return true because "Hello World!" is truthy.

Change the assignment of truthyOrFalsy by setting its value to "freeCodeCamp". You will still see true logged to the console because a non-empty string is a truthy value.
const truthyOrFalsy = "freeCodeCamp";

Falsy values are values that evaluate to false in a boolean context. Examples of falsy values are:
const truthyOrFalsy = false;
"" (empty string)
0
false
null
undefined
NaN
You'll meet all of these going through this coursework.

A conditional statement is used to run code depending on a condition. It is composed of the if keyword, followed by a condition enclosed by parentheses, and a body enclosed by curly braces. Here's an example of an if statement:

Example Code
if (condition) {
  console.log("condition is truthy");
}
When condition is a truthy value (non-empty string, non-zero number, true, etc.) the code within the if statement's body is executed.

Note that you won't see anything logged to the console as the condition of your new if statement is false.
if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

Comparison operators allow you to compare values and write more complex conditional statements.

Example Code
if (today == birthday) {
  console.log("Happy Birthday!");
}
For example, the code above logs "Happy Birthday!" to the console only when the values of the variables today and birthday are equal.
A conditional statement can have an else clause, which runs code when the if condition is falsy.
*/

const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 15;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}