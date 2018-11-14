/**************************************************************************************************/
/* JavaScript Math Object */
/**************************************************************************************************/

// Math.PI
var pi = Math.PI; // variable pi contains -> 3.141592653589793



// Math.abs(x)
// returns the absolute value of a number
var abs = Math.abs(2); // variable abs contains -> 2
abs = Math.abs(-2); // variable abs contains -> 2

// usefull example for Math.abs(x)
function differenceBetweenTwoNumbers(firstnumber, secondnumber) {
	return Math.abs(firstnumber - secondnumber);
}

var abs_diff = differenceBetweenTwoNumbers(1, 5); // variable abs_diff contains -> 4
abs_diff = differenceBetweenTwoNumbers(1, -5); // variable abs_diff contains -> 6
abs_diff = differenceBetweenTwoNumbers(1.234, 5.678); // variable abs_diff contains -> 4.444



// Math.ceil(x)
// returns the smallest integer greater than or equal to a given number
var ceil = Math.ceil(0.88) // variable ceil contains -> 1
ceil = Math.ceil(1) // variable ceil contains -> 1
ceil = Math.ceil(-5.004) // variable ceil contains -> -5



// Math.floor(x)
// returns the largest integer less than or equal to a given number
var floor = Math.floor(0.88) // variable floor contains -> 0
floor = Math.floor(1) // variable floor contains -> 1
floor = Math.floor(-5.004) // variable floor contains -> -6



// Math.max / Math.min
// Math.max returns the number with the highest value
// Math.min returns the number with the lowest value
var array = [-3, -2, -1, 0, 1, 2, 3];
var highest = Math.max(...array); // variable highest contains -> 3
var lowest = Math.min(...array); // variable lowest contains -> -3
// The ... -> Spread Syntax is three dots.
//



// Your own sum 
// returns the sum off all numbers in a array
function sum(...numbers) {
	var total = 0;
	for(const number of numbers) {
		total += number;
	}
	return total;
}

var array = [1, 2, 3, 4, 5, 6];
var array_sum = sum(...array); // varaible array_sum contains -> 21

