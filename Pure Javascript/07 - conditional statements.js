// A conditional statement is one that is only executed if a condition is true. Javascript gives 
// you some options

// 1. the ternary operator
// If the expression before the question mark (?) is true, the first part after the question
// mark is executed, if not, the part after the colon.

var theResult = (theTemperature > 0) ? "warm" : "cold";



// 2. if ... else

var theResult;
if (theTemperature > 0) {
        theResult = "warm";
} else {
        theResult = "cold";
}

// The "else" part is optional. A different way to write the above would be
var theResult = "cold";         // initialize to the "cold" option
if (theTemperature > 0) {
        theResult = "warm";
}

// More than one if can be used
var theResult;
if (theTemperature > 15) {
        theResult = "warm";
} else if (theTemperature > 0) {
        theResult = "lukewarm";
} else {
        theResult = "cold";
}



// 3. switch
// Sometimes something can have multiple values and you want to do something for each possibility.
// This can be done with if...else as above, but sometimes the "switch" statement is clearer
var theResult;
switch( theFavoriteAnimal ) {

        case "penguin": {
                theResult = "You're great";
                break;
        }

        case "chincilla": 
        case "ostrich": {
                theResult = "You're not soo great, but still, there is promise";
                break;
        }

        default: {
                theResult = "Boooooooo!";
                break
        }
}


