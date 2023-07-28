//g - global (encontra todas as ocorrências)
//i - insensitive
// () grupos
// | ou

const {texto} = require('./base');

// const regExp1 = /João/i;
// const regExp1 = /João/gi;
const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
// console.log(regExp1.test(texto));
const fould = regExp1.test(texto);

if (fould) {
    console.log(fould[0]);
    console.log(fould[1]);
    console.log(fould[2]);
}