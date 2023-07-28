const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} Mínimo e Máximo
// {10,} no Mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

// const regExp2 = /\.jpe?g/g;
// const regExp3 = /\.jpe{0,1}g/g;
const regExp4 = /\.jp(e|E)?g/g;

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regExp4));
}
