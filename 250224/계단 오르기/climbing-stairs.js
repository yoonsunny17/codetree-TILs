const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

// n번째 계단에 오르는 방법 수를 저장한다
const dp = Array(n+1).fill(0);

if (n === 1) {
    console.log(0);
    return
};

if (n === 2) {
    console.log(1);
    return
}

if (n === 3) {
    console.log(1);
    return
}

dp[0] = 1;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i=4; i<=n; i++) {
    dp[i] = dp[i-2] + dp[i-3];
}

console.log(dp[n]);