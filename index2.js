const { texto } = require('./base');
const exp = /João/gi;
//   1   2   3      4   5
// (...(...(...)))(...)(...) $1 $2 $3

console.log(texto.match(exp));
console.log(texto.replace(exp, 'Sei la'));
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return '##########' + input.toLocaleUpperCase() + '##########';
  }),
);
