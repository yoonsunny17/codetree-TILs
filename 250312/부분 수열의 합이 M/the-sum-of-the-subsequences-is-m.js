const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
let dp = Array(m+1).fill(INT_MAX);
dp[0] = 0;

// 수열의 숫자를 차례대로 검사해본다
for (let i=0; i<n; i++) {
    // dp는 역순으로 체크해본다
    for (let j=m; j>=0; j--) {
        // 만약에 현재의 숫자가 합 j보다 작거나 같은 경우 고민해볼 수 있다
        if (j >= numbs[i]) {
            // 근데 현재 합 j에서 해당 숫자를 뺀 값이 아닌 경우라면 건너뛴다
            if (dp[j - numbs[i]] === INT_MAX) {
                continue;
            }

            // 숫자 합 j는 현재의 값 또는, 새로 더했을 때의 숫자 개수와 비교해서 최소 길이로 갱신한다
            dp[j] = Math.min(dp[j], dp[j - numbs[i]] + 1);
        }
    }
}

console.log(dp[m] === INT_MAX ? -1 : dp[m]);