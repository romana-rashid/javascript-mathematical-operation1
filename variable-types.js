var shirtPrice = 200;
console.log(typeof shirtPrice);
var tshirtPrice = '200';
console.log(typeof shirtPrice);
console.log(typeof tshirtPrice);

var isRaining = true;
console.log(isRaining);
var isRomantic;
console.log(isRomantic);

var today = new Date();
console.log(typeof today);

//special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
// console.log(total.toFixed(1));
total = total.toFixed(1); //returns a string representative number
console.log(parseFloat(total)); //now it is a float number