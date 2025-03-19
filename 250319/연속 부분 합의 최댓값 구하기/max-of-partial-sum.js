const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

const INT_MIN = Number.MIN_SAFE_INTEGER;
let dp = Array(n).fill(INT_MIN);
dp[0] = numbs[0]; // 0번째 dp = 수열의 첫 번째 원소의 값 (초기화)

// dp[i] = i번째 숫자까지 더한 부분수열 합 중 최댓값
for (let i=1; i<n; i++) {
    // i-1번째 부분수열 합에 i번째 숫자를 더한 값이 큰지, 아니면 i번째 숫자 자체만이 더 큰지 비교한다
    dp[i] = Math.max(numbs[i], dp[i-1] + numbs[i]);
}

console.log(dp);