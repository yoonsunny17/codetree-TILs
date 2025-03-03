const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = input[0].split(' ').map(Number);
const dp = Array.from({length: n}, () => -1);
dp[0] = 1;

for (let i=1; i<n; i++) {
    for (let j=0; j<i; j++) {
        if (dp[j] === -1) continue;

        // 조건을 만족한다면 (현재가 이전 숫자보다 더 큰 숫자라면) dp 갱신해준다
        if (numbs[j] < numbs[i]) {
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}

console.log(Math.max(...dp));