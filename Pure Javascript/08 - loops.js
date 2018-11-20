// A loop statement allows code to be executed multiple times. JavaScript offers multiple setups 
// you can use depending on what feels more natural for the logic of your appication



// 1. for loop

var theResult = 0;
for (var theIndex = 0; theIndex < 10; theIndex++) {

        theResult += 1;
}

// "theIndex = 0" is executed once when the loop starts
// "theIndex < 10" is run before each loop to see whether the loop can still run
// "theIndex++" is run after each iteration of the loop
// In the above example, the loop is run 10 times (starting at 0, then 1, 2, 3.... and 9.)



// 2. while loop

var theIndex = 10;
var theResult = 0;
while (theIndex > 0) {

        theResult += 1;
        theIndex--;
}

// Use this type of loop if the comparison (the stop condition) should be done before the loop
// runs. It's possible in this case that the loop doesn't run at all (if the condition is false
// to begin with).



// 3. do... while loop

var theIndex = 0;
var theResult = 0;
do {

        theResult += 1;
        theIndex++;

} while (theIndex < 10);



// 4. for/in loop

var shark = {
    species: "great white",
    color: "white",
    numberOfTeeth: Infinity
}
var text = "";
var attribute;
for (attribute in shark) {
	text += shark[attribute] + " ";
}

// use this loop to iterate over objects
