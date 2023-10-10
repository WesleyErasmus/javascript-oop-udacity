// SCOPE
/* In JavaScript, "scope" refers to the context in which variables and functions are declared and accessed.

There are three main types of scope:

Global Scope:
- Variables declared outside of any function or block.
- Accessible from anywhere in the code.

Function Scope:
- Variables declared within a function.
- Accessible only within the function where they are declared.

Block Scope (ES6 and later):
- Variables declared using let and const within a block (e.g., inside loops or conditional statements).
- Accessible only within the block where they are defined.
*/

const myName = "Wesley";
// Global variable

function introduceMyself() {
  const person = "John";
  // Variable declared where introduce() is defined
  // (i.e., within introduce()'s parent function, introduceMyself())

  function introduce() {
    console.log(`Hello ${person}, I'm ${myName}!`);
  }
  return introduce();
}

introduceMyself();
// Hello John, I'm Wesley!

// JavaScript is Function-Scoped
/* variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.
 */

// Block Scoping
/* ES6 syntax allows for additional scope while declaring variables with the let and const keywords. These keywords are used to declare block-scoped variables in JavaScript, and largely replace the need for var.
 */

// Scope Chain
/* Whenever your code attempts to access a variable during a function call, the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up what is called the scope chain.
 */
function one() {
  two();
  function two() {
    three();
  }
  function three() {
    // function three's code here
  }
}
one();
/*
In the above example, when one() is called, all the other nested functions will be called as well (all the way to three()).

You can visualize the scope chain moving outwards starting at the innermost level: from three(), to two(), to one(), and finally to window (i.e., the global/window object). This way, the function three() will not only have access to the variables and functions "above" it (i.e., those of two() and one()) -- three() will also have access to any global variables defined outside one().
*/

// Variable Shadowing
/*
What happens when you create a variable with the same name as another variable somewhere in the scope chain?

JavaScript won't throw an error or otherwise prevent you from creating that extra variable. In fact, the variable with local scope will just temporarily "shadow" the variable in the outer scope. This is called variable shadowing.
*/

const symbol = "¥";

function displayPrice(price) {
    const symbol = '$';
    console.log(symbol + price);
}

displayPrice('80')
// $80

/* Scope chain order when searching for variables:
1st - local variables
2nd - parent function's variables
3rd - Parent function's parent function's variables
4th - global variables
*/