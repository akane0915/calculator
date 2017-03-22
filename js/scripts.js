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
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1,number2);
    $("#output").text(result);
  });

});
