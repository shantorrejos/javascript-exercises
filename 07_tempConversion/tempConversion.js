const convertToCelsius = function(givenValue) {
  let valueCelsius = (givenValue - 32) * 5 / 9;

  if (!Number.isInteger(valueCelsius)) {
    return (Math.round(valueCelsius * 10) / 10);
  }
  return valueCelsius;
};

const convertToFahrenheit = function(givenValue) {
  let valueFahrenheit = (givenValue * 9/5) + 32
  if (!Number.isInteger(valueFahrenheit)) {
    return (Math.round(valueFahrenheit * 10) / 10);
  }
  return valueFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
