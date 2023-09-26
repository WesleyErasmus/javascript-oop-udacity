// CALLBACK FUNCTIONS

// A function passed into another function as an argument is called a callback function.

// Example of a callback function:
function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
};

function returnsThree() {
    return 3;
};
// returnsThree is being invoked as a callback function
console.log(callAndAdd(2, returnsThree));
// 5

/*
// This is essentially what is happening:
function callAndAdd(n, callbackFunction) {
    return 2 + returnsThree();
}
*/

// NOTE: A function that takes another function in as an argument is called a "higher-order function"

// ARRAY METHODS
/*
In array methods functions are commonly passed into array methods and called on elements within an array (i.e., the array on which the method was called).
Here are a few array methods:
1. forEach()
2. map()
3. filter
*/

// forEach()
array.forEach(function callback(currentValue, index, array) {
  // function code here
});

// map()
const names = ["Peter", "Sarah", "Craig"];

const nameLengths = names.map(function (name) {
  return name.length;
});

// filter()
const namesLength = ["Peter", "Sarah", "Craig", "Sue", "Joe"];

const shortNames = names.filter(function (name) {
  return name.length < 3;
});