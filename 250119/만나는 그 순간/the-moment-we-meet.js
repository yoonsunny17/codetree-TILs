const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let MAX_TIME = 1000000;
// 1초부터 1000초까지 이동한 거리 체크해줄 리스트
let lstA = Array(MAX_TIME + 1).fill(0);
let lstB = Array(MAX_TIME + 1).fill(0);

let inputLine = 1;
let timeA = 1, timeB = 1;

// a가 이동한 경로 체크
for (let i=0; i<n; i++) {
    const [d, t] = input[inputLine++].split(' ');
    for (let j=0; j<Number(t); j++) {
        lstA[timeA] = lstA[timeA-1] + (d === 'R' ? 1 : -1);
        timeA++
    }
}

// b가 이동한 경로 체크
for (let i=0; i<m; i++) {
    const [d, t] = input[inputLine++].split(' ');
    for (let j=0; j<Number(t); j++) {
        lstB[timeB] = lstB[timeB-1] + (d === 'R' ? 1 : -1);
        timeB++
    }
}

let ans = -1;
for (let i=1; i<MAX_TIME+1; i++) {
    if (lstA[i] === lstB[i]) {
        ans = i;
        break;
    }
}

console.log(ans);