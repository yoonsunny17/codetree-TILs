const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = [10001].concat(input[0].split(' ').map(Number));
const dp = Array.from({length: n+1}, () => 0);

for (let i=1; i<=n; i++) {
    for (let j=0; j<i; j++) {
        if (numbs[j] > numbs[i]) {
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}

console.log(Math.max(...dp));