//alert('Hello from the other side.');

//Variables
//==============
var name = 'Emmanuel';
let department = "Economics";

console.log('My name is ', name, ' and my department is ', department);

//Assignment operator
///=============
let x = 34;
let y = 10;
let z = x % y;
console.log(z); //4

//The value of x is at this point is 34

x++; //x = x + 1
console.log(x); //35

//The value of x is at this point is 35

x--; //x = x - 1
console.log(x); //34

const pi = 3.142;

//Assignment Operators
//====================

let a = 20;
a += 4; // a = a + 4
console.log(a); //24

a -= 5; //a = a - 5
console.log(a); //19



//Comparison Operators.
console.log(a > 20); //false
console.log(a <= 21); //true
console.log(a < 19); //false
console.log(a >= 20); //false

//String Concatenation
let fname = 'John';
let lname = 'Wick';
let fullname = fname + lname;
console.log(fullname); //JohnWick

console.log(fullname.length); //8

console.log(fname + a); //John19
console.log(fname.length); //4


//Logical Operator
let b = 5;

console.log(a < 20 && b > 2); //true;
console.log(a >= 21 && b < 5); //false;
console.log(a >= 20 || b < 5); //false
console.log(!(a >= 20)); //true


//Array
let names = ["John", "Jennifer", "Peter", "Victoria", "Sandra"];
let numbers = [88, 12, 34, 25, 90, 100];

//index
console.log(names[2]); //Peter
console.log(names[4]); //Sandra

console.log(numbers[4]); //90
console.log(names[0]); //John

names.push('Ken');

console.log(names[5]); //Ken

names[2] = 'Emmanuel'; //replacement
console.log(names[2]); //Emmanuel

console.log(numbers.length); //6
console.log(names.length); //6


//Control statement
let i = 24;

if (i > 30) {
    console.log('Big number');
} else {
    console.log('Small number');
}