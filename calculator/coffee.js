function total() {
  var Cappuccino;
  var Caffe latte;
  var White Coffee;
  var sum;
   Cappuccino= parseInt(document.getElementById("qty1").value);
   Caffe latte= parseInt(document.getElementById("qty2").value);
   White Coffee= parseInt(document.getElementById("qty3").value);
  sum = Cappuccino * 250 + Caffe latte  * 300 + White Coffee * 150;
  document.getElementById("Total-cost").innerHTML = "Ksh " + sum + ".00";
}
function submit() {
  alert("Your Order has been Submitted, Successfully!");
}
