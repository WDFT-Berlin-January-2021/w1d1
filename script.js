// script
// console.log('hello world')

// single line comment

/*
multiline comment
*/

// Variables - named storage

// declaring variable
let client;
// multiple declarations at once
// let user, password;
// assignment - initialization - get's the value for the first time
client = 'chrome';
// let client = 'chrome';
// console.log('value of client: ', client);
// console.table(['a', 'b', 'c'])
// if variable is only declared it is undefined
// - if the variable does not exist we get a reference error
// console.log(age);

// naming
// some names are not possible
// cannot use js keywords
// first character must be a letter, underscore, 
// or dollar sign
// use camelcase
// let userName;

// with let we can reassign another value 
// let user = 'kevin';
// user = 'anna';
// console.log(user);

// const cannot be reassigned
// const age = 37;
// age = 38;

// whenever possible we use const never use var

// works - but don't do it (using without keyword)
// dog = 'rufus'
// console.log(dog);

// Data types
// number and string
// js is a dynamically typed language
// 2 types in js: primitives and objects
// 6 primitive types: number, string, boolean
// null, undefined and symbol

// let user = 'felix';
// console.log('the type is: ', typeof user);
// console.log(user.length);
// user = 42;
// console.log(user.length;
// console.log('the type is: ', typeof user);

// numbers

// numbers can be integers and floating numbers
const distance = 7000;
const price = 19.99;

// console.log('hello' * 3); -> NaN, not a number

// math operators
const sum = 1 + 1;
// 1 - 0;
// 4 * 5; 
// 4 / 2; division

// modulo (remainder)
// console.log(5 % 2);

// console.log(2 ** 3); // exponentiation

// assignment operator -> 
let x = 0;

// some shorthands
// add 1 to a variable
// x = x + 1
// shorter
x += 3;
console.log(x);
// even shorter for incrementing by 1
x++; // same as x = x + 1
// x-- // same as x = x - 1;

// shorthand for subtract 2 
x -= 2 // x = x - 2

// multiply by 3
x *= 3; // x = x * 3;

// divide by 4
x /= 4; // x = x /4;

// modulo 5
x %= 5; // x = x % 5

// to the power of 6
x **= 6; // x = x ** 6

// Strings - a sequence of characters

// let dog = 'rufus';
// dog = "rufus";
// dog = `rufus`;
// let user = 'felix'
// let message = 'hello ' + user
// let message = `hello ${user}`
// console.log(message);

// string properties and methods
let str = 'hello';
// gives us the length
// console.log(str.length);

// accessing characters
console.log(str.charAt(1));
console.log(str[1]);

// toUpperCase()
// console.log(str.toUpperCase()); // -> HELLO
// str += '!';
// str += '!';
// str += '!'; str = 'hello!!!'
// str = str.toUpperCase();
console.log(str);
// strings are immutable
const lastChar = str[str.length - 1]
console.log(lastChar);

// indexOf() -> returns the position of the first 
// occurence of the substring or - 1 if it's not in the 
// string 

console.log(str.indexOf('X'))
// lastindexOf() -> same as above but from the end
console.log(str.lastIndexOf('L'))

const firstCharacterUpperCase = str[0].toUpperCase();
// console.log(firstCharacterUpperCase);

// slice()
// slice returns a substring from a string 
// with a given range
console.log(str.slice(0, 2));
// if we use just one we take all the rest 
console.log(str.slice(2));
// takes all the string
console.log(str.slice());
// nice trick to get the last character
console.log(str.slice(- 1));
// take first two letters and turn them uppercase
// console.log(str.slice(0, 2).toUpperCase());

// let's bring string into the right format -> Hello
const formatted = str[0].toUpperCase() + str.slice(1)
console.log(formatted);

// Boolean expressions -> either evaluates to true or false

// boolean operators
// > < >= <=
// console.log(5 > 3)

// equal vs strictly equal
// this works bc of type casting -> string is turned into number
// console.log(4 == '4');
// strictly equal -> === -> the type must also match
// not equal : !== or !=


// logical operators
// logical or -> ||
console.log(5 > 3 || 5 < 3); // -> true

// logical and -> &&
console.log(5 > 3 && 2 < 3); // -> false

// falsy values : 0, '', null, undefined, NaN

// not operator -> negation
// you can also check if sth is not sth
console.log(str.length !== 1);

console.log(!0);
console.log(!false);

// undefined is the unintentional absence of value
// null is the intentional absence of value

// Conditionals and Loops

// const age = Number(prompt('what is your age'));
// console.log(typeof age);
// console.log('your age is: ', age);
// if (age >= 18) {
//     alert('You are allowed to drive')
// } else if (age === 17) {
//     alert('You can drive with another person')
// } else {
//     alert('You are too young to drive')
// }

// switch case
// const language = prompt('what is your mother tongue?');

// switch (language) {
//     case 'french':
//     case 'French':
//         console.log('bonjour')
//         break;
//     case 'english':
//         console.log('hello');
//         break;
//     default:
//         console.log('non recognized language');
// }

// Loops

// for loop

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// exactly the same with a while loop
let counter = 1;
while (counter < 11) {
    console.log(counter);
    counter++
}

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

