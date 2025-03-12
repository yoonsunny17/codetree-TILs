const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

function countWays(n) {
    const MOD = 10007;
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;

    const numbs = [1, 2, 5];

    for (let i=1; i<=n; i++) {
        for (let num of numbs) {
            if (i - num >= 0) {
                dp[i] = (dp[i] + dp[i-num]) % MOD;
            }
        }
    }

    return dp[n];
}

console.log(countWays(n));