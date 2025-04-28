let score = 100;
score = 200;

// score will be updated to 200.
// Because let allows me to reassign variables after their initial declaration.

const level = 5;
level = 10;

// It will get a TypeError:
// "Assignment to constant variable."

// Because const doesn't allow reassignment after it's declarated.

const person = { name: "Ahmed" };
person.name = "Ali";

// person.name will be updated to "Ali".

// Because in const, we can't reassign the object itself, 
// but we can change the properties of the object.

let age = 21;
console.log(`Hello, ${age}!`);

// Hello, 21!
// Using backticks (`) and ${} is called a template literal, which makes string interpolation easy.

