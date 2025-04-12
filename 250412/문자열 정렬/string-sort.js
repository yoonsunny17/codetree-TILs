const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();

const arr = [...str];
arr.sort();

console.log(arr.join(''));