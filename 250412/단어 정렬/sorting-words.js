const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = Array.from({length: n}, (_, i) => input[i+1]);

words.sort();
console.log(words.join('\n'));