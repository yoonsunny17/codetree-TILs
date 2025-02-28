const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(n).fill(0));
dp[0][0] = numbs[0][0]; // 출발 지점 초기화

// 오른쪽으로만 이동
for (let j=1; j<n; j++) {
    dp[0][j] = Math.max(dp[0][j-1], numbs[0][j]);
}

// 밑으로만 이동
for (let i=1; i<n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], numbs[i][0]);
}

// 나머지 칸 이동 >> 최댓값들 중 최솟값으로 갱신한다
for (let i=1; i<n; i++) {
    for (let j=1; j<n; j++) {
        dp[i][j] = Math.min(
            Math.max(dp[i][j-1], numbs[i][j]),
            Math.max(dp[i-1][j], numbs[i][j])
        );
    }
}

console.log(dp[n-1][n-1]);