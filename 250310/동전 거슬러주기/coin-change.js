const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
let dp = Array(m+1).fill(INT_MAX);
dp[0] = 0;

for (let i=1; i<=m; i++) {
    for (let j=0; j<n; j++) {
        // 지금까지 모은 동전의 합이, 이전의 동전 크기보다 큰 경우라면
        if (i >= coins[j]) {
            // 지금까지 모은 동전에서 이전 동전을 뺀 경우의 조합이 없으면 건너뛴다
            if (dp[i - coins[j]] === INT_MAX) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1);
        }
    }
}

console.log(dp[m] === INT_MAX ? -1 : dp[m]);