const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a,b) {
	return a + b;
};

const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
	return a ** b;
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
