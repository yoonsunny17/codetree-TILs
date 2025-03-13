const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
let dp = Array(m+1).fill(INT_MAX);
dp[0] = 0;

// 수열의 숫자를 차례대로 확인해본다
for (let i=0; i<n; i++) {
    // dp[j] = 합 j를 이루는 원소의 개수
    // 역순으로 확인해서 각 원소를 단 한번만 사용하도록 한다
    for (j=m; j>=1; j--) {
        if (j >= numbs[i]) {
            // 아직 수열이 들어온 경우가 없다면 건너뛴다
            if (dp[j - numbs[i]] === INT_MAX) {
                continue;
            }

            dp[j] = dp[j - numbs[i]] + 1;
        }
    }
}

console.log(dp[m] === INT_MAX ? 'No' : 'Yes');