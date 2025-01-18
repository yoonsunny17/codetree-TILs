const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let matrix = Array(201).fill(0).map(() => Array(201).fill(0));
for (let i=0; i<n; i++) {
    const [x, y] = input[i+1].split(' ').map(Number);

    for (let a=x; a<x+8; a++) {
        for (let b=y; b<y+8; b++) {
            matrix[a][b] = 1;
        }
    }
}

let cnt = 0;
for (let i=0; i<201; i++) {
    for (let j=0; j<201; j++) {
        if (matrix[i][j] === 1) {
            cnt++;
        }
    }
}

console.log(cnt)