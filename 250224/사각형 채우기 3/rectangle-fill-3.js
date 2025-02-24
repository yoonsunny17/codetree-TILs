const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

function countWays(n) {
    if (n === 1) return 1;
    if (n === 1) return 2;
    if (n === 2) return 7;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    dp[2] = 7;

    for (let i = 3; i <= n; i++) {
        dp[i] = (3 * dp[i-1] + dp[i-2] - dp[i-3]) % 1000000007;
    }
    return dp[n];
}

console.log(countWays(n));
