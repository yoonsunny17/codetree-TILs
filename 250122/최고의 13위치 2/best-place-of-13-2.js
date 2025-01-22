const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

// step1. 첫번째 격자를 놓는다
let maxCnt = 0;
for (let i=0; i<n; i++) {
    // 격자 벗어나지 않는 범위 내에서 잡는다
    for (let j=0; j<n-2; j++) {
        // 두번째 격자를 놓는다
        for (let k=0; k<n; k++) {
            // 격자 벗어나지 않는 범위 내에서 잡는다
            for (let l=0; l<n-2; l++) {
                // step2. 두 격자가 겹치는 경우에 카운팅하지 않는다
                if (i === k && Math.abs(j-l) <= 2) {
                    continue;
                }

                // step3. 두 격자가 겹치지 않는 경우에 동전의 개수를 세어주고, 최댓값을 갱신한다.
                const coin1 = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];
                const coin2 = matrix[k][l] + matrix[k][l+1] + matrix[k][l+2];

                maxCnt = Math.max(maxCnt, coin1 + coin2);
            }
        }
    }
}

console.log(maxCnt);