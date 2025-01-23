const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

let ans = Number.MIN_SAFE_INTEGER;
for (let i=0; i<n-k+1; i++) {
    let sum = 0;
    for (let j=i; j<i+k; j++) {
        sum += numbs[j];
    }

    ans = Math.max(ans, sum);
}

console.log(ans);