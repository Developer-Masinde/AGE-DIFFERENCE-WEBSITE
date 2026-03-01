// javascripts string methods
// string methods allow manipulation and transformation of strings values.

// Lengthy property
let text = "Am learning web developoment";
console.log(text.length);

let text2 = "hello world";
console.log(text2.toUpperCase());

let text3 = "JAVASCRIPT STRINGS";
console.log(text3.toLowerCase);
let text4 = "HTML"
console.log(text4.slice(0, 2));

let text5 = "Am learning web developoment and App";
console.log(text5.slice(4,9));

let text6 = "I love JavaScript.JavaScript is fun";

console.log(text6.replace("JavaScript","PHP"));
console.log(text6.replaceAll("JavaScript", "PHP"));


let userInput = " welcome Home! ";
console.log(userInput.trim());
console.log(userInput.trimStart());
console.log(userInput.trimEnd());

let greeting = "Habari Yako!";
console.log(greeting.repeat(4));

let myName = "Joel Masinde"
let myCourse = "Am  Learning Web Development"
let school = "At Inceptor Institute"
console.log(myName.concat("",myCourse,"",school));

console.log(myName+ "" + myCourse + "" + school);

console.log(myName+myCourse+school);

// Javascript Arrays
const courses = ["Web Design", "Cyber security", "Digital Marketing", "Computer Repair"];
console.log(courses);

// '' to view a single element
let course1 = courses[2];
console.log(course1);

//  ''replace an index
courses[0] = "Web Development"
console.log(courses);

// ''conversion from array to string
let newcourses = courses.toString();
console.log(newcourses);

// array and obect
const person = ["John", "Doe", 46];
const person2 = { firstName: "John", lastName: "Doe", age: 46 };
// Type of operator
let type1 = typeof person;
console.log(type1);

let type2 = typeof person2;
console.log(type2);

