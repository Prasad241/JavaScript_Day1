function convertTemperature(degree, unit) {
  if (unit === 'C') {
    return convertToFahrenheit(degree) + 'F';
  } else {
    return convertToCelsius(degree) + 'C';
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));