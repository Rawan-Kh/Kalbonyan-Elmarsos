'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
  console.log('My name is Jonas');
}

// calling / tunning / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

const y = new Array(1991, 1984, 2008, 2020);

const friends1 = ['Michael', 'Steven', 'Peter'];
const firstName = 'Jonas';
const jonas1 = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends1];
console.log(jonas1);
console.log(jonas1.length);

// Exercise

// Add elements
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const newLength = friends1.push('Jay');
console.log(friends1);
console.log(newLength);

friends1.unshift('John');
console.log(friends1);

// Remove elements
friends1.pop(); // Last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // First
console.log(friends1);

console.log(friends1.indexOf('Steven'));
console.log(friends1.indexOf('Bob'));
friends1.push(23);
console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));
console.log(friends1.includes(23));

if (friends1.includes('Peter')) {
  console.log('You have a friend called Steven');
}

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: true,
  // calcAge: function(birthYear) {
  //    return 2037 - birthYear;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${
      this.firstName
    } is a ${this.calcAge()}-year old teacher, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license`;
  },
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know aout Jonas? Choose between firstName, lastName, age, job, and friends'
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(console.log(jonas[interestedIn]));
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.getSummary());

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping Arrays, Breaking and Continuing
const jonas2 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];

for (let i = 0; i < jonas2.length; i++) {
  // Reading from jonas2 array
  console.log(jonas2[i], typeof jonas2[i]);

  // Filling types array
  // types[i] = typeof jonas2[i];
  types.push(typeof jonas2[i]);
}

console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}
console.log(ages2);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas2.length; i++) {
  if (typeof jonas2[i] !== 'string') continue;

  console.log(jonas2[i], typeof jonas2[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas2.length; i++) {
  if (typeof jonas2[i] === 'number') break;

  console.log(jonas2[i], typeof jonas2[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas3 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas3.length - 1; i >= 0; i--) {
  console.log(i, jonas3[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
// Assignment #1 Functions
/**
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

const describeCountry = (country, population, capitalCity) => {
 return `${country} has ${population} people and its capital city is ${capitalCity}`;
};

const country1 = describeCountry('Egypt', '100 million', 'Cairo');
const country2 = describeCountry('Finland', '6 million', 'Helsinki');
const country3 = describeCountry('Saudi Arabia', '34 million', 'Riyadh');

console.log(country1);
console.log(country2);
console.log(country3);

// Assignment #2 Function Declarations vs. Expressions
/**
1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(population) {
 const worldPopulation = 7900000000;
 return ((population / worldPopulation) * 100).toFixed(1) + '%';
}

const chinaPercent = percentageOfWorld1(1441000000);
const egyPercent = percentageOfWorld1(102300000);
const saudiPercent = percentageOfWorld1(34810000);
console.log(chinaPercent, egyPercent, saudiPercent);

const percentageOfWorld2 = function (population) {
 const worldPopulation = 7900000000;
 return ((population / worldPopulation) * 100).toFixed(1) + '%';
};

const chinaPercent2 = percentageOfWorld2(1441000000);
const egyPercent2 = percentageOfWorld2(102300000);
const saudiPercent2 = percentageOfWorld2(34810000);
console.log(chinaPercent2, egyPercent2, saudiPercent2);

// Assignment #3 Arrow Functions
/**
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => {
 const worldPopulation = 7900000000;
 return ((population / worldPopulation) * 100).toFixed(1) + '%';
};

const chinaPercent3 = percentageOfWorld3(1441000000);
const egyPercent3 = percentageOfWorld3(102300000);
const saudiPercent3 = percentageOfWorld3(34810000);
console.log(chinaPercent3, egyPercent3, saudiPercent3);

// Assignment #4 Functions Calling Other Functions
/**
1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of  your choice
*/

const describePopulation = (country, population) => {
 const percent = percentageOfWorld1(population);
 return `${country} has ${
   population / 1000000
 } million people, which is about ${percent}% of the world.`;
};

const chinaDesc = describePopulation('China', 1441000000);
const egyDesc = describePopulation('Egypt', 102300000);
const saudiDesc = describePopulation('Saudi Arabia', 34810000);

console.log(chinaDesc, egyDesc, saudiDesc);

// Assignment #5 Introduction to Arrays
/**
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const populations = [1441000000, 102300000, 34810000, 125800000];

console.log(populations.length === 4);
const percentages = [
 percentageOfWorld1(populations[0]),
 percentageOfWorld1(populations[1]),
 percentageOfWorld1(populations[2]),
 percentageOfWorld1(populations[3]),
];

// Assignment #6 Basic Array Operations (Methods)
/**
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbours = ['Sudan', 'Libya', 'Saudi Arabia'];
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) {
 console.log('Probably not a central European country :D');
}

neighbours[1] = 'State of Libya';

// Assignment #7 Introduction to Objects
/**
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
 country: 'Egypt',
 capital: 'Cairo',
 language: 'Arabic',
 population: 102000000,
 neighbours: ['Sudan', 'Libya', 'Saudi Arabia'],
};

// Assignment #8 Dot vs. Bracket Notation
/**
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
*/

console.log(
 `${myCountry.country} has ${myCountry.population / 1000000} million ${
   myCountry.language
 }-speaking people, ${
   myCountry.neighbours.length
 } neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population += 2000000;
myCountry['population'] = myCountry['population'] -= 2000000;

// Assignment #9 Object Methods
/**
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

myCountry.describe = function () {
 console.log(
   `${this.country} has ${this.population / 1000000} million ${
     this.language
   }-speaking people, ${
     this.neighbours.length
   } neighbouring countries and a capital called ${this.capital}.`
 );
};

myCountry.describe();

myCountry.checkIsland = () => {
 this.isIsland = this.neighbours.length ? false : true;
};

// Assignment #10 The for Loop
/**
1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let voter = 1; voter <= 50; voter++) {
 console.log(`Voter number ${voter} is currently voting`);
}

// Assignment #11 Looping Arrays, Breaking and Continuing
/**
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
*/
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
 percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Assignment #12 Looping Backwards and Loops in Loops
/**
1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [
 ['Canada', 'Mexico'],
 ['Spain'],
 ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
 let neighbours = listOfNeighbours[i];
 for (let j = 0; j < neighbours.length; j++) {
   console.log(`Neighbour: ${neighbours[j]}`);
 }
}

// Assignment #13 The while Loop
/**
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

const percentages3 = [];
let i = 0;
while (i < populations.length) {
 percentages3.push(percentageOfWorld1(populations[i]));
 i++;
}

console.log(percentages3);