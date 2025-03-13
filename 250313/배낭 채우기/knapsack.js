const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const infos = Array.from({length: n}, (_, i) => input[i+1].split(' ').map(Number));

let dp = Array(m+1).fill(0);

// 보석 하나씩 꺼내서 확인해본다
for (let [w, v] of infos) {
    // 중복으로 들어가면 안되므로, 역 for문으로 확인해본다
    // dp[i] = 무게의 합 i일 때, 최대 가치
    for (let i=m; i>=w; i--) {
        // 현재 가치와, 무게가 w인 보석의 가치를 합했을 때의 가치를 비교한다
        dp[i] = Math.max(dp[i], dp[i - w] + v);
    }
}

console.log(dp[m]);