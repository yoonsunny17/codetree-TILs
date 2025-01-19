const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// 1초부터 1000초까지 이동한 거리 체크해줄 리스트
let lstA = Array(1001).fill(0);
let lstB = Array(1001).fill(0);

let idxA = 0;
let idxB = 0;

// A 이동 위치 체크
for (let i=0; i<n; i++) {
    let [d, t] = input[i+1].split(' ');

    if (d === 'R') {
        for (let i=1; i<=Number(t); i++) {
            lstA[idxA+i] = lstA[idxA+i-1] + 1;
        }
    } else {
        for (let i=1; i<=Number(t); i++) {
            lstA[idxA+i] = lstA[idxA+i-1] - 1;
        }
    }
    idxA = idxA+Number(t);
}

// B 이동 위치 체크
for (let i=0; i<m; i++) {
    let [d, t] = input[i+n+1].split(' ');

    if (d === 'R') {
        for (let i=1; i<=Number(t); i++) {
            lstB[idxB+i] = lstB[idxB+i-1] + 1;
        }
    } else {
        for (let i=1; i<=Number(t); i++) {
            lstB[idxB+i] = lstB[idxB+i-1] - 1;
        }
    }
    idxB = idxB+Number(t);
}

for (let i=1; i<1001; i++) {
    if (lstA[i] === lstB[i]) {
        console.log(i);
        break;
    }
}