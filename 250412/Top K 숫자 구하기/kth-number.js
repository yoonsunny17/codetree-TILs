const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

numbs.sort();
console.log(numbs[k-1]);