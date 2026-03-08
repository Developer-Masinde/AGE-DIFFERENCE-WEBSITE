function total() {
  var Cappuccino;
  var Caffelatte;
  var Whitecoffee;
  var sum;
   Cappuccino= parseInt(document.getElementById("qty1").value);
   Caffelatte= parseInt(document.getElementById("qty2").value);
   Whitecoffee= parseInt(document.getElementById("qty3").value);
  sum = Cappuccino * 250 + Caffelatte  * 300 + Whitecoffee * 150;
  document.getElementById("total-cost").innerHTML = "Ksh " + sum + ".00";
}
  
  function submit() {
    alert("Your Order has been Submitted successfully, kindly wait patiently beloved high estemeed customer!");
}

