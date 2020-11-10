// ES 6
// let's talk about scope - the area where a variable can be accessed
// var gets hoisted - moved to the top and assigned a value of undefined
console.log(message);
var message = 'Hello';
// var can be available in the function (if declared inside a function) or the global scope
// example : 
// var message = "Hello from the global scope!";
function sayHelloFromLocalScope() {
    var greeting = "Hello from functional/local scope!";
    return greeting;
}
console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined
// this only applies to functions it doesn't apply to if statements or loops
// using var variables can not only be reassigned, they can even be redeclared
// this does not produce an error
var message = "Hello from the global scope!";
var message = "This is the second message.";
// let is block scoped - block is everything within { }
// let can't be redeclared
let name = "Ironhacker";
// let name = "Hacker"; -> throws an error
if (true) {
    let name = "Ted";
    console.log(`Name inside if statement: ${name}`);
}
console.log(`Name outside if statement: ${name}`);
// Name inside if statement: Ted
// Name outside if statement: Ironhacker
// Destructuring
// destructuring is an easy way of extracting data from objects
let person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal"
};
let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;
console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);
// here we are extracting name, age and favoriteMusic from the person object
// same functionality but with object destructuring :
let person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal"
};
let { name, age, favoriteMusic } = person;
console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);
// it also works with nested objects:
const person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal",
    address: {
        street: "Super Cool St",
        number: 123,
        city: "Miami"
    }
};
let {
    name,
    age,
    favoriteMusic,
    address
} = person;
console.log(address.street); // <== Super Cool St
// Bonus: Aliasing and Destructuring from a nested structure
// here we are aliasing the name to a variable called personName and the city we destructure 
// from one level down in the address object
// const { name: personName, age, hobby, student, address: { city }, address } = person;
// console.log(address);
// const personName = person.name;
// const age = person.age;
// const hobby = person.hobby;
// console.log(personName);
// Array destructuring
const numbers = ["one", "two", "three", "four", "five"];
// take the first element 
const [first] = numbers;
console.log(first); // <== one
// take the first three elements
const [first, second, third] = numbers;
console.log(first, second, third); // <== one two three
// take the second element only
const [, second] = numbers;
console.log(second); // <== two
// if you use more variables than items in the array, there won't be an error but 
// the variables will be undefined
const [a, b] = [1];
console.log(b);  // => undefined
// what is the result if we log a, b, c and d?
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);   // => 3, 4, undefined, 1 
// spread operator
// returns the contents without the data structure
const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];
const animals = [...mammals, ...reptiles];
console.log(animals);
// other use of spread operator -> rest parameters
// the spread parameter as a function argument puts the parameters into an array with 
// the name to the right of the three dots
function rest(...numbers) {
    return numbers;
}
// exercise : so we could write a function that gets a variable number of arguments and returns the sum
rest(3, 4, 5)
// exercise : https://repl.it/@janRedmann/RestAndSpread
// repl solution 
/*
// Objects
const car = {
    make: 'Volvo',
    year: 1995,
    engine: {
        fuel: 'petrol',
        hp: 80
    }
}
// extract the make and year from the car in one line
const {make, year}= car;
console.log(make, year)
// extract the fuel and hp from the car in one line
const { fuel, hp } = car.engine;
console.log(fuel, hp);
// Arrays
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Extract the first two values
/
console.log(zero, one); // 0 1
// Extract all the values but the first one from the array
//
console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// Strings
const str = "Hello World!"
// Using the spread, return an array of all characters in `str` upperCased and reversed
//
console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
*/
// ES 6 Advanced 
// Arrow Syntax
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = numbers.filter(function (singleNumber) {
    return singleNumber % 2 === 0;
});
console.log(evens);
// [ 2, 4, 6, 8 ]
// turn this into an arrow function 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = numbers.filter(singleNumber => singleNumber % 2 === 0);
console.log(evens);
// [ 2, 4, 6, 8 ]
// we can use default parameters in ES 6
// we can write a function increment() - that gets two numbers and increments the first parameter by the second
// number. If only one parameter is provided we increment by one, so the second parameter has a default value
// of one
const increment = (number, increment = 1) => {
    return number + increment;
}
// this and arrow functions 
class Person {
    constructor() {
        this.age = 0;
    }
    growUp() {
        setInterval(function () {
            // this here is the window object because that
            // is the context where the callback is executed
            // console.log(this)
            this.age++
            console.log(this.age)
        }, 1000)
    }
}
const person = new Person();
person.growUp();
// one workaround is assign the this above to another variable and use 
// it from thereon instead of this
class Person {
    constructor() {
        this.age = 0;
    }
    growUp() {
        // console.log('this in grow up:', this);
        let that = this;
        setInterval(function () {
            // console.log('that in setInterval:', that)
            that.age++
            console.log(that.age)
        }, 1000)
    }
}
const person = new Person();
person.growUp();
// option 2 : bind this
class Person {
    constructor() {
        this.age = 0;
    }
    growUp() {
        // we declare the function outside of setInterval
        function cb() {
            this.age++;
            console.log(this.age);
        }
        // then we reassign the function and call the bind() function on the
        // function - bind creates a new function that, when called, has its this
        // keyword set to the provided value,
        cb = cb.bind(this)
        cb.bind(this);
        setInterval(cb, 1000)
    }
}
const person = new Person();
person.growUp();
// option 3 : change callback in setIntervall to arrow function to make it work
// Promises 
// A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation
function createRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 2) {
            return reject(new Error('Invalid number of arguments'));
        }
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }, 3000);
    });
}
createRandomNumber(1, 4).then(response => {
    console.log('Operation successfull: ', response);
}).catch(err => {
    console.log('The following error ocurred:', err.message);
});
// same using async await
// show first without the try catch
async function getNumber() {
    try {
        const number = await createRandomNumber(1, 4);
        console.log(number)
    } catch (error) {
        console.log('An error occured with the following message', error);
    }
}
getNumber();

// ternary operator

const isEvenOrOdd = (number) => {
    // if (number % 2 === 0) {
    //   return 'is even'
    // } else {
    //   return 'is odd'
    // }
    // ternary operator
    //this is true ? do this : do another thing
    return number % 2 === 0 ? 'is even' : 'is odd'
}

isEvenOrOdd(5)