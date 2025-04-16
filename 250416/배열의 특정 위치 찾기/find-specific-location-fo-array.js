const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let even_numbs = numbs.filter((v) => v % 2 === 0);
let sum1 = even_numbs.reduce((acc, curr) => acc + curr, 0);

let three_numbs = numbs.filter((v) => v % 3 === 0);
let sum2 = three_numbs.reduce((acc, curr) => acc + curr, 0);

console.log(sum1, (sum2 / three_numbs.length).toFixed(1));