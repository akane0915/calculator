// Define number1 and number2 Code
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));

// Addition Code
var add = function(number1,number2){
  return number1 + number2;
};

// Subtraction Code
var subtract = function (number1,number2){
  return number1 - number2;
};

// Multiplication Code
var multiply = function (number1,number2){
  return number1 * number2;
};

// Division Code
var divide = function (number1,number2){
  return number1 / number2;
};

// Call Results Code
var result = divide(number1,number2);

alert(result);
