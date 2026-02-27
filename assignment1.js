 
// Arrow Function
const checkAge = (age) => {
  return age >= 18;
};


// Anonymous Function
const displayResult = function (county,name,gender,age) {
  let results = "COUNTY:" + county + "<br>";
 results += "NAME: " + name + "<br>";
  results += "GENDER: " + gender + "<br>";
  results += "AGE: " + age + "<br>";
  document.getElementById("output").innerHTML = results;
};


function runProgram() {
  let county = document.getElementById("county").value;
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let age = parseInt(document.getElementById("age").value);

  let ageChecker = checkAge(age);
  displayResult (county,name,gender,age);
}

