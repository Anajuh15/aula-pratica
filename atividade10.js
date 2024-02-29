var teclado = require("prompt-sync")();
var divisor = 4;
var dividendo = parseFloat(teclado("Digite o n\u00FAmero: "));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 par!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 \u00EDmpar"));
}
else {
    console.log("Algo deu errado!!");
}
