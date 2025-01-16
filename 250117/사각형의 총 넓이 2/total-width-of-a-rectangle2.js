const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let matrix = Array(200).fill(0).map(() => Array(200).fill(0))

for (let i=0; i<n; i++) {
    let [x1, y1, x2, y2] = input[i+1].split(' ').map(num => Number(num)+100);

    for (let i=x1; i<x2; i++) {
        for (let j=y1; j<y2; j++) {
            matrix[i][j]++
        }
    }
}

let cnt = 0;
for (let i=0; i<200; i++) {
    for (let j=0; j<200; j++) {
        if (matrix[i][j] >= 1) {
            cnt++
        }
    }
}

console.log(cnt)