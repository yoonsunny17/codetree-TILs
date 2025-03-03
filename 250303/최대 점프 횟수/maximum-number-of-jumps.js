const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = input[0].split(' ').map(Number);
const dp = Array.from({length: n}, () => -1);
dp[0] = 0; // 첫번째 위치에서 시작하므로 1 초기화

for (let i=1; i<n; i++) {
    for (let j=0; j<i; j++) {
        // 이전에 점프한 곳이 아니라면 스킵
        if (dp[j] === -1) continue;

        // 이전 위치에서 j칸 이내에 있다면 dp 갱신한다
        if (numbs[j] + j >= i) {
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}

console.log(Math.max(...dp));