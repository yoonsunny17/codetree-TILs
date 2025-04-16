const fs = require('fs');
const numbs = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum1 = 0;
for (let i=1; i<10; i+=2) {
    sum1 += numbs[i];
}

let sum2 = 0;
for (let i=2; i<10; i+=3) {
    sum2 += numbs[i];
}

console.log(sum1, (sum2/3).toFixed(1));