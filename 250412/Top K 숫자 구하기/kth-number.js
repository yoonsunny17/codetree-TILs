const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const numbs = input[1].trim().split(' ').map(Number);

numbs.sort((a, b) => a-b);
console.log(numbs[k-1]);