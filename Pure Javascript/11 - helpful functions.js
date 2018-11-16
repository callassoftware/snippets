/**************************************************************************************************/
/* Helpful Javascript Functions */
/**************************************************************************************************/

// Get a random number with range
// Returns: Number
function randomNumberWithRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Check if something is a string
// Returns: Boolean
function isString(str) {
	return typeof str === 'string' || str instanceof String;
}
// If a string is created with (new String) typeof will return "object". For those strings (instanceof) can be used.



// Check if something is a number
// Returns: Boolean
function isNumber(num) {
	return typeof num === 'number' && isFinite(num);
}
// From (typeof) more than one thing can return "number" like NaN or Infinity. (isFinite) is required to check if a value is a number.



// Check if array contains
// Returns: Boolean
Array.prototype.contains = function(val) {
	for (i in this) {
		if(this[i] === val) return true;
	}
	return false;
}

// usage of Array.contains(x)
var array = [ "penguins", "ostriches", "hedgehogs" ];
if(array.contains("hedgehogs")) {
	// do something
}



// Convert a string into an array of words
// Returns: Array
String.prototype.extractWords = function(pattern = /[^a-zA-Z-]+/) {
	return this.split(pattern).filter(Boolean); // Array.filter() is used to remove empty strings
}

// usage of String.extractWords()
var text = "Penguins should rule the world!";
var array = text.extractWords();
// array = ["Penguins", "should", "rule", "the", "world"]



// Check if string is upper/lower case
// Returns: Boolean
String.prototype.isLowerCase = function() {
	return this.toString() === this.toLowerCase();
}

String.prototype.isUpperCase = function() {
	return this.toString() === this.toUpperCase();
}

// usage of String.isLowerCase()
var text = "Penguins should rule the world!";
if(text.isLowerCase()) {
	// do something
}

if(text.isUpperCase()) {
	// do something
}



// Check if json is valid
// Returns: Boolean
function isValidJson(obj) {
	try {
		JSON.parse(obj);
		return true;
	}catch(e) {
		return false;
	}
}

// usage of isValidJson(x)
var json = '{"firstname":"Hans","secondname":"Peter"}';
if(isValidJson(json)) {
	// do something
}





