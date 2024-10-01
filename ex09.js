/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  const inputArr = input.split(" ");
  let result = [];
  inputArr.forEach((inputString, i) => {
    if (i == 0) {
      result.push(inputArr[0]);
    } else {
      result.push(inputString.charAt(0).toUpperCase() + inputString.slice(1));
    }
  });

  return result.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
