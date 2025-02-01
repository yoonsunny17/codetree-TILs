const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const infos = Array.from({length:n}, (_, i) => input[i+1].split(' ').map(Number));

let flag = false;
// 선분 하나씩 제거하면서 확인한다
for (let i=0; i<n; i++) {
    let maxStart = 0;
    let minEnd = 101;
    for (let j=0; j<n; j++) {
        if (j === i) {
            // 제거해야 할 대상이면, 제외하고 확인한다
            continue;
        }

        // 시작점 중 가장 최댓값, 끝점 중 가장 최솟값을 구한다
        let [a, b] = infos[j];
        maxStart = Math.max(maxStart, a);
        minEnd = Math.min(minEnd, b);
    }

    if (maxStart <= minEnd) {
        flag = true;
    }
}

console.log(flag ? "Yes" : "No");