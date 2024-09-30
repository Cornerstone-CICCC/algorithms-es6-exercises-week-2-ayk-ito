/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  const inputString = input.split(" ");
  let cazeList = [];

  let convertedInput = [];
  let output = "";
  const vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];

  const FIRST_PRIORITY = [];
  const SECOND_PRIORITY = [];
  const THIRD_PRIORITY = [];

  //check caze type
  if (typeof caze === "string") {
    cazeList.push(caze);
  } else {
    cazeList = caze;
  }

  cazeList.forEach((c) => {
    if (["camel", "pascal", "snake", "kebab", "title"].includes(c)) {
      FIRST_PRIORITY.push(c);
    } else if (["vowel", "consonant"].includes(c)) {
      SECOND_PRIORITY.push(c);
    } else {
      THIRD_PRIORITY.push(c);
    }
  });
  cazeList = FIRST_PRIORITY.concat(SECOND_PRIORITY, THIRD_PRIORITY);

  for (let l = 0; l < cazeList.length; l++) {
    switch (cazeList[l]) {
      case "camel":
        convertedInput.push(inputString[0]);
        for (let i = 1; i < inputString.length; i++) {
          convertedInput.push(inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1));
        }
        output = convertedInput.join("");
        break;
      case "pascal":
        for (let i = 0; i < inputString.length; i++) {
          convertedInput.push(inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1));
        }
        output = convertedInput.join("");
        break;

      case "snake":
        output = inputString.join("_");
        break;

      case "kebab":
        output = inputString.join("-");
        break;

      case "title":
        for (let i = 0; i < inputString.length; i++) {
          convertedInput.push(inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1));
        }
        output = convertedInput.join(" ");
        break;

      case "vowel":
        if (output === "") {
          for (let i = 0; i < inputString.length; i++) {
            const word = [];

            for (let j = 0; j < inputString[i].length; j++) {
              if (vowels.includes(inputString[i].charAt(j))) {
                word.push(inputString[i].charAt(j).toUpperCase());
              } else {
                word.push(inputString[i].charAt(j));
              }
            }
            convertedInput.push(word.join(""));
          }
          output = convertedInput.join(" ");
        } else {
          for (let j = 0; j < output.length; j++) {
            if (vowels.includes(output.charAt(j))) {
              output =
                output.substring(0, j) + output.charAt(j).toUpperCase() + output.substring(j + 1);
            }
          }
        }
        break;

      case "consonant":
        if (output === "") {
          for (let i = 0; i < inputString.length; i++) {
            const word = [];

            for (let j = 0; j < inputString[i].length; j++) {
              if (vowels.includes(inputString[i].charAt(j))) {
                word.push(inputString[i].charAt(j));
              } else {
                word.push(inputString[i].charAt(j).toUpperCase());
              }
            }
            convertedInput.push(word.join(""));
          }
          output = convertedInput.join(" ");
        } else {
          for (let j = 0; j < output.length; j++) {
            if (vowels.includes(output.charAt(j))) {
              output =
                output.substring(0, j) + output.charAt(j).toLowerCase() + output.substring(j + 1);
            }
          }
        }
        break;

      case "upper":
        if (output === "") {
          for (let i = 0; i < inputString.length; i++) {
            convertedInput.push(inputString[i].toUpperCase());
          }
          output = convertedInput.join("");
        } else {
          output = output.toUpperCase();
        }
        break;

      case "lower":
        if (output === "") {
          for (let i = 0; i < inputString.length; i++) {
            convertedInput.push(inputString[i].toLowerCase());
          }
          output = convertedInput.join("");
        } else {
          output = output.toLowerCase();
        }
        break;

      default:
        return output;
    }
  }
  return output;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

console.log(makeCaze("this is a string", ["consonant", "pascal"])); // ThisisaString
console.log(makeCaze("this is a string", ["vowel", "pascal"])); // ThIsIsAStrIng

console.log(makeCaze("this is a string", "upper")); // THISISASTRING
console.log(makeCaze("this is a string", "lower")); // thisisastring

module.exports = makeCaze;
