const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const costs = input[1].split(' ').map(Number);

let dp = Array(n+1).fill(0);

// dp[i] = 길이 i일 때 가질 수 있는 수익의 최댓값
for (let i=1; i<=n; i++) {
    // 막대길이 1부터 n까지 확인해본다
    for (let j=1; j<=n; j++) {
        // 길이 i보다 작은 막대기 j일 때, 길이 i일 때의 수익의 최댓값을 갱신한다
        if (i - j >= 0) {
            dp[i] = Math.max(dp[i], dp[i - j] + costs[j-1]);
        }
    }
}

console.log(dp[n]);