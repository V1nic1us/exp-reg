const { html2 } = require('./base');

// $1 $2 $3 <- Retrovisores \1

// p Olá mundo
// <p>Olá mundo</p>

console.log(html2, 'fim');
// console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/gi));
console.log(html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 "$4" $5'));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 "$3" $4')); // ?: ignora o grupo assim ele não conta
