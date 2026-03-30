

function printReceipt() {
  const receiptContent = document.getElementById("receipt").innerHTML;

  const printWindow = window.open("", "", "width=400,height=600");

  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt</title>
        <style>
          body {
            font-family: Arial;
            padding: 20px;
          }
          h2 {
            text-align: center;
          }
        </style>
      </head>
      <body>
        ${receiptContent}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
}





  