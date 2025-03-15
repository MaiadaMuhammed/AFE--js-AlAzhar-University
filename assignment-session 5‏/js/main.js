// Q1
//  to declare myself
let Maiada = {
  name: "Maiada",
  age: 21,
  city: "Cairo",
};

//  add my job
Maiada.job = "Web Developer";

//  delete my city
delete Maiada.city;

//  edit my age's value
Maiada.age = 22;

//  to say hello
Maiada.greet = function () {
  console.log(`Hello, my name is ${this.name}!`);
};

//  my hobbies's Array
Maiada.hobbies = ["Coding", "cooking", "listening to podcast"];

console.log(Maiada);
Maiada.greet();

// ------------------------------------------------------

// Q2

let person = {
  name: "Maiada",
  age: 22,
  job: "Web Developer",
  hobbies: ["Coding", "cooking", "listening to podcast"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ------------------------------------------------------

// Q3 Use for...of on person Using Object.keys(), Object.values(), and Object.entries()

let girl = {
  name: "Maiada",
  age: 22,
  job: "Web Developer",
  hobbies: ["Coding", "cooking", "listening to podcast"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

//  to print property's names only using for..of with Object.values
console.log(" Property Names:");
for (let key of Object.keys(girl)) {
  console.log(key);
}

//  to print values only using for..of with Object.values
console.log("\n Property Values:");
for (let value of Object.values(girl)) {
  console.log(value);
}

//  to print each key with its value using for..of with Object.entries

console.log("\n Key-Value Pairs:");
for (let [key, value] of Object.entries(girl)) {
  console.log(`${key}: ${value}`);
}

// ------------------------------------------------------

// Q4 Copy person Using Two Ways and Modify the Copy

let me = {
  name: "Maiada",
  age: 22,
  job: "Web Developer",
  hobbies: ["Coding", "cooking", "listening to podcast"],
};

//  to copy the object with Spread Operator
let meCopy1 = { ...me };
meCopy1.nationality = "Egyptian";

//  to copy the object with Object.assign()
let meCopy2 = Object.assign({}, me);
meCopy2.nationality = "Egyptian";

//  check the objects
console.log(" Original me object:");
console.log(me);

console.log("\n Copy using Spread Operator:");
console.log(meCopy1);

console.log("\n Copy using Object.assign():");
console.log(meCopy2);

// ------------------------------------------------------

// Q5 Create an Array of Objects and Access It

//  make an array contain some objects
let people = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
];

// to Access and print the first person's name and job.
console.log("First Person's Name:", people[0].name);
console.log("First Person's Job:", people[0].job);

// ------------------------------------------------------

//Q6: Use some() on people

let people1 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

let isSomeoneOlderThan30 = people1.some((person) => person.age > 30);

console.log(
  "Is there at least one person older than 30?",
  isSomeoneOlderThan30
);

// ------------------------------------------------------

//Q7:  Use every() on people

let people2 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

let doesEveryoneHaveAJob = people2.every(
  (person) => person.job !== undefined && person.job !== ""
);

console.log("Does everyone have a job?", doesEveryoneHaveAJob);

// ------------------------------------------------------

//Q8:  Use forEach() on people
let people3 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

// to print data with forEach()
people3.forEach((person) => {
  console.log(`Name: ${person.name}, Job: ${person.job}`);
});

// ------------------------------------------------------

//Q9: Use map() on people to Perform an Action (Multiply Age by 2)
let people4 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

// to [ Multiply Age by 2 ] using map()
let doubledAges = people4.map((person) => person.age * 2);

// print the new array
console.log(doubledAges);

// ------------------------------------------------------

//Q10: Use filter() on people
let people5 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Laila", age: 23, job: "Backend Developer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

//  to find developers only
let developers = people5.filter((person) => person.job.includes("Developer"));

console.log(developers);

// ------------------------------------------------------

//Q11: Use reduce() on people
let people6 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Laila", age: 23, job: "Backend Developer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

// to get the total age by reduce()
let totalAge = people6.reduce((sum, person) => sum + person.age, 0);

console.log("Total Age:", totalAge);

// ------------------------------------------------------

//Q12: Use find() on people (Filtered from Q10)
let people7 = [
  { name: "Maiada", age: 21, job: "Web Developer" },
  { name: "Malika", age: 24, job: "Software Engineer" },
  { name: "Nouran", age: 23, job: "UI/UX Designer" },
  { name: "Laila", age: 23, job: "Backend Developer" },
  { name: "Osama", age: 31, job: "Project Manager" },
];

//  to find the first develover using find()
let firstDeveloper = people7.find((person) => person.job.includes("Developer"));

console.log(firstDeveloper);
