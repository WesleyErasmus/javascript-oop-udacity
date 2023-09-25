// INVOKING OBJECT METHODS

// Object Methods
function sayHello () {
    console.log("Hi there!");
};
sayHello();
// Hi There!

const developer = {
    name: "Wesley"
};

/* If we want to add the sayHello() function into the developer object, we can add the same way as we add other new properties: by providing property name, then giving it a value. This time, the value of the property is a function! */
developer.sayHello = function () {
    console.log("Hi there!");
};

console.log(developer);
/* {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
}
*/

// Calling Methods

/* We can access a function in an object using the property name. You can use dot notation or square bracket notation */
developer.sayHello(); // dot notation
developer['sayHello'](); // square bracket notation

// Passing Arguments Into Methods

developer.favoriteLanguage = function (language) {
    console.log(`My favorite language is ${language}`);
};
console.log(developer);
/* const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
}; */
developer.favoriteLanguage('JavaScript');
// My favorite language is JavaScript

// Expression that invokes the alerter() function in the following array, myArray:
const myArray = [
    function alerter () {
        alert('Hello!');
    }
];
// myArray[0]();

// Expression that invokes the function referenced by the bell object's ring property:
const bell = {
    color: 'gold',
    ring: function () {
        console.log("Ring ring ring!");
    }
};
bell.ring();
// Ring ring ring!

// Call Methods by Property Name

const greeter = {
    greet: function hello () {
        console.log("Hello!");
    }
};
// the greet property points to a function with a name: hello. Whether this function is named or not, greet is invoked the same way:
greeter.greet();
// Hello

// A Method can Access the Object it was Called On. E.g.:
const triangle = {
    type: 'scalene',
    identify: function () {
        console.log(`This is a ${this.type} triangle`);
    }
};

/* Inside the identify() method, the value 'this' is used. When you say 'this', what you're really saying is "this object" or "the object at hand." 'this' is what gives the identify() method direct access to the triangle object's properties: */
triangle.identify();
// This is a scalene triangle

// The whatIsThis function illustrates that "this" gives a method in an object access to all the properties in the object also allowing it to manipulate the object's properties
const dog = {
    name: 'Skeeter',
    age: 7,
    whatIsThis: function () {
        console.log(this);
    }
};
dog.whatIsThis();
// {name: 'Skeeter', age: 7, whatIsThis: ƒ}

const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
        this.height += 1;
    }
};
tree.growOneFoot();
console.log(tree.height);
// 81

// A refresher on "this" keyword: It refers to the current object context, giving access to properties and methods within the object
const chameleon = {
  eyes: 2,
  lookAround: function () {
    /* The dollar sign $ is part of the syntax used for template literals to embed expressions within a string */
    console.log(`I see your ${this.eyes} eyes looking around!`);
  },
};
chameleon.lookAround();
// "I see your 2 eyes looking around!"