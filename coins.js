// Requirements

// Write a program that will convert a dollar amount to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.


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

// Create variable to store values
var input = 0.67;
input = input * 100;
var coinQuarter = 25;
var coinDime = 10;
var coinNickel = 5;
var coinPenny = 1;

function coinCounter() {
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {};

    coinPurse.quarters = 0;
    coinPurse.dimes = 0;
    coinPurse.nickels = 0;
    coinPurse.pennies = 0;

    // console.log(input);
    // Evaluate the number of quarters first, then calculate and store the remainder.
    coinPurse.quarters = input / coinQuarter
    coinPurse.quarters = Math.floor(coinPurse.quarters)
    console.log(`There are ${coinPurse.quarters} quarters`);
    let remainder = input % coinQuarter;
    // console.log(remainder);

    // Modify the above based on the remainder.
    coinPurse.dimes = remainder / coinDime
    coinPurse.dimes = Math.floor(coinPurse.dimes)
    console.log(`There are ${coinPurse.dimes} dimes`);
    remainder = remainder % coinDime;
    // console.log(remainder);

    // Repeat
    coinPurse.nickels = remainder / coinNickel
    coinPurse.nickels = Math.floor(coinPurse.nickels)
    console.log(`There are ${coinPurse.nickels} nickels`);
    remainder = remainder % coinNickel;
    // console.log(remainder);

    // Repeat
    coinPurse.pennies = remainder / coinPenny
    coinPurse.pennies = Math.floor(coinPurse.pennies)
    console.log(`There are ${coinPurse.pennies} pennies`);
    remainder = remainder % coinPenny;
    // console.log(remainder);

    return coinPurse;
};

var coins = coinCounter()