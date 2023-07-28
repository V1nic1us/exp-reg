const { ips, cpfs } = require('./base');

// ^ -> Começa com
// $ -> Termina com

console.log(ips, 'fim');
// console.log(cpfs, 'fim');
// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
// console.log(ips.match(/(\d{1,3}\.){3}\d{1,3}/g));
console.log(ips.match(/((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g));
// const expReg = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(expReg));
// }
