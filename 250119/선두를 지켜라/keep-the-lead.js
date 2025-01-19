const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let MAX_TIME = 1000000;
let listA = Array(MAX_TIME+1).fill(0);
let listB = Array(MAX_TIME+1).fill(0);

let inputLine = 1;
let timeA = 1, timeB = 1;

// a의 정보
for (let i=0; i<n; i++) {
    let [v, t] = input[inputLine++].split(' ').map(Number);

    for (let j=0; j<t; j++) {
        listA[timeA] = listA[timeA-1] + v;
        timeA++;
    }
}

// b의 정보
for (let i=0; i<m; i++) {
    let [v, t] = input[inputLine++].split(' ').map(Number);

    for (let j=0; j<t; j++) {
        listB[timeB] = listB[timeB-1] + v;
        timeB++;
    }
}

let cnt = 0;
let currentLeader = null; // A || B || null

for (let i=1; i<= Math.max(timeA, timeB); i++) {
    if (listA[i] > listB[i]) {
        // A가 선두인 경우
        if (currentLeader !== 'A') {
            currentLeader = 'A';
            cnt++;
        }
    } else if (listA[i] < listB[i]) {
        // B가 선두인 경우
        if (currentLeader !== 'B') {
            currentLeader = 'B';
            cnt++;
        }
    }
}

console.log(cnt-1);