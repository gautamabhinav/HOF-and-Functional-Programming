// Define the input string
const input = "hello world";

// Define the reverse function
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Define the function to print the reversed string after a delay of 2 seconds
function printReversedString(str) {
  setTimeout(function() {
    const reversedStr = reverseString(str);
    console.log(reversedStr);
  }, 2000);
}

// Call the printReversedString function with the input string
printReversedString(input);
