const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(n).fill(0));

dp[0][0] = matrix[0][0];

// 오른쪽으로 이동
for (let j=1; j<n; j++) {
    dp[0][j] = Math.min(dp[0][j-1], matrix[0][j]);
}

// 밑으로 이동
for (let i=1; i<n; i++) {
    dp[i][0] = Math.min(dp[i-1][0], matrix[i][0]);
}

for (let i=1; i<n; i++) {
    for (let j=1; j<n; j++) {
        // 최솟값들 중 최댓값으로 갱신해준다
        // 현재값을 기준으로, (1.왼쪽과 현재값 중 최솟값 2.위쪽과 현재값 중 최솟값) 중 최댓값을 갱신한다.
        dp[i][j] = Math.max(
            Math.min(dp[i][j-1], matrix[i][j]),
            Math.min(dp[i-1][j], matrix[i][j])
        )
    }
}

console.log(dp[n-1][n-1]);
