const { cpfs, cpfs2 } = require('./base');

// ^  -> Começa com
// $ -> Temina com
// [^] negação não confundir
// m-multiline

const cpf = '254.224.877-45';
const cpfRegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/gm;
console.log(cpf.match(cpfRegExp));
console.log(cpfs.match(cpfRegExp));
console.log(cpfs2.match(cpfRegExp));
