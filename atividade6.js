var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContabilizadas = 0;
while (pessoasContabilizadas <= 4) {
    idade = perseInt(teclado("Digite a idade ".concat(pessoasContabilizadas, " ")));
    salario = perseFloat(teclado("Digite o salario do funcionamento ".concat(pessoasContabilizadas)));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
console.log("");
console.log("O total de pessoas que atende a condi\u00E7\u00E3o \u00E9 ".concat(totPessoasNaCondicao));
