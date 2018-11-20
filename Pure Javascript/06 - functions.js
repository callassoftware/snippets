// A function in Javascript is a way to encapsulate common code
function addValues( value1, value2, value3 ) {

        // In the function body, you can do anything you want

        // If you want to pass back a result, use "return"
        return value1 + value2 + value3;
}

// Using a function simply uses the name
var theResult = addValues( 1, 2, 3 );
// theResult contains 6

// And as the "+" operator in JavaScript also works for strings...
var theResult2 = addValues( "Penguins ", "where ", "here!" );
// theResult2 contains "Penguins where here!"