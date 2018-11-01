// *** Strings ***

// Defining regular strings, both " and ' are supported (and identical)
var theString1 = "Penguins were here";
var theString2 = 'Penguins were here';

// You can use quotes in a string if they are different from the quotes defining the string
var theString3 = "Penguins don't have a problem with quotes";
var theString4 = 'Penguins have "no problems" with quotes';

// But you can also use escape characters to get the same effect
var theString5 = "Penguins allow \" in the middle of a string";
var theString6 = "A backslash itself \\ in a string";
var theString7 = "A new line \n and carriage return \r in a string";
var theString8 = "A tab \t in a string";



// *** Numbers ***

// Javascript numbers
var theNumber1 = 3;
var theNumber2 = 3.14;
var theNumber3 = 314e-1;                // Scientific notation is allowed

// Javascript has a way to say something is "Not a Number"
var theNumber4 = 1 / "apple";           // That is now "NaN" or "Not a Number"
var theNumber5 = NaN;                   // same

// Same with Infinity
var theNumber6 = 1 / 0;                 // Is now "Infinity"
var theNumber7 = Infinity               // Same

// You can define numbers as hexadecimal
var theNumber8 = 0xFF;                  // Or 255 for normal people



// *** Boolean values ***

// Boolean values
var theBoolean1 = true;
var theBoolean2 = false;



// *** Undefined ***

// Variables can explicitly be undefined, or implicitly be undefined
var theUndefined1;                      // No type or value defined, so undefined
var theUndefined2 = undefined;          // Explicitly set to undefined

// You can also set the value of an object to null
var theNull1 = "Penguins!";             // A string!
theNull1 = null;                        // Still a string, but one with value null

