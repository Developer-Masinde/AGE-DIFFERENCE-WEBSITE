// Named Function
function calculateTotal(math, english) {
  return math + english;
}

// Arrow Function
const checkPass = (total) => {
  return total >= 20;
};

// Anonymous Function
const displayResult = function (name, total, passed) {
  let message = "student:" + name + "<br>";
  message += "Total Marks:" + total + "<br>";
  message += "status:" + (passed ? "passed ✔️" : "Failed ❌");

  document.getElementById("output").innerHTML = message;
};

function runProgram() {
  let name = document.getElementById("name").value;
  let math = parseInt(document.getElementById("math").value);
  let english = parseInt(document.getElementById("english").value);

  let total = calculateTotal(math, english);
  let passed = checkPass(total);
  displayResult(name, total, passed);
}
