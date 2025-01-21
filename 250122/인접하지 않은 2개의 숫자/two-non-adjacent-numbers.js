const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbs = input[1].split(' ').map(Number);

let rlt = 0; // 최종 최댓값 출력할 변수

// 기준이 될 숫자 하나를 선택한다
for (let i=0; i<n; i++) {
    let base = numbs[i];
    let maxTmpCnt = 0;
    for (let j=0; j<n; j++) {
        if (j === i || j === i-1 || j === i+1) {
            continue;
        }

        maxTmpCnt = Math.max(maxTmpCnt, base+numbs[j]);
    }

    rlt = Math.max(rlt, maxTmpCnt);
}

console.log(rlt);