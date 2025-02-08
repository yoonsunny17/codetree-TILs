const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((line) => line.split(' ').map(Number));

function isHappy(numbs) {
    let prev = numbs[0];
    let maxCnt = 0;
    let cnt = 1;

    for (let i=1; i<n; i++) {
        if (numbs[i] === prev) {
            // 이전 숫자랑 동일하면 연속 체크
            cnt++;
         } else {
            // 이전 숫자와 다르면 최대 연속 개수 체크
            maxCnt = Math.max(maxCnt, cnt);
            // prev 갱신, cnt 초기화
            prev = numbs[i];
            cnt = 1;
         }
    }

    // 마지막 비교에서 나온 cnt도 최댓값과 비교해서 갱신한다
    maxCnt = Math.max(maxCnt, cnt);
    if (maxCnt >= m) {
        return true;
    }

    return false;
}

let rlt = 0;

// 가로로 n개 확인
for (let row of matrix) {
    if (isHappy(row)) {
        rlt++;
    }
}

// 세로로 n개 확인
for (let j=0; j<n; j++) {
    let numbs = [];
    for (let i=0; i<n; i++) {
        numbs.push(matrix[i][j]);
    }
    
    if (isHappy(numbs)) {
        rlt++;
    }
}
console.log(rlt);