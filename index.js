// variables
let firstName = 'Ilias';
let lastName = 'Tselios';

// variables that cannot be changed
const age = 52

console.log(firstName, lastName, age);
console.log('%s %s, %4.1f', firstName, lastName, age); // numbers: %d->52, %f->52.000000, %4.1f->52.0

// objects!
let person = {
    personName: 'Ilias',
    age: 52
};

person.personName = 'John';
person['personName'] = 'Jack';

console.log(person.personName);

// arrays like Lua, but start from 0
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 42;     // arrays can have diff types
console.log(selectedColors);
console.log(selectedColors[2]);
console.log('Array length: %d', selectedColors.length);     // arrayname. -> various options

// functions
function greet(name, lastName) {
    console.log('Hello! ' + name + ' ' + lastName + '!');
}

greet('Ilias', person.personName);

function square(number) {
    return number * number;
}

console.log(square(person.age));

// Strings
const message = 'hi';   // String primitive
const another = new String('hi!');  // String object
message.length  // Using . turns the primitive to an object

// Conditionals if...else Switch...case
const d = new Date();
let hour = d.getHours();

if (hour >= 6 && hour < 12) {
    greet('Good morning', person.personName);
}
else if (hour >= 12 && hour < 18) {
    greet('Good afternoon', person.personName);
}
else {
    greet('Good evening', person.personName);
}


// Factory function: creates diff objects
function createCircle(name, radius) {
    return {
        name,
        radius,
        perim: (2 * Math.PI * radius),
        area: Math.PI * radius * radius
        }
   
}

// Create 2 obj
const circle1 = createCircle('Circle 1', 50);
const circle2 = createCircle('Circle 2', 100);

console.log('Perimeter of ' + circle1.name + ' is: ' +
    new Intl.NumberFormat("gr", {style: "unit", unit: "meter", maximumFractionDigits: 2}).format(circle1.perim)
    + ', and the area is: ' +
    new Intl.NumberFormat("gr-In", {style: "unit", unit: "meter", maximumFractionDigits: 2}).format(circle1.area) + '2');

console.log('Perimeter of ' + circle2.name + ' is: ' +
    new Intl.NumberFormat("gr", {style: "unit", unit: "meter", maximumFractionDigits: 2}).format(circle2.perim)
    + ', and the area is: ' +
    new Intl.NumberFormat("gr-In", {style: "unit", unit: "meter", maximumFractionDigits: 2}).format(circle2.area) + '2');


// canvas: draw the circles above!
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(circle1.radius + 1, circle1.radius + 1, circle1.radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(circle1.radius * 2 + circle2.radius, circle2.radius + 1, circle2.radius, 0, 2 * Math.PI);
ctx.stroke();
