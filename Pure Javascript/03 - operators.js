// *** Assignment ***

// In order to get a value, a variable needs to be assigned with the assignment operator
var theVariable1 = 1;
var theVariable2 = theVariable1;



// *** Arithmetic operators ***

// Simple
var theVariable3 = 1 + 2;                       // sum gives 3
var theVariable4 = 1 - 2;                       // subtraction gives -1
var theVariable5 = 1 * 2;                       // multiplication gives 2
var theVariable6 = 5 / 2;                       // division gives 2.5
var theVariable7 = 5 % 2;                       // Modulus or division remainder gives 1
theVariable3++;                                 // Adds one to the existing value
thevariable3--;                                 // Subtracts one of the existing value

// Combining an operation with an assignment
theVariable3 += 2;                              // Adds 2
theVariable3 -= 2;                              // Subtracts 2
theVariable3 *= 2;                              // Multiplies by 2
theVariable3 /= 2;                              // Divides by 2
theVariable3 %= 2;                              // Sets to the remainder after division by 2

// Addition also works for strings
var theVariable8 = "Once there were " + "penguins";
theVariable8 += " everywhere";



// *** Comparison operators ***

// Strangely enough, Javascript has two equality operators. You can think of them as:
// == testing for equivalence
// == testing for equality
var theVariable9 = (1 == true);            // Will return true, because the 1 and true are equivalent
var theVariable10 = (1 === true);          // Will return false, because 1 is a number and true a boolean
// In other words, === returns true only if both the value and type are the same.

// Inequality
var theVariable11 = (1 != 2);              // Will be true because they are not the same)
var theVariable12 = (1 !== true);          // Will be true, while 1 and true are equivalent, they are not the same type

// Comparison
1 < 2;                                     // Smaller than
1 <= 2;                                    // Smaller than or equal to
2 > 1;                                     // Greater than
2 >= 1;                                    // Greater than or equal to



// *** Ternary operator ***

var theVariable13 = (1 > 2) ? "Bigger" : "Smaller";

// This can loosely be read as:
// If 1 > 2 is true, assign the first value, if not the second value.
//
// In the above example, theVariable13 will be set to "smaller" as (1 > 2) is false



// *** Logical operators ***

var theVariable14 = true;
var theVariable15 = false;
var theVariable16 = theVariable14 && theVariable15;             // Logical AND
var theVariable17 = theVariable14 || theVariable15;             // Logical OR
var theVariable18 = !theVariable14;                             // Logical inversion
