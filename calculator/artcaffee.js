function total() {
  let cappuccinoPrice = 250;
  let caffeLatterPrice = 300;
  let whiteCoffeePrice = 150;

  // Get Quantities from inputs
  let qty1 = document.getElementById("qty1").Value;
  let qty2 = document.getElementById("qty2").Value;
    let qty3 = document.getElementById("qty3").Value;
    
    // Convert empty inputs to 0
    qty1 = qty1 ? parseInt(qty1) : 0;
    qty1 = qty2 ? parseInt(qty2) : 0;
    qty1 = qty3 ? parseInt(qty3) : 0;
    

    // calculate totals
    let totalCost =
        qty1 * cappuccinoPrice + qty2 * caffeLatterPrice + qty3 * whiteCoffeePrice;

    //   Display result
    document.getElementById("total").innerHTML = "Ksh." + totalCost.toFixed(2);
}

