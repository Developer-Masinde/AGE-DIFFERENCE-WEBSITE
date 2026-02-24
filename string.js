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

let sentence = "I love JavaScript.JavaScript is fun";

console.log(sentence.replace("JavaScript","PHP"));
console.log(sentence.replaceAll("JavaScript", "PHP"));


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

