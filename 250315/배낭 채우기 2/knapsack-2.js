const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let dp = Array(m+1).fill(0);

for (let [w, v] of infos) {
    for (i=w; i<=m; i++) {
        dp[i] = Math.max(dp[i], dp[i - w] + v);
    }
}

console.log(dp[m]);