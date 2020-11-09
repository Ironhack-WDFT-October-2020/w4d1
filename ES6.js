// ES 6
// var gets hoisted
// console.log(message);
// var message = 'Hello';
// var is either globally scoped or function scoped
var message = 'hello from the global scope';

function sayHelloFromLocalScope() {
    var greeting = 'hello from local scope';
    console.log(greeting);
}

if (true) {
    var user = 'tim';
}
// console.log(user);
// sayHelloFromLocalScope()
// console.log(greeting);
// console.log(message);

// var can also be redeclared
// var name = 'tim';
// var name = 'jeff';
// console.log(name);

// let is either globally scoped or blocked scoped
// block = {} after if or for or function


// Destructuring

// let person = {
//     name: 'Ironhacker',
//     age: 25,
//     favoriteShow: 'Devs',
//     address: {
//         street: 'Lobeckstr.',
//         city: 'Berlin'
//     }
// }
// let name = person.name;
// let age = person.age;
// let favoriteShow = person.favoriteShow;
// let { name, age, favoriteShow, address } = person;
// console.log(name, age, favoriteShow, address.city);
// access nested structures and aliasing
// let firstName = person.name;
// console.log(firstName);
// let { address: { city }, name: firstName } = person
// console.log(city, firstName);

// Desctructuring Arrays
// const numbers = ['one', 'two', 'three', 'four'];
// const [first, second, third] = numbers;
// console.log(first, second, third);
// second element only
// const [, second] = numbers;
// console.log(second);
// const [a, b = 2] = [1, 3];
// console.log(b);
const [a, b = 2, c, d = 1] = [3, 4];
// console.log(a, b, c, d); // -> // 3, 4, undefined, 1

// Spread Operator

const reptiles = ['snake', 'lizard'];
const mammals = ['kitten', 'dog'];
const animals = [...reptiles, ...mammals];
// console.log(animals);

function rest(...a) {
    console.log(a)
}
// rest(1, 2, 3)

// Arrow functions
const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(function (number) {
//     return number % 2 === 0;
// })
// const evens = numbers.filter(number => number % 2 === 0)

// const greet = () => 'hello'
// const greeting = greet()
// console.log(greet);
// console.log(evens);
// assign a default value to a parameter
const increment = (number, increment = 1) => number + increment
// function increment(number, increment = 1) {
//     return number + increment
// }
const result = increment(2); // => 3
// console.log(result);

// ternary operator
const isEvenOrOdd = number => {
    // if (number % 2 === 0) return 'is even'
    // else return 'is odd';
    // this is true ? do this : do another thing 
    return number % 2 === 0 ? 'is even' : 'is odd'
}
// const userName = 'jeff';
// const userX = userName === 'jeff' ? 'jeff' : 'timmy';
// console.log(isEvenOrOdd(3));


// arrow functions and this
// const human = {
//     age: 0,
//     display: function () {
//         console.log(this)
//     }
// }
// human.display()
// console.log(this.age);
// class Person {
//     constructor() {
//         this.age = 0;
//     }
//     growUp() {
//         console.log(this);
//         let x = this;
//         setInterval(function () {
//             console.log(this);
//             x.age++;
//             console.log(x.age);
//         }, 1000)
//     }
// }

// class Person {
//     constructor() {
//         this.age = 0;
//     }
//     // solution 2: bind this
//     growUp() {
//         function cb() {
//             this.age++;
//             console.log(this.age);
//         }
//         cb = cb.bind(this);
//         setInterval(cb, 1000)
//     }
// }

class Person {
    constructor() {
        this.age = 0;
    }
    growUp() {
        // solution 3: just use an arrow function
        console.log(this);
        setInterval(() => {
            console.log(this);
            this.age++;
            console.log(this.age);
        }, 1000)
    }
}
// const person = new Person();
// person.growUp()

// Promises

// A Promise is a JavaScript object representing the eventual 
// completion or failure of an asynchronous operation

function createRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 2) {
            return reject(new Error('Invalid number of args!'));
        }
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }, 3000)
    })
}

// createRandomNumber(1, 4).then(function (response) {
//     console.log('Operation successfull: ', response);
// }).catch(err => {
//     console.log('The following error ocurred:', err.message);
// });

// async await

async function getNumber() {
    // try catch for error handling
    try {
        const number = await createRandomNumber(1);
        console.log(number);
    } catch (error) {
        console.log('an error occured', error.message);
    }
}

getNumber()







