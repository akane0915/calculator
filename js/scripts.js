// Business (Back-end) Logic
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

// User-Interface (Front-end) Logic
$(function(){
  $("form#calculator").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});
