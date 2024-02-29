let teclado = require (`prompt-sync`)();

let farenheit: number = parseFloat(teclado(`Digite a temperatura em °F: `));

let celcius: number = (5/9) * (farenheit - 32);

console.log(`O valor da conversão é: ${celcius}`);
