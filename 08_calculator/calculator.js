const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b, 1);
};

const power = function(a,b) {
  let power = a;
	for(let i = 1; i < b; i++){
    a = a * power;
  }
  return a;
};

const factorial = function(a,b) {
	for(let i = 0; i < b; i++){
    a = a * a;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
