// Objects are used to hold information together

var theCar = {
		brand: "Volkswagen",
		type: "Passat Variant",
		fuel: "Hybrid",
		numberOfWheels: 4
};

// object properties are accessed in two ways
var theNumberOfWheels = theCar.numberOfWheels; // variable theNumberOfWheels now contains -> 4
var theTypeOfFuel = theCar["fuel"]; // variable theTypeOfFuel now contains -> "Hybrid"


// object properties are also set in two ways
theCar.fuel = "Diesel";
theCar["numberOfWheels"] = 3;
/*
	the object theCar now looks like this

	theCar = {
			brand: "Volkswagen",
			type: "Passat Variant",
			fuel: "Diesel",
			numberOfWheels: 3
	};
*/


// Object Methods

// a object method is a function stored as a property
var pet = {
	firstname: "Hans",
	lastname: "peter",
	age: 4,
	type: "dog",
	fullname: function() {
		return this.firstname + " " + this.lastname;
	}
}
// The this keyword to the "owner" of the function.
// In the example, this is the pet object that contains the fullname function.

// accessing object methods

var petName = pet.fullname(); // variable petName now contains -> "Hans peter"