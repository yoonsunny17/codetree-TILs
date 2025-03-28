// dp[i][j] = i층까지 도달했을 때, j번 1칸 이동을 했을 경우, 얻을 수 있는 동전의 최댓값
// case 1. i층에 도달했는데, 1칸 이동을 하지 않은 경우 >> i-2층에서 올라와야 한다.
// case 2. i층에 도달했는데, 1칸 이동을 한 경우 >> i-1층에서 올라와야 한다.

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const coins = [0, ...input[1].split(' ').map(Number)];
const INT_MIN = Number.MIN_SAFE_INTEGER;

const dp = Array.from({length: n+1}, () => Array(4).fill(INT_MIN));
dp[0][0] = 0; // dp 초기화 (0번째 계단 올라간 경우)

// 1층부터 n층까지 확인해본다
for (let i=1; i<=n; i++) {
    // 1칸 올라오는 경우 (전 칸이 1보다 커야 한다)
    if (i-1 >= 0) {
        // 무조건 1칸 올라오는 경우가 한번 있으므로 0번 사용한 경우는 고려하지 않는다
        for (let j=1; j<=3; j++) {
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + coins[i]);
        }
    }

    // 2칸 올라오는 경우 (전 칸이 2보다 커야 한다)
    if (i-2 >= 0) {
        // 1칸 올라온 경우가 없을수도 있으므로 0번 사용한 경우도 고려한다
        for (let j=0; j<=3; j++) {
            dp[i][j] = Math.max(dp[i][j], dp[i-2][j] + coins[i]);
        }
    }
}

console.log(Math.max(...dp[n]));