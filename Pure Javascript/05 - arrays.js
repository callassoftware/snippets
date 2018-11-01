// An array in Javascript is a list of things
var theCoolAnimals1 = [ "penguins", "ostriches", "hedgehogs" ];
var theCoolAnimals2 = [ 
        "penguins", 
        "ostriches", 
        "hedgehogs"
];
// The two above are identical, how you format the array is not important

// You're not restricted to having the same type of things in an array
var theLeftOvers1 = [ "penguins", 42, true, undefined, null];

// You access elements in an array with their index (starting at 0 of course)
var theResult1 = theLeftOvers1[0];              // gives "penguins"

// Getting the length of an array
var theLength = theCoolAnimals1.length;         // theLength is now three

// Converting it to a string
var theString = theCoolAnimals1.toString();     // the string "penguins,ostriches,hedgehogs"
var theString = theCoolAnimals1.toString(", "); // the string "penguins, ostriches, hedgehogs"

// Removing the last element and adding a new one
var theResult2 = theCoolAnimals1.pop();         // "hedgehogs" (the element popped out)
var theResult3 = theCoolAnimals1.push("chinchillas"); // 3 (the length of the array now)

// Removing the first element or adding one to the beginning
var theResult4 = theCoolAnimals1.shift();               // "penguins"
var theResult5 = theCoolAnimals1.unshift( "penguins" ); // 3

