// EXTRACTING PROPERTIES AND VALUES

// Using Object() constructor function to instantiate new objects with the "new" keyword
const myNewObject = new Object();

/* The Object() function includes a few methods of its own to aid in the development of your applications. These methods are:
1. Object.keys()
2. Object.values()
*/

// OBJECT KEYS
// When Object.keys() is given an object, it extracts just the keys of that object, then returns those keys in an array:
const dictionary = {
  car: "automobile",
  apple: "healthy snack",
  cat: "cute furry animal",
  dog: "best friend"
};
console.log(Object.keys(dictionary));
// ['car', 'apple', 'cat', 'dog']

// OBJECT VALUES
// Likewise, if you want a list of the values of an object, you can use Object.values()
console.log(Object.values(dictionary));
// ['automobile', 'healthy snack', 'cute furry animal', 'best friend']

