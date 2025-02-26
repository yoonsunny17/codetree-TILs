const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0].trim());
const matrix = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

const dp = Array.from({length: n}, () => Array(n).fill(0));

dp[0][0] = matrix[0][0];

// 오른쪽으로만 이동했을 때 점수 누적 계산한다
for (let j=1; j<n; j++) {
    dp[0][j] = dp[0][j-1] + matrix[0][j];
}

// 아래로만 이동했을 때 점수 누적 계산한다
for (let i=1; i<n; i++) {
    dp[i][0] = dp[i-1][0] + matrix[i][0];
}

// 나머지 위치 계산한다
for (let i=1; i<n; i++) {
    for (let j=1; j<n; j++) {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + matrix[i][j];
    }
}

console.log(dp[n-1][n-1]);