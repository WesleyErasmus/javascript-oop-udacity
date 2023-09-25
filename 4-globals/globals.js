// THE WINDOW OBJECT

/*
The "window" object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, "window".
*/

/*
This window object has access to a ton of information about the page itself, including:

- The page's URL (window.location;)
- The vertical scroll position of the page (window.scrollY')
 -Scrolling to a new location (window.scroll(0, window.scrollY + 200); to scroll 200 pixels down from the current location)
- Opening a new web page (window.open("https://www.udacity.com/");)
*/

// Global Variables are Properties on "window"
/*
Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!
*/

// **NB** Only declaring variables with the var keyword will add them to the window object
var currentlyEating = 'pizza';

console.log(window.currentlyEating === currentlyEating);
// true

/* If you declare a variable outside of a function with either let or const, it will not be added as a property to the window object. */
let currentlyEating1 = "pizza";
console.log(window.currentlyEating1 === currentlyEating1);
// false

// GLOBAL FUNCTIONS ARE METHODS ON "window"
/*
Similarly to how global variables are accessible as properties on the window object, any global function declarations are accessible on the window object as methods
*/

function learnSomethingNew () {
    window.open('https://www.google.com');
}

console.log(window.learnSomethingNew === learnSomethingNew)
// true

// ## Avoid Globals
/*
 global variables and functions are not ideal. There are actually a number of reasons why, but the two we'll look at are:
- Tight coupling
- Name collisions
*/

// TIGHT COUPLING
/* Tight coupling is a phrase that developers use to indicate code that is too dependent on the details of each other. The word "coupling" means the "pairing of two items together." In tight coupling, pieces of code are joined together in a way where changing one unintentionally alters the functioning of some other code: */

var developer = "Wesley";
function wesleySaysHi () {
    console.log(`${developer} says hi!`);
};
console.log(wesleySaysHi());
// 'Wesley says hi!'

/*
In the code above, note that the developer variable is declared globally. The wesleySaysHi() function does not have a local variable that it uses to store the developer's name. Instead, it reaches out to the global variable and uses that. If we refactored this code by changing the variable from developer to frontend-developer, this would break the wesleySaysHi() function (or we'd have to update it there, too!). This is a (simple) example of tightly-coupled code.
*/

// NAME COLLISIONS
/*
A name collision occurs when two (or more) functions depend on a variable with the same name. A major problem with this is that both functions will try to update the variable and or set the variable, but these changes are overridden by each other.
*/
let counter = 1;
function addDivToHeader () {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'div number' + counter;

    counter = counter + 1;

    const headerSection = document.querySelector('header');
    headerSection.appendChild(newDiv);
};

function addDivToFooter () {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'div number' + counter;

    counter = counter + 1;

    const headerSection = document.querySelector('footer');
    headerSection.appendChild(newDiv);
}
/* Since both functions increment the counter variable, if the code alternates between calling addDivToHeader() and addDivToFooter(), then their respective <div>s will not have numerically ascending numbers. 
*/
