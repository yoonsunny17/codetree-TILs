const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const makeSquare = (curr) => {
    if (curr === 1) return 1;
    if (curr === 2) return 2;

    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i=3; i<=n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 10007;
    }

    return dp[n]
}

console.log(makeSquare(n));