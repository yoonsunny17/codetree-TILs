// 가로로 체크 >> 한 수열에서 m개씩 확인해봤을 때 행복한 수열을 만족하는지 확인한다
// 세로로 체크 >> 한 수열에서 m개씩 확인해봤을 때 행복한 수열을 만족하는지 확인한다

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const matrix = Array.from({length: n}, (_, i) => input[i].split(' ').map(Number));

// m이 1이면, 체크하는 2n개의 수열 모두 행복한 수열이다
if (m === 1) {
    console.log(2 * n);
    return;
}

let rlt = 0; // 행복한 수열 세어줄 변수

// 1. 가로로 체크
for (let i=0; i<n; i++) {
    let flag = false;
    for (let j=0; j<=n-m; j++) {
        for (let k=j; k<j+m; k++) {
            let slicedArr = matrix[i].slice(j, j+m);
            if (new Set(slicedArr).size === 1) {
                flag = true;
            }
        }
    }

    // 하나의 수열에서 한번이라도 행복한 수열이 있으면 +1
    if (flag) rlt++;
}

// 2. 세로로 체크
for (let j=0; j<n; j++) {
    let flag = true;
    for (let i=0; i<=n-m; i++) {
        for (let k=i; k<i+m-1; k++) {
            if (matrix[k][j] !== matrix[k+1][j]) {
                flag = false;
            }
        }
    }

    if (flag) rlt++;
}

console.log(rlt);