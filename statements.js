// Javascript statements
// set of instrunctions to perform a specific task

// 1)expression statements
let p = 56;
console.log(p);

function sayHello() {
  console.log("Hello, World");
}

sayHello();

// 2 ) Declaration statements
// Used to declare variables and functions

let city = "Nairobi";
// 3 ) if statements
// controls the flow of the code
// used if only theres one condition

age = 25;
if (age > 18) {
  console.log("Adult");
}

// 4) if else statements
// used when you want two possible outcomes

if (age > 18) {
  console.log("Adult");
} else {
  console.log("minor");
}

// 5) else if statements
// used more than 2 conditions
let score = 85;


if (score >= 90) {
   console.log("Grade: A");
}
else if (score >= 80) {
  console.log("Grade: B");
 }
else if (score >= 70) {
  console.log("Grade: C");
 }
else{
  console.log("Grade: F");
}
 
// 6) Switch statements
// Used when yoy have many possible values

// *to use variable inside a function, must be put inside a parameter.

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default;
    console.log("Anither day");
    
}
 
// 7) For Loop statements
// Used when you know how many times you want to repeat Code.
for (let i = 0; i < 5; i++) {
  console.log(i); 
}