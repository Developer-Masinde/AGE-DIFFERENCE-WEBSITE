// variables and data types
age = 20;
studentName = "Joel";
color = "Red";
registrationStatus = true;
Date = null;
Car = { name: "Toyota", year: 2026 };
Number = [1, 2, 3, 4, 5];
// my_course;
my_course = "javascript";
AGE = 65;

// Reading variable values
console.log(age);
console.log(studentName);
console.log(color);
console.log(registrationStatus);
console.log(Date);
console.log(Car);
console.log(Number);
console.log(my_course);

// VAR VARIABLE
var number = 10;
number = 50;
console.log(number);

const number2 = 15;
console.log(number2);

let number3 = 67;
number3 = 75;
console.log(number3);

// let variables
if (true) {
  let x = 5;
  console.log(x);
}

// console.log(x);
console.log(age);

// operators

a = 20;
console.log(a);

b = 40;
console.log(b);

// Addition
answer1 = a + b;
console.log(answer1);
answer2 = a - b;
console.log(answer2);

// Division
answer3 = a / b;
console.log(answer3);

// Multiplication
answer4 = a * b;
console.log(answer4);

//Increment
answer5 = ++a;
console.log(answer5);

// compariosn operators
console.log(2 == 5);

console.log(5 == "5");

console.log(6 === 6);

// Greater than & Less than
console.log(5 > 8);

console.log(3 < 9);

// Greater than and equal to
console.log(9 >= 3);

console.log(4 <= 8);

// Programme1
age = 17;
age2 = 25;

if (age < 18) document.write("Not an adult <br>");
if (age2 >= 5) document.write("Am an adult <br>")
if (age2 > 18) document.write("Your an adult <br>");
if (age <= 34) document.write("Never an adult <br>");


// logical operatoprs (here all conditions should be achieved)
let age3 = 20;
let hasID = true;

if (age3 >= 18 && hasID) {
  console.log("You can enter");
  
}

// here, any condition can be met(using pipe symbol)
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) document.write("You can relax today"); 

// Functions
  function sayHello() {
  console.log(("Hello, world")); 
  
}; 
  
sayHello();

//
const helloStudents = function () {
  console.log("Hello,Students");
  
};
helloStudents();

// Arrow functions
e = 2;
f = 10;
const add = (e, f) => e + f;

console.log(add(e,f));

// Named functions with paramewters
function greetUser(newUser) {
  console.log("Hello," + newUser + "!");
  
};

greetUser("Masinde");

// Anonymous
const subtract = (x, y) => {
  return x - y
};
console.log(subtract(10, 4));

// Arrow function
const square = x => x * x;

console.log(square(6));


// objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: "true",  
}
console.log("person");


let person2 = {
  firstName: "John",
  lastName: "Doe",
  Age: 30,
  isEmployed: "true",
};
console.log("person2");
console.log(person2.firstName);
console.log(person2.Age);

// How to change a value of the property.
let book1 = { title: "Javascript Basics", pages: 200 };
// i.e changing pages value.
 
let book2 = { title: "Javascript Basics", pages: 200 };
book2.pages = 300
console.log(book2);

// changing book title.
let book3 = { title: "Javascript Basics", pages: 200 };
book3.title = "Html Bsics"
console.log(book3);

// how to add a property.
let book4 = { title: "Javascript Basics", pages: 200 };
book4.writer = "Masinde Dev"
console.log(book4);

// how to delete a property.
let book5 = { title: "Javascript Basics", pages: 200 };
book5.writer = "Masinde Dev";
delete book5.pages;
console.log(book5);



// More work on different properties.
let library = { title: "Masinde Masomo", Students: 850 };
// change title
let library2 = { title: "Masinde Masomo", Students: 850 };
library2.title = "Muliro Kusoma"
console.log(library2);


// add more property on the above
let library3 = { title: "Masinde Masomo", Students: 850 };
library3.establishedYear = "1999"
console.log(library3);

// delete any property on the above.
let library4 = { title: "Masinde Masomo", Students: 850 };
delete library4.Students;
console.log(library4);



// OBJECT CONSTRACTION
// named function
function student(fullName, course, duration) {
  this.fullName = fullName;
  this.course = course;
  this.duration = duration;
  this.details = function () {
    return this.fullName + "" + this.course + "" + this.duration }
}

let student1 = new  student( "Masinde Dev", "Web Development", "6months" );
let student2 = new  student( "Greg Dev", "Cyber Security", "6months" );
let student3 = new  student( "Brian Dev", "Web & App Development", "6months" );
let student4 = new student( "Joel Dev", "Web Design", "5months" );

console.log(student1.details());


// Javascript Events

const button1 = document.getElementById("button1");

// Add event listener
// single click.
button1.addEventListener("click", function () {
  
  console.log("The button was click");
  
});
// double click.
button1.addEventListener("dblclick", function () {
  
  console.log("The button was click");
  
});

// Mouse events
const box = document.getElementById("box");

// let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// let box listen for mouseout
box.addEventListener("mouseout", function () {

  box.innerHTML = "Mouse is out!";
});