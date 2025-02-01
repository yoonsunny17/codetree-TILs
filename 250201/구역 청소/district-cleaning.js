const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const maxVal = Math.max(a, b, c, d);
const minVal = Math.min(a, b, c, d);

console.log(maxVal - minVal);