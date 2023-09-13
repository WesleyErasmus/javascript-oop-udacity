// CREATING OBJECTS

// Using literal notation
const myObject = {};

// Using the Object() constructor function
const myObjectConstructor = new Object();

// Objects are mutable. Modifying object properties
const cat = {
    age: 2,
    name: 'Bailey',
    meow: function() {
        console.log('Meow!');
    },
    greet: function (name) {
        console.log(`Hello ${name}`);
    } 
};

cat.age +=1;

console.log(cat.age);
// 3

cat.name = 'Bambi';

console.log(cat.name);
// Bambi

// Adding properties
const printer = {};
printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;
printer.print = function() {
    console.log('The printer is printing!');
};

console.log(printer);
/* {
  on: true,
  mode: 'black and white',
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
} */

// Removing properties
delete printer.mode;
console.log(printer);
/* {
  on: true,
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
} */
console.log(printer.mode);
// undefined

// expression to add wireless property with the value of true
printer['wireless'] = true;
console.log(printer);

// PASSING ARGUMENTS
// Passing a primitive (e.g., string, number, boolean, etc.). Primitives are immutable
/* 
Any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function. 
*/
function changeToEight (n) {
    n = 8;
}
let n = 7;
changeToEight(n)
console.log(n);
// 7

// Passing an object
let originalObject = {
    favoriteColor: 'green'
};

function setToBlue (object) {
    object.favoriteColor = 'blue';
};

setToBlue(originalObject);

console.log(originalObject.favoriteColor);
// blue

/*
In the above example, originalObject contains a single property, favoriteColor, which has a value of 'red'. We pass originalObject into the setToBlue() function and invoke it. After accessing originalObject's favoriteColor property, we see that the value is now 'blue'.
*/

const iceCreamRatings = {
    vanilla: '7/10',
    chocolate: '10/10'
};

const rating = iceCreamRatings;
console.log(rating.vanilla);
// 7/10

// changing the vanilla rating value
rating.vanilla = '8/10';
console.log(rating.vanilla);
// 8/10

// Comparing an Object with another Object
const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp Chirp')
  }
};
const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp Chirp')
  }
};

console.log(parrot === pigeon);
// false

const myBird = parrot;
console.log(myBird === parrot);
// true
