/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  // Your code here
  const TWENTY_DOLLER = 2000;
  const denominations = [
    { name: "twentyDollar", amount: 2000 },
    { name: "tenDollar", amount: 1000 },
    { name: "fiveDollar", amount: 500 },
    { name: "twoDollar", amount: 200 },
    { name: "oneDollar", amount: 100 },
    { name: "quarter", amount: 25 },
    { name: "dime", amount: 10 },
    { name: "nickel", amount: 5 },
    { name: "penny", amount: 1 },
  ];

  const result = {};

  let change = cash - total;

  denominations.forEach((denomination) => {
    const amount = denomination.amount;
    const DollarsNum = parseInt(change / amount);

    if (DollarsNum > 0) {
      result[denomination.name] = DollarsNum;
      change = change - DollarsNum * amount;
    }
  });

  // const twentyDollarsNum = parseInt(change / 2000);

  // if (twentyDollarsNum > 0) {
  //   result["twentydollars"] = twentyDollarsNum;
  //   change = change - twentyDollarsNum * 2000;
  // }

  // const tenDollarsNum = parseInt(change / 1000);
  // if (tenDollarsNum > 0) {
  //   result["tendollars"] = twentyDollarsNum;
  //   change = change - tenDollarsNum * 1000;
  // }

  return result;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
