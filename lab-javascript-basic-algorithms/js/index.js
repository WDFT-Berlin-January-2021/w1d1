// Iteration 1: Names and Input

const hacker1 = 'Marco';
console.log("The driver's name is ", hacker1);

const hacker2 = 'Seamus';
console.log("The driver's name is ", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length == hacker2.length) {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
} else {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
}

// Iteration 3: Loops
console.log(hacker1.toLocaleUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

const nameCompared1 = hacker1.localeCompare(hacker2);
const nameCompared2 = hacker2.localeCompare(hacker1);

if (nameCompared1 === -1) {
    console.log(`The driver's name goes first.`);
} else if (nameCompared2 === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

//BONUS
// #### Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes:
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"

const phraseToCheck = 'A man, a plan, a canal. Panama';

var re = /[\W_]/g;

const lowerCased = phraseToCheck.toLowerCase().replace(re, ' ');

const reversed = lowerCased.split('').reverse().join('');

const upperCased = reversed[0].toUpperCase() + reversed.slice(1);
console.log(upperCased);

if (lowerCased == upperCased) {
    console.log('This phrase is a palindrome!');
} else {
    console.log('This phrase is not a palindrome');
}
