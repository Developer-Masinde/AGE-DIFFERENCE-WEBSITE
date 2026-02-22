

// 
// Programme1
age = 18;

if (age < 18) document.write("Am a child <br>");
if (age >= 18) document.write("Am an adult <br>");

// // Javascript Events

const button1 = document.getElementById("button1");


//  event listener
// single click.
button1.addEventListener("click", function () {
  
  console.log("The button was click");
});