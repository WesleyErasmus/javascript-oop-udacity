// FUNCTIONS ARE FIRST CLASS FUNCTIONS

/*
In JavaScript, functions are first-class functions. This means that you can do with a function just about anything that you can do with other elements, such as numbers, strings, objects, arrays, etc. JavaScript functions can:
- Be stored in variables
- Be returned from a function.
- Be passed as arguments into another function.
*/


// FUNCTIONS CAN RETURN FUNCTIONS
function alertThenReturn() {
    alert('Message 1!');

    return function () {
        alert('Message 2!');
    }
};
console.log(alertThenReturn());
// Only returns 'Message !' as none of the code from the inner function is invoked. We can, however, assign a variable to the inner function
const innerFunction = alertThenReturn();
console.log(innerFunction());
// alerts 'Message 1!' then alerts 'Message 2!'

// ALTERNATIVELY, we can invoke the function immediately without storing it in a variable which using a second set of parentheses to the expression alertThenReturn()():
alertThenReturn()();
// alerts 'Message 1!' then alerts 'Message 2!'

