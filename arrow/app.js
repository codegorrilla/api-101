// const sayHello = function(){
//     console.log('Hello');
// }

//One line function does not need braces
//const sayHello = ()=> console.log('Hello');

//const sayHello = ()=> 'Hello there';

// sayHello();
//console.log(sayHello());

//Return objects
const sayHello = ()=> ({msg: 'Hello world'});
console.log(sayHello());

//Parameters - single params does not need parenthesis
const sayName = name => console.log(`Hello ${name}`);
sayName('Sanjib');

//multiple params need parenthesis
const multiParam = (firstName, lastName)=> console.log(`Hello ${firstName} ${lastName}`);
multiParam('Sanjib', 'Adhya');

//
const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(user){
//     return user.length;
// });

//Shortest
const nameLengths = users.map(user => user.length);

console.log(nameLengths);


