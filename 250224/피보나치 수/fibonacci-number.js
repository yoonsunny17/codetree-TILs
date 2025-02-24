const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

// tabulation
let dp = Array(n).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i=2; i<n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n-1]);