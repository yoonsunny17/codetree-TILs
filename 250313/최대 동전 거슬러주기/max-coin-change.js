const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbs = input[1].trim().split(' ').map(Number);

const MIN_INT = Number.MIN_SAFE_INTEGER;
let dp = Array(m+1).fill(MIN_INT);
dp[0] = 0;

// dp[i] = 합 i가 만들어지는 데 필요한 동전의 최대 개수
// 합이 1일 때부터 m일때까지 확인한다
for (let i=1; i<=m; i++) {
    // 가지고 있는 동전에 대해 반복해서 확인해본다
    for (let numb of numbs) {
        // 만약 합 i에서 갖고있는 동전을 뺐을 때 0 이상이라면, 더할 수 있다는 것
        if (i - numb >= 0) {
            dp[i] = Math.max(dp[i], dp[i-numb] + 1);
        }
    }
}

console.log(dp[m] < 0 ? -1 : dp[m]);