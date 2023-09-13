// ***** ARRAYS *****

const myArray = [];
const fruits = ['apple', 'banana', 'orange', 'grape', 'lychee'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);

// Array containing different data types
const mixedArr = [
    'Wesley', 32, true, ['gym', 'coding', 'diving']
];

// ***** OBJECTS *****
const myObject = {};

const car = {
    color: 'blue',
    year: 2000,
    isPreOwned: true
};

/*
 Another thing to note is that keys (i.e., the names of the object's properties)  are strings, but quotation marks surrounding these strings are optional as long as the string is also a valid Javascript identifier (i.e., you could use it as a variable name or function name). As a result, the following three objects are equivalent:
*/

const course1 = { courseId: 711 };    // ← no quotes around the courseId key
const course2 = { 'courseId': 712 };  // ← single quotes around the courseId key
const course3 = { "courseId": 713 };  // ← double quotes around the courseId key

// Accessing object values
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    published: 1960
};

console.log(book['title']);
console.log(book.title);

const javascriptObject = { name: "George Orwell", year: 1984 };

const menu = {
    name: 'Salted Caramel Ice Cream',
    price: 2.95,
    ingredients: ['butter', 'ice cream', 'salt', 'sugar'],
};

console.log(menu);

/* There are two ways to access object values. Dot notation and square bracket notation
*/

const bicycle = {
    colour: 'blue',
    type: 'mountain bike',
    wheels: {
        diameter: 18,
        width: 8
    }
};

console.log(bicycle['colour']); // square bracket notation
console.log(bicycle.wheels.width); // dot notation
console.log(bicycle['wheels']['diameter']); // square bracket notation

// ***** SUMMARY *****

// Reading Arrays
const mileTimes = [7.50, 6.25, 10.60, 8.88];
console.log(mileTimes[3]);

// Reading Objects
const populations = {
    china: 234567,
    brazil: 98765,
    india: 3865734
}
console.log(populations['brazil']);

// Reading Nested Objects
const greetings = {
    hello: {
        english: 'hi',
        french: 'bonjour',
        portuguese: 'oi'
    },
    goodbye: {
        english: 'bye',
        french: 'au revoir',
        portuguese: 'tchau'
    }
};
console.log(greetings['hello']['portuguese']);
console.log(greetings.goodbye.french);
