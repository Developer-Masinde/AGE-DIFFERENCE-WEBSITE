// Named function
// Named Function
function enterDetails( county,name, gender,age) {
  return county +name + gender + age;
}




// Arrow Function
const checkPasspo = (details) =>{
  return details;
  county + name + gender + age;
};


// Programme1
age = 18;

if (age < 18) document.write("Am a child <br>");
if (age >= 18) document.write("Am an adult <br>");


function runProgram() {
  let county = document.getElementById("county").value;
  let name = parseInt(document.getElementById("name").value);
  let gender = parseInt(document.getElementById("gender").value);
  let age = parseInt(document.getElementById("age").value);

  let details = enterDetails(county,name,gender,age);
  displayResult(county, name, gender, age);
  
  
  document.getElementById("output").innerHTML = message;
}

// // Javascript Events

const button = document.getElementById("button");


//  event listener
// single click.
button.addEventListener("click", function () {
  
  console.log("The button was click");
});