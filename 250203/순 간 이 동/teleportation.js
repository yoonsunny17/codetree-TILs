const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b, x, y] = input;

let rlt;

// case 1. a -> b
const direct = Math.abs(a - b);

// case 2. a -> x -> y -> b
const transferXtoY = Math.abs(a - x) + Math.abs(y - b); 

// case 3. a -> y -> x -> b
const transferYtoX = Math.abs(a - y) + Math.abs(x - b);

rlt = Math.min(direct, transferXtoY, transferYtoX);
console.log(rlt);