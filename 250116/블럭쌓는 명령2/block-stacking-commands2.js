const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let blocks = Array(n+1).fill(0);

for (let i=0; i<k; i++) {
    const [a, b] = input[i+1].split(' ').map(Number);

    for (let j=a; j<=b; j++) {
        blocks[j]++;
    };
};

console.log(Math.max(...blocks));