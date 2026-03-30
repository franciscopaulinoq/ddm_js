const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

const celsiusTemperature = 99;
console.log(`${celsiusTemperature}°C equivale a ${celsiusToFahrenheit(celsiusTemperature).toFixed(1)}°F`);