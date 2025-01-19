const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let inputLine = 1;
let OFFSET = 1000000;

let listA = Array(OFFSET+1).fill(0);
let listB = Array(OFFSET+1).fill(0);

// A 로봇 움직임 체크
let timeA = 1;
for (let i=0; i<n; i++) {
    let [t, d] = input[inputLine++].split(' ');
    
    for (let j=0; j<Number(t); j++) {
        listA[timeA] = listA[timeA-1] + (d === 'R' ? 1 : -1);
        timeA++;
    }
}

// B 로봇 움직임 체크
let timeB = 1;
for (let i=0; i<m; i++) {
    let [t, d] = input[inputLine++].split(' ');

    for (let j=0; j<Number(t); j++) {
        listB[timeB] = listB[timeB-1] + (d === 'R' ? 1 : -1);
        timeB++;
    }
}

if (timeA > timeB) {
    // A가 B보다 더 오랫동안 움직인 경우
    for (let i=timeB; i<timeA; i++) {
        listB[i] = listB[timeB-1];
    }
} else if (timeA < timeB) {
    // B가 A보다 더 오랫동안 움직인 경우
    for (let i=timeA; i<timeB; i++) {
        listA[i] = listA[timeA-1];
    }
}

let cnt = 0;
for (let i=2; i<Math.max(timeA, timeB); i++) {
    if (listA[i] === listB[i] && listA[i-1] !== listB[i-1]) {
        cnt++;
    }
}

console.log(cnt);