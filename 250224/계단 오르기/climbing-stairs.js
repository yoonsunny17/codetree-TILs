const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

const stepping = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n === 3) return 1;

    // n층까지 올라가는 방법의 수를 저장한다
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 0;
    dp[2] = 1;
    dp[3] = 1;

    // n층에 올라가는 방법의 수 = n-2층까지 올라가는 방법 + n-3층까지 올라가는 방법
    for (let i=4; i<=n; i++) {
        // 10007로 나눈 나머지를 저장한다
        dp[i] = (dp[i-2] + dp[i-3]) % 10007;
    }

    return dp[n];
}

console.log(stepping(n));