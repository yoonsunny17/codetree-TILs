const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const dp = Array.from({length: n}, () => Array(n).fill(0));
dp[0][n-1] = numbs[0][n-1]; // 처음 위치 초기화

// 왼쪽으로만 이동
for (let j=n-2; j>=0; j--) {
    dp[0][j] = dp[0][j+1] + numbs[0][j];
}

// 밑으로만 이동
for (let i=1; i<n; i++) {
    dp[i][n-1] = dp[i-1][n-1] + numbs[i][n-1];
}

// 나머지 계산 (왼쪽 / 밑 중 최솟값 선택한다)
for (let i=1; i<n; i++) {
    for (let j=n-2; j>=0; j--) {
        dp[i][j] = Math.min(dp[i][j+1], dp[i-1][j]) + numbs[i][j];
    }
}

console.log(dp[n-1][0]);