const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let MAX_TIME = 1000000;

let listA = Array(MAX_TIME+1).fill(0);
let listB = Array(MAX_TIME+1).fill(0);

let inputLine = 1;
let timeA = 1, timeB = 1;
for (let i=0; i<n; i++) {
    let [v, t] = input[inputLine++].split(' ').map(Number);

    for (let j=0; j<t; j++) {
        listA[timeA] = listA[timeA-1] + v;
        timeA++;
    }
}

for (let i=0; i<m; i++) {
    let [v, t] = input[inputLine++].split(' ').map(Number);

    for (let j=0; j<t; j++) {
        listB[timeB] = listB[timeB-1] + v;
        timeB++;
    }
}

let cnt = 1;
let currentWinner = [];
for (let i=1; i<Math.max(timeA, timeB); i++) {
    if (listA[i] === listB[i]) {
        currentWinner.push('both');
    } else if (listA[i] > listB[i]) {
        currentWinner.push('A');
    } else {
        currentWinner.push('B');
    }

}

for (let i=1; i<currentWinner.length; i++) {
    if (currentWinner[i] !== currentWinner[i-1]) {
        cnt++;
    }
}

console.log(cnt)