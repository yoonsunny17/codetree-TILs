const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const numbs = input[0].split(' ').map(Number);

let maxVal = -1;

// 각 인덱스를 수열의 시작점으로 잡아본다
for (let i=0; i<n; i++) {
    const dp = Array.from({length: n}, () => -1);
    dp[i] = 1;

    for (let i=1; i<n; i++) {
        for (let j=0; j<i; j++) {
            if (dp[j] === -1) continue;
            
            // 조건을 만족한다면, dp를 갱신해준다
            if (numbs[j] < numbs[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }

    // 해당 수열에서 나올 수 있는 최대 길이를 뽑고, 최종값을 갱신한다
    let maxCnt = Math.max(...dp);
    maxVal = Math.max(maxVal, maxCnt);
}

console.log(maxVal);