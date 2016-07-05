/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var quarters = .25;
var dimes = .10;
var nickels = .05;
var pennies = .01;


function coinCounter () {

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarter1 = 0;
  coinPurse.dime1 = 0;
  coinPurse.nickel1 = 0;
  coinPurse.penny1 = 0;

  console.log(coinPurse);


  var dollarAmt = document.getElementById('dollarAmount');

  document.getElementById('submitBtn').addEventListener('click', function () {
    console.log('TESTING', dollarAmt.value);
    if (dollarAmt.value !== "") {
      coinPurse.nickel1 += 1;
      coinPurse.penny1 += 1;

      for (var i = dollarAmt.value; i >= .25; i-= .25) {
        coinPurse.quarter1++;

      }
      for (var i = dollarAmt.value; i >= .10; i-= .10) {
        coinPurse.dime1++;

      }
      for (var i = dollarAmt.value; i >= .05; i-= .05) {
        coinPurse.nickel1++;

      }
      for (var i = dollarAmt.value; i >= .01; i-= .01) {
        // console.log(coinPurse.penn);
        coinPurse.penny1++;

      }
      console.log('HELLO', coinPurse);

    }

  });





  return coinPurse;
}

var coins = coinCounter()
// console.log(coin s);
