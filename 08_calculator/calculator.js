const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => {
    total += currentValue;
    return total;
  } , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => {
    total *= currentValue
    return total;
  },1);
};

const power = function(a, b) {
	let powerResult = a;
  for(let i = 1; i < b; i++){
    powerResult *= a;
  }
  return powerResult
};

const factorial = function(toFactorial) {
  let arr = [];
  for(let i =1; i <= toFactorial; i++){
    arr.push(i)
  }
  return arr.reduce((factorialResult, currentValue) => {
    factorialResult *= currentValue;
    return factorialResult;
  }, 1);
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
