const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em Celsius (°C): "));

// Conversões
let fahrenheit = (celsius * 9 / 5) + 32;
let kelvin = celsius + 273.15;

// Saída no terminal
console.log("\nPráticas");
console.log(`Temperatura em Celsius: ${celsius.toFixed(1)} °C`);
console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(1)} °F`);
console.log(`Temperatura em Kelvin: ${kelvin.toFixed(2)} K`);
